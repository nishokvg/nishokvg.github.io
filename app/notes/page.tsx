import { Metadata } from "next";
import { getNotesByCategory, getAllNotes } from "@/lib/notes";
import NoteCard from "@/components/NoteCard";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Evergreen reference notes and cheatsheets — Linux, Git, AI/ML and more, by Nishok VG.",
};

export default function NotesPage() {
  const groups = getNotesByCategory();
  const total = getAllNotes().length;

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <h1 className="font-serif text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
          Notes
        </h1>
        <span className="rounded-full border px-2.5 py-0.5 font-mono text-xs"
              style={{ borderColor: "rgba(129,140,248,0.3)", backgroundColor: "var(--accent-indigo-bg)", color: "var(--accent-indigo)" }}>
          {total}
        </span>
      </div>

      <p className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
        <span style={{ color: "var(--accent-indigo)" }}>$</span> cat ~/notes/*  —
        <span className="opacity-70"> evergreen cheatsheets &amp; references, grouped by topic.</span>
      </p>

      {total > 0 ? (
        <div className="flex flex-col gap-10">
          {groups.map((group) => (
            <section key={group.category} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <h2 className="font-serif text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                  {group.category}
                </h2>
                <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                  {group.notes.length}
                </span>
                <span className="flex-1 border-t" style={{ borderColor: "var(--bg-border)" }} />
              </div>
              <div className="flex flex-col gap-3">
                {group.notes.map((note) => <NoteCard key={note.slug} note={note} />)}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border p-8 text-center"
             style={{ borderColor: "var(--bg-border)", backgroundColor: "var(--bg-surface)" }}>
          <p className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
            <span style={{ color: "var(--accent-indigo)" }}>$</span> ls ~/notes/<br />
            <span className="opacity-60"># No notes yet. Add markdown to the nishok-notes repo.</span>
          </p>
        </div>
      )}
    </div>
  );
}
