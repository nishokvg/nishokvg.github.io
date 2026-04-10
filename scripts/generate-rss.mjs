/**
 * generate-rss.mjs
 * Generates public/feed.xml at build time.
 * Run via: node scripts/generate-rss.mjs
 * Wired into build via package.json "build" script.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "content/posts");
const PUBLIC_DIR = path.join(ROOT, "public");

const SITE_URL = "https://nishokvg.github.io";
const SITE_TITLE = "Nishok's Kural & Cloud";
const SITE_DESCRIPTION =
  "Engineering blog covering SRE, AI/ML, Tamil literature, and cloud infrastructure by Nishok VG.";
const AUTHOR = "Nishok VG";

function escapeXml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        published: data.published !== false,
      };
    })
    .filter((p) => p.published && p.date)
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
}

function buildRss(posts) {
  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/posts/${p.slug}/`;
      const pubDate = new Date(p.date + "T00:00:00Z").toUTCString();
      const categories = p.tags
        .map((t) => `    <category>${escapeXml(t)}</category>`)
        .join("\n");

      return `  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <pubDate>${pubDate}</pubDate>
    <description>${escapeXml(p.excerpt)}</description>
${categories}
  </item>`;
    })
    .join("\n");

  const lastBuild = new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>${AUTHOR}</managingEditor>
    <webMaster>${AUTHOR}</webMaster>
${items}
  </channel>
</rss>`;
}

const posts = getPosts();
const xml = buildRss(posts);

fs.mkdirSync(PUBLIC_DIR, { recursive: true });
fs.writeFileSync(path.join(PUBLIC_DIR, "feed.xml"), xml, "utf8");

console.log(`RSS feed generated: ${posts.length} posts → public/feed.xml`);
