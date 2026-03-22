import { PostMeta } from "@/lib/posts";
import TagPill from "./TagPill";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <a
      href={`/posts/${post.slug}`}
      className="group block rounded-xl border p-5 transition-all
        border-[var(--bg-border)] bg-[var(--bg-surface)]
        hover:border-[rgba(129,140,248,0.4)] hover:bg-[var(--bg-elevated)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0 space-y-2">
          <h3 className="font-serif text-base font-semibold leading-snug
                         text-[var(--text-primary)] group-hover:text-[var(--accent-indigo)] transition-colors">
            <span className="font-mono mr-1.5 text-[var(--accent-indigo)]">&gt;</span>
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="text-sm leading-relaxed line-clamp-2 pl-5 text-[var(--text-secondary)]">
              {post.excerpt}
            </p>
          )}

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pl-5">
              {post.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
            </div>
          )}
        </div>

        <div className="flex-shrink-0 flex flex-col items-end gap-1">
          <span className="font-mono text-xs text-[var(--text-muted)]">
            {formatShortDate(post.date)}
          </span>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            {post.readingTime}
          </span>
          <span className="mt-1 text-sm text-[var(--accent-indigo)] opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </div>
      </div>
    </a>
  );
}

function formatShortDate(dateStr: string): string {
  try {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit" });
  } catch {
    return dateStr;
  }
}
