import { NoteMeta } from "@/lib/notes";
import TagPill from "./TagPill";

export default function NoteCard({ note }: { note: NoteMeta }) {
  return (
    <a
      href={`/notes/${note.slug}`}
      className="group block rounded-xl border p-5 transition-all
        border-[var(--bg-border)] bg-[var(--bg-surface)]
        hover:border-[rgba(129,140,248,0.4)] hover:bg-[var(--bg-elevated)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0 space-y-2">
          <h3 className="font-serif text-base font-semibold leading-snug
                         text-[var(--text-primary)] group-hover:text-[var(--accent-indigo)] transition-colors">
            <span className="font-mono mr-1.5 text-[var(--accent-indigo)]">&gt;</span>
            {note.title}
          </h3>

          {note.excerpt && (
            <p className="text-sm leading-relaxed line-clamp-2 pl-5 text-[var(--text-secondary)]">
              {note.excerpt}
            </p>
          )}

          {note.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pl-5">
              {note.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
            </div>
          )}
        </div>

        <div className="flex-shrink-0 flex flex-col items-end gap-1">
          <span className="mt-1 text-sm text-[var(--accent-indigo)] opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
