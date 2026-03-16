import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About this AI/ML learning journal and the person behind it.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Page header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-text-muted font-mono mb-4">
          <a href="/" className="hover:text-accent transition-colors">
            ~/home
          </a>
          <span>/</span>
          <span className="text-accent">about</span>
        </div>
        <h1 className="text-3xl font-bold text-text-primary">About</h1>
        <p className="text-text-secondary">
          The person behind this learning journal.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Profile card */}
      <div className="rounded-xl border border-border bg-bg-secondary p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Avatar */}
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-accent/40 flex items-center justify-center flex-shrink-0">
          <span className="text-4xl font-bold text-accent/70 font-mono select-none">
            Y
          </span>
        </div>
        {/* Info */}
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-xl font-semibold text-text-primary">Your Name</h2>
          <p className="text-sm font-mono text-accent">AI/ML Explorer</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            Passionate about machine learning, large language models, and the
            intersection of AI with real-world applications. Learning in public,
            one day at a time.
          </p>
        </div>
      </div>

      {/* About the blog */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
          <span className="text-accent font-mono text-sm">#</span>
          About This Blog
        </h2>
        <div className="prose prose-sm max-w-none text-text-secondary space-y-3 leading-relaxed">
          <p>
            This blog is my public learning journal for AI and machine learning.
            The goal is simple: document what I learn every day, share the
            struggles and breakthroughs, and build a reference I can look back
            on.
          </p>
          <p>
            Topics include retrieval-augmented generation (RAG), vector
            databases, embedding models, transformer architectures, fine-tuning,
            and whatever else catches my curiosity on the way.
          </p>
          <p>
            I believe learning is most effective when you teach — so this blog
            is my way of teaching myself (and hopefully helping others in the
            process).
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Stack */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
          <span className="text-accent font-mono text-sm">#</span>
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Python", detail: "Primary language" },
            { label: "PyTorch", detail: "Deep learning" },
            { label: "LangChain", detail: "LLM orchestration" },
            { label: "FAISS", detail: "Vector search" },
            { label: "HuggingFace", detail: "Models & datasets" },
            { label: "Next.js", detail: "This blog" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-bg-tertiary px-3 py-2.5 space-y-0.5"
            >
              <p className="text-sm font-medium text-text-primary font-mono">
                {item.label}
              </p>
              <p className="text-xs text-text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Contact */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
          <span className="text-accent font-mono text-sm">#</span>
          Get In Touch
        </h2>
        <p className="text-sm text-text-secondary">
          Found something interesting? Want to collaborate? Reach out — I&apos;m
          always happy to chat about AI/ML.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-tertiary px-4 py-2 text-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-all"
          >
            GitHub ↗
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-tertiary px-4 py-2 text-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-all"
          >
            Twitter / X ↗
          </a>
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-tertiary px-4 py-2 text-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-all"
          >
            Email ↗
          </a>
        </div>
      </div>
    </div>
  );
}
