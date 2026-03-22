import { getAllPosts } from "@/lib/posts";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";
import TerminalHeader from "@/components/TerminalHeader";
import WhatIWriteAbout from "@/components/WhatIWriteAbout";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col gap-6">
        {/* Recent Posts header */}
        <div className="flex items-center gap-3">
          <h1 className="font-serif text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            Recent Posts
          </h1>
          <span className="rounded-full border px-2.5 py-0.5 font-mono text-xs"
                style={{ borderColor: "rgba(129,140,248,0.3)", backgroundColor: "var(--accent-indigo-bg)", color: "var(--accent-indigo)" }}>
            {posts.length}
          </span>
        </div>

        <TerminalHeader count={posts.length} />

        {/* Posts */}
        {posts.length > 0 ? (
          <div className="flex flex-col gap-3">
            {posts.map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        ) : (
          <div className="rounded-xl border p-8 text-center"
               style={{ borderColor: "var(--bg-border)", backgroundColor: "var(--bg-surface)" }}>
            <p className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
              <span style={{ color: "var(--accent-indigo)" }}>$</span> ls content/posts/<br />
              <span className="opacity-60"># No posts yet. Start writing!</span>
            </p>
          </div>
        )}

        <WhatIWriteAbout />
      </div>
    </div>
  );
}
