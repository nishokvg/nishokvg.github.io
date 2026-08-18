import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getAllPostSlugs, getPost, formatDate } from "@/lib/posts";
import TagPill from "@/components/TagPill";
import MdxContent from "@/components/MdxContent";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  const url = `${SITE_URL}/posts/${params.slug}/`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs mb-6" style={{ color: "var(--text-muted)" }}>
        <a href="/" className="transition-colors hover:text-[var(--accent-indigo)]">~/home</a>
        <span>/</span>
        <span>posts</span>
        <span>/</span>
        <span style={{ color: "var(--accent-indigo)" }} className="truncate">{params.slug}</span>
      </div>

      {/* Back */}
      <a href="/" className="inline-flex items-center gap-1.5 text-sm transition-colors mb-8 group
                             text-[var(--text-muted)] hover:text-[var(--accent-indigo)]">
        <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
        Back to all posts
      </a>

      <article>
        {/* Terminal title bar */}
        <div className="flex items-center gap-2 rounded-t-lg px-4 py-2 border border-b-0"
             style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--bg-border)" }}>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-xs truncate flex-1" style={{ color: "var(--text-muted)" }}>
            {params.slug}.mdx
          </span>
        </div>

        {/* Post header */}
        <div className="rounded-b-lg border border-t-0 px-6 pt-6 pb-7 mb-8"
             style={{ borderColor: "var(--bg-border)", backgroundColor: "var(--bg-surface)" }}>
          {/* Tags + meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap gap-1.5">
              {post!.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
            </div>
            <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              {formatDate(post!.date)} · {post!.readingTime}
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight mb-3"
              style={{ color: "var(--text-primary)" }}>
            {post!.title}
          </h1>

          {post!.excerpt && (
            <p className="text-base leading-relaxed italic border-l-2 pl-4"
               style={{ color: "var(--text-secondary)", borderColor: "rgba(129,140,248,0.5)" }}>
              {post!.excerpt}
            </p>
          )}
        </div>

        {/* MDX body */}
        <div className="space-y-2">
          <MdxContent source={post!.content} />
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t flex items-center justify-between"
             style={{ borderColor: "var(--bg-border)" }}>
          <a href="/" className="inline-flex items-center gap-1.5 text-sm transition-colors group
                             text-[var(--accent-indigo)] hover:text-[var(--accent-indigo-hover)]">
            <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
            All posts
          </a>
          <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            {post!.readingTime}
          </span>
        </div>
      </article>
    </div>
  );
}
