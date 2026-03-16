import { getAllPosts } from "@/lib/posts";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 min-w-0 space-y-6">
        {/* Section header */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-text-primary">
            Recent Posts
          </h1>
          <span className="rounded-full bg-accent/10 border border-accent/30 px-2.5 py-0.5 text-xs font-mono text-accent">
            {posts.length}
          </span>
        </div>

        {/* Terminal-style decoration */}
        <div className="rounded-t-lg bg-bg-tertiary border border-border px-4 py-2 flex items-center gap-2 -mb-3">
          <span className="h-3 w-3 rounded-full bg-red-500/60" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <span className="h-3 w-3 rounded-full bg-green-500/60" />
          <span className="ml-2 text-xs text-text-muted font-mono">
            ~/posts — {posts.length} entries
          </span>
        </div>

        {/* Posts list */}
        {posts.length > 0 ? (
          <div className="space-y-3 rounded-b-lg border border-t-0 border-border bg-bg-primary p-4">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-bg-secondary p-8 text-center">
            <p className="text-text-muted font-mono text-sm">
              <span className="text-accent">$</span> ls content/posts/{" "}
              <br />
              <span className="text-text-muted/60">
                # No posts yet. Start writing!
              </span>
            </p>
          </div>
        )}

        {/* Topics section */}
        <div className="mt-8 rounded-xl border border-border bg-bg-secondary p-5 space-y-4">
          <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
            What I Write About
          </h2>
          {/* AI/ML */}
          <div className="space-y-2">
            <p className="text-xs text-text-muted font-mono">// AI &amp; ML</p>
            <div className="flex flex-wrap gap-2">
              {["RAG", "LLMs", "embeddings", "deep learning", "AI agents", "MCP"].map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full border border-blue-700/50 bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Personal */}
          <div className="space-y-2">
            <p className="text-xs text-text-muted font-mono">// life &amp; thoughts</p>
            <div className="flex flex-wrap gap-2">
              {["personal", "opinions", "learnings", "desi perspective", "random"].map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full border border-orange-700/50 bg-orange-900/30 px-3 py-1 text-xs font-medium text-orange-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
