import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllNoteSlugs, getNote } from "@/lib/notes";
import TagPill from "@/components/TagPill";
import { mdxComponents } from "@/components/mdxComponents";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const note = getNote(params.slug);
  if (!note) return { title: "Note Not Found" };
  return { title: note.title, description: note.excerpt, keywords: note.tags };
}

export default function NotePage({ params }: Props) {
  const note = getNote(params.slug);
  if (!note) notFound();

  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs mb-6" style={{ color: "var(--text-muted)" }}>
        <a href="/" className="transition-colors hover:text-[var(--accent-indigo)]">~/home</a>
        <span>/</span>
        <a href="/notes" className="transition-colors hover:text-[var(--accent-indigo)]">notes</a>
        <span>/</span>
        <span style={{ color: "var(--accent-indigo)" }} className="truncate">{params.slug}</span>
      </div>

      {/* Back */}
      <a href="/notes" className="inline-flex items-center gap-1.5 text-sm transition-colors mb-8 group
                             text-[var(--text-muted)] hover:text-[var(--accent-indigo)]">
        <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
        Back to all notes
      </a>

      <article>
        {/* Terminal title bar */}
        <div className="flex items-center gap-2 rounded-t-lg px-4 py-2 border border-b-0"
             style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--bg-border)" }}>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-xs truncate flex-1" style={{ color: "var(--text-muted)" }}>
            {params.slug}.md
          </span>
        </div>

        {/* Note header */}
        <div className="rounded-b-lg border border-t-0 px-6 pt-6 pb-7 mb-8"
             style={{ borderColor: "var(--bg-border)", backgroundColor: "var(--bg-surface)" }}>
          {/* Tags + category */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap gap-1.5">
              {note!.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
            </div>
            <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              {note!.category}
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight mb-3"
              style={{ color: "var(--text-primary)" }}>
            {note!.title}
          </h1>

          {note!.excerpt && (
            <p className="text-base leading-relaxed italic border-l-2 pl-4"
               style={{ color: "var(--text-secondary)", borderColor: "rgba(129,140,248,0.5)" }}>
              {note!.excerpt}
            </p>
          )}
        </div>

        {/* MDX body */}
        <div className="space-y-2">
          <MDXRemote source={note!.content} components={mdxComponents} />
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t flex items-center justify-between"
             style={{ borderColor: "var(--bg-border)" }}>
          <a href="/notes" className="inline-flex items-center gap-1.5 text-sm transition-colors group
                             text-[var(--accent-indigo)] hover:text-[var(--accent-indigo-hover)]">
            <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
            All notes
          </a>
          <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            {note!.category}
          </span>
        </div>
      </article>
    </div>
  );
}
