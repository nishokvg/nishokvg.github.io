import React from "react";
import Image from "next/image";

const GithubIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const roadmap = [
  { phase: 1, label: "Foundations", color: "bg-slate-400", done: true },
  { phase: 2, label: "Core ML", color: "bg-blue-400", done: true },
  { phase: 3, label: "Deep Learning", color: "bg-violet-400", done: false },
  { phase: 4, label: "LLMs + RAG", color: "bg-pink-400", done: false },
  { phase: 5, label: "AI Agents", color: "bg-orange-400", done: false },
  { phase: 6, label: "MCP Servers", color: "bg-yellow-400", done: false },
];

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0">
      <div className="sticky top-24 space-y-4">

        {/* Profile card */}
        <div className="rounded-xl border border-border bg-bg-secondary p-6 space-y-5">
          {/* Avatar */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="relative">
              <div className="h-20 w-20 rounded-full border-2 border-accent/40 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Nishok Vishnu Ganesan"
                  width={80}
                  height={80}
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </div>
              <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-green-400 border-2 border-bg-secondary" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-text-primary">Nishok Vishnu Ganesan</h2>
              <p className="text-xs font-mono text-accent mt-0.5">Senior SRE · Cloud & Platform Eng</p>
            </div>
          </div>

          <div className="border-t border-border" />

          <p className="text-xs text-text-secondary leading-relaxed text-center">
            15+ years in cloud platforms, Kubernetes &amp; distributed systems. Now learning AI/ML in public — documenting the journey one post at a time.
          </p>

          <div className="border-t border-border" />

          {/* Social links */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Connect</p>
            <a href="https://github.com/nishokvg" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent transition-colors py-1.5 px-2 rounded-md hover:bg-bg-tertiary group">
              <GithubIcon />
              <span className="group-hover:translate-x-0.5 transition-transform">GitHub</span>
              <span className="ml-auto text-xs text-text-muted font-mono opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>
            <a href="https://linkedin.com/in/nishok-v-g" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent transition-colors py-1.5 px-2 rounded-md hover:bg-bg-tertiary group">
              <TwitterIcon />
              <span className="group-hover:translate-x-0.5 transition-transform">LinkedIn</span>
              <span className="ml-auto text-xs text-text-muted font-mono opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>
            <a href="mailto:nishokvg@gmail.com"
              className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-accent transition-colors py-1.5 px-2 rounded-md hover:bg-bg-tertiary group">
              <EmailIcon />
              <span className="group-hover:translate-x-0.5 transition-transform">Email</span>
              <span className="ml-auto text-xs text-text-muted font-mono opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>
          </div>
        </div>

        {/* AI/ML Roadmap card */}
        <div className="rounded-xl border border-border bg-bg-secondary p-5 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            AI/ML Journey
          </p>
          <div className="space-y-2">
            {roadmap.map((item) => (
              <div key={item.phase} className="flex items-center gap-3 group">
                {/* Phase dot */}
                <div className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${item.done ? item.color : "bg-bg-tertiary border border-border"} transition-all`} />
                {/* Connector line below (except last) */}
                <div className="flex-1 flex items-center gap-2">
                  <span className={`text-xs font-mono ${item.done ? "text-text-secondary" : "text-text-muted"}`}>
                    Phase {item.phase}
                  </span>
                  <span className={`text-xs ${item.done ? "text-text-primary" : "text-text-muted"}`}>
                    — {item.label}
                  </span>
                </div>
                {item.done && (
                  <span className="text-xs text-green-400 font-mono opacity-60">✓</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted pt-1 border-t border-border">
            Posts tagged by phase as I progress.
          </p>
        </div>

      </div>
    </aside>
  );
}
