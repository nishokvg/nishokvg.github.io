import React from "react";
import { PostMeta, formatDate, formatShortDate } from "@/lib/posts";

interface PostCardProps {
  post: PostMeta;
}

const TAG_COLORS: Record<string, string> = {
  RAG: "bg-purple-900/50 text-purple-300 border-purple-700/50",
  FAISS: "bg-blue-900/50 text-blue-300 border-blue-700/50",
  embeddings: "bg-green-900/50 text-green-300 border-green-700/50",
  LLM: "bg-orange-900/50 text-orange-300 border-orange-700/50",
  "machine learning": "bg-yellow-900/50 text-yellow-300 border-yellow-700/50",
  "deep learning": "bg-red-900/50 text-red-300 border-red-700/50",
  pytorch: "bg-orange-900/50 text-orange-300 border-orange-700/50",
  python: "bg-blue-900/50 text-blue-300 border-blue-700/50",
  transformers: "bg-pink-900/50 text-pink-300 border-pink-700/50",
  "neural networks": "bg-cyan-900/50 text-cyan-300 border-cyan-700/50",
};

const DEFAULT_TAG_COLOR =
  "bg-accent/10 text-accent border-accent/30";

function TagBadge({ tag }: { tag: string }) {
  const colorClass = TAG_COLORS[tag] ?? DEFAULT_TAG_COLOR;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${colorClass}`}
    >
      {tag}
    </span>
  );
}

export { TagBadge };

export default function PostCard({ post }: PostCardProps) {
  return (
    <a
      href={`/posts/${post.slug}`}
      className="group block rounded-xl border border-border bg-bg-secondary hover:border-accent/50 hover:bg-bg-tertiary transition-all duration-200 p-5"
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left: content */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Title row */}
          <div className="flex items-start gap-2">
            <span className="text-text-muted font-mono text-sm mt-0.5 flex-shrink-0 group-hover:text-accent transition-colors">
              &gt;
            </span>
            <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">
              {post.title}
            </h3>
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 pl-5">
              {post.excerpt}
            </p>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pl-5">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>

        {/* Right: meta */}
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <span className="text-xs text-text-muted font-mono whitespace-nowrap">
            {formatShortDate(post.date)}
          </span>
          <span className="text-xs text-text-muted whitespace-nowrap">
            {post.readingTime}
          </span>
          <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity text-sm mt-1">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
