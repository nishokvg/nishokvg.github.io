import fs from "fs";
import path from "path";
import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "content/notes");

export interface NoteMeta {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  excerpt: string;
}

export interface Note extends NoteMeta {
  content: string;
}

const UNCATEGORIZED = "Uncategorized";

function ensureNotesDir() {
  if (!fs.existsSync(notesDirectory)) {
    fs.mkdirSync(notesDirectory, { recursive: true });
  }
}

export function getAllNoteSlugs(): string[] {
  ensureNotesDir();
  return fs
    .readdirSync(notesDirectory)
    .filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
    .map((name) => name.replace(/\.(mdx|md)$/, ""));
}

function readNoteFile(slug: string): { data: matter.GrayMatterFile<string>["data"]; content: string } | null {
  const mdxPath = path.join(notesDirectory, `${slug}.mdx`);
  const mdPath = path.join(notesDirectory, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, "utf8");
  return matter(fileContents);
}

export function getNoteMeta(slug: string): NoteMeta | null {
  try {
    const file = readNoteFile(slug);
    if (!file) return null;
    const { data } = file;
    return {
      slug,
      title: data.title ?? slug,
      category: data.category ?? UNCATEGORIZED,
      tags: data.tags ?? [],
      excerpt: data.excerpt ?? "",
    };
  } catch {
    return null;
  }
}

export function getNote(slug: string): Note | null {
  try {
    const file = readNoteFile(slug);
    if (!file) return null;
    const { data, content } = file;
    return {
      slug,
      title: data.title ?? slug,
      category: data.category ?? UNCATEGORIZED,
      tags: data.tags ?? [],
      excerpt: data.excerpt ?? "",
      content,
    };
  } catch {
    return null;
  }
}

export function getAllNotes(): NoteMeta[] {
  ensureNotesDir();
  return getAllNoteSlugs()
    .map((slug) => getNoteMeta(slug))
    .filter((note): note is NoteMeta => note !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export interface NoteGroup {
  category: string;
  notes: NoteMeta[];
}

/** Notes grouped by category, categories sorted alphabetically. */
export function getNotesByCategory(): NoteGroup[] {
  const groups = new Map<string, NoteMeta[]>();
  for (const note of getAllNotes()) {
    const list = groups.get(note.category) ?? [];
    list.push(note);
    groups.set(note.category, list);
  }
  return Array.from(groups.entries())
    .map(([category, notes]) => ({ category, notes }))
    .sort((a, b) => a.category.localeCompare(b.category));
}
