/**
 * sync-notes.mjs
 * Copies content from the `nishok-notes` repo into this site so it can be built:
 *   - Markdown files (*.md / *.mdx)  → content/notes/   (read by lib/notes.ts)
 *   - Everything else (images, etc.) → public/notes/     (served as /notes/<path>)
 *
 * Source location resolution (first match wins):
 *   1. NOTES_SRC env var            (used by CI: points at the checked-out repo)
 *   2. ../nishok-notes              (local dev, sibling checkout)
 *
 * README.md at the notes-repo root is skipped (it documents the repo, it's not a note).
 *
 * Run via: node scripts/sync-notes.mjs   (wired into `dev` and `build` in package.json)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const CANDIDATES = [
  process.env.NOTES_SRC,
  path.join(ROOT, "..", "nishok-notes"),
].filter(Boolean);

const SRC = CANDIDATES.find((p) => fs.existsSync(p));

const NOTES_CONTENT_DIR = path.join(ROOT, "content/notes");
const NOTES_PUBLIC_DIR = path.join(ROOT, "public/notes");

const MD_EXT = new Set([".md", ".mdx"]);
const SKIP_AT_ROOT = new Set(["README.md", "readme.md"]);
const SKIP_DIRS = new Set([".git", "node_modules", ".github"]);

function reset(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function walk(srcDir, relBase = "") {
  let mdCount = 0;
  let assetCount = 0;
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const rel = path.join(relBase, entry.name);
    const abs = path.join(srcDir, entry.name);

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      const sub = walk(abs, rel);
      mdCount += sub.mdCount;
      assetCount += sub.assetCount;
      continue;
    }

    if (relBase === "" && SKIP_AT_ROOT.has(entry.name)) continue;

    const ext = path.extname(entry.name).toLowerCase();
    if (MD_EXT.has(ext)) {
      // Flatten markdown into content/notes/ so the slug is just the filename.
      const dest = path.join(NOTES_CONTENT_DIR, entry.name);
      fs.copyFileSync(abs, dest);
      mdCount++;
    } else {
      // Preserve structure for assets so relative-ish references resolve under /notes/.
      const dest = path.join(NOTES_PUBLIC_DIR, rel);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(abs, dest);
      assetCount++;
    }
  }
  return { mdCount, assetCount };
}

if (!SRC) {
  console.warn(
    "[sync-notes] No notes source found (checked NOTES_SRC and ../nishok-notes). " +
      "Creating empty content/notes/ — the /notes section will be empty."
  );
  reset(NOTES_CONTENT_DIR);
  reset(NOTES_PUBLIC_DIR);
  process.exit(0);
}

reset(NOTES_CONTENT_DIR);
reset(NOTES_PUBLIC_DIR);
const { mdCount, assetCount } = walk(SRC);
console.log(
  `[sync-notes] Synced from ${SRC}: ${mdCount} note(s) → content/notes/, ${assetCount} asset(s) → public/notes/`
);
