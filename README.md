# Nishok's Kural & Cloud — `nishokvg.github.io`

Personal site of **Nishok Vishnu Ganesan** — an engineering journal plus a growing set of
reference notes. *Ancient wisdom. Modern infrastructure. One life, many threads.*

🔗 Live: https://nishokvg.github.io

---

## Stack

| Concern        | Choice                                             |
| -------------- | -------------------------------------------------- |
| Framework      | Next.js 14 (App Router), **static export** (`output: "export"`) |
| Styling        | Tailwind CSS + `@tailwindcss/typography`           |
| Content        | Markdown / MDX via `next-mdx-remote`, `gray-matter` frontmatter |
| Hosting        | GitHub Pages, deployed by GitHub Actions           |
| Fonts          | Inter (sans), Playfair Display (serif), JetBrains Mono (mono) |

Static export means there is no server — every page is pre-rendered to HTML in `out/` at
build time and served as static files.

---

## Two kinds of content

The site surfaces two **separate** content streams that share the same look & feel:

| Section   | Route            | Source                          | Ordering          | Purpose                              |
| --------- | ---------------- | ------------------------------- | ----------------- | ------------------------------------ |
| **Posts** | `/posts/[slug]`  | `content/posts/*.mdx` (in this repo) | by date (newest first) | Dated journal entries — the blog. Included in the RSS feed. |
| **Notes** | `/notes`, `/notes/[slug]` | `content/notes/*.md` (synced from [`nishok-notes`](https://github.com/nishokvg/nishok-notes)) | grouped by category, sorted by title | Evergreen cheatsheets / references. **Not** in the RSS feed. |

Posts and Notes are kept apart on purpose: journals are chronological and narrative; notes
are timeless references you revise over time. Mixing them would pollute the blog timeline
and the feed.

---

## How Notes work (the `nishok-notes` integration)

Notes live in their **own repo** so they can be written and versioned independently. The site
pulls them in **at build time** — you never copy notes by hand, and they are never committed
to this repo.

```
nishok-notes (write here)              nishokvg.github.io (this repo, auto-built)
┌─────────────────────────┐            ┌────────────────────────────────────────┐
│ linux-cmd.md  (+frontmatter)         │ CI checks out BOTH repos                │
│ git-basics.md            │  push ──▶ │ scripts/sync-notes.mjs copies:          │
│ assets/diagram.png       │ triggers  │   *.md   → content/notes/  (read by lib)│
└─────────────────────────┘ rebuild   │   assets → public/notes/   (served)     │
                                       │ next build → out/ → GitHub Pages         │
                                       │   /notes  +  /notes/[slug]              │
                                       └────────────────────────────────────────┘
```

### The sync step — `scripts/sync-notes.mjs`
Runs automatically before `dev` and `build`. It locates the notes source, then:
- copies every `*.md` / `*.mdx` into `content/notes/` (flattened — slug = filename),
- copies everything else (images, etc.) into `public/notes/`, preserving structure,
- skips the notes repo's own `README.md`.

Source resolution (first match wins):
1. `NOTES_SRC` env var — used by CI, points at the checked-out notes repo.
2. `../nishok-notes` — local dev sibling checkout.

If no source is found it logs a warning and leaves `/notes` empty (the build still succeeds).

> `content/notes/` and `public/notes/` are **generated artifacts** and are git-ignored. The
> source of truth is the `nishok-notes` repo.

### Auto-rebuild
- This repo's deploy workflow listens for a `repository_dispatch` event of type `notes-updated`.
- The `nishok-notes` repo fires that event on every push (see its `notify-site.yml`).
- Net effect: **push a note → the site rebuilds itself.** You can also trigger a build manually
  from the Actions tab ("Run workflow").

---

## Project layout

```
app/
  layout.tsx              Root layout + top nav (Home · Notes · About)
  page.tsx                Home — list of posts
  about/page.tsx
  posts/[slug]/page.tsx   A journal post
  notes/page.tsx          /notes index, grouped by category
  notes/[slug]/page.tsx   A single note
components/
  mdxComponents.tsx       Shared MDX element styling (used by BOTH posts & notes)
  PostCard.tsx            Post list item (shows date + reading time)
  NoteCard.tsx            Note list item (no date — evergreen)
  Sidebar.tsx, TagPill.tsx, TerminalHeader.tsx, ThemeToggle.tsx, WhatIWriteAbout.tsx
content/
  posts/*.mdx             Journal posts (source of truth, committed here)
  notes/                  Synced from nishok-notes at build time (git-ignored)
lib/
  posts.ts                Read/parse posts
  notes.ts                Read/parse + group notes by category
  tags.ts                 Tag → colour mapping
scripts/
  sync-notes.mjs          Pull notes content from the nishok-notes repo
  generate-rss.mjs        Build public/feed.xml from posts
public/
  notes/                  Synced note assets (git-ignored)
```

---

## Local development

Clone this repo **and** `nishok-notes` as siblings so notes resolve automatically:

```
project/
  nishok-github-io/   ← this repo
  nishok-notes/       ← notes source
```

```bash
npm install
npm run dev      # runs sync-notes, then next dev → http://localhost:3000
```

Useful scripts:

| Command            | What it does                                                |
| ------------------ | ----------------------------------------------------------- |
| `npm run dev`      | Sync notes, then start the dev server                       |
| `npm run build`    | Sync notes, generate RSS, then static-export to `out/`      |
| `npm run sync:notes` | Just re-pull notes from `../nishok-notes` (or `NOTES_SRC`) |
| `npm run lint`     | Next.js lint                                                |

Point the sync at a notes checkout elsewhere:

```bash
NOTES_SRC=/path/to/nishok-notes npm run build
```

---

## Writing content

### A journal post — `content/posts/<slug>.mdx`
```yaml
---
title: "Day 10: RAG - Retrieval Augmented Generation"
date: "2026-03-16"
tags: ["RAG", "FAISS", "embeddings", "LLM"]
excerpt: "Building an end-to-end RAG pipeline with FAISS."
---
```
Don't add an `# H1` — the page renders the title from `title`.

### A note
Notes are authored in the **`nishok-notes`** repo, not here. See that repo's README for the
frontmatter convention. They appear under `/notes` after the next build.

---

## Deployment

`.github/workflows/deploy.yml` runs on push to `main`, on `repository_dispatch: notes-updated`,
or manually. It checks out this repo + `nishok-notes`, runs `npm ci && npm run build`, and
publishes `out/` to GitHub Pages.
