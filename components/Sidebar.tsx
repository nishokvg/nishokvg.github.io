import React from "react";
import Image from "next/image";

const GithubIcon = () => (
  <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const phases = [
  { label: "Foundations",   done: true,   active: false },
  { label: "Core ML",       done: false,  active: true  },
  { label: "Deep Learning", done: false,  active: false },
  { label: "LLMs + RAG",   done: false,  active: false },
  { label: "AI Agents",     done: false,  active: false },
  { label: "MCP Servers",   done: false,  active: false },
];

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="sticky top-24 flex flex-col gap-4">

        {/* ── Profile Card ──────────────────────────── */}
        <div className="rounded-xl border p-6 text-center
                        border-[var(--bg-border)] bg-[var(--bg-surface)]">

          {/* Avatar */}
          <div className="relative mx-auto mb-4 h-20 w-20">
            <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-[rgba(129,140,248,0.4)]">
              <Image
                src="/profile.jpg"
                alt="Nishok Vishnu Ganesan"
                width={80}
                height={80}
                className="object-cover object-top w-full h-full"
                priority
              />
            </div>
            <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full"
                  style={{ backgroundColor: "var(--accent-emerald)", boxShadow: "0 0 0 2px var(--bg-surface)" }} />
          </div>

          <h2 className="font-serif text-lg font-semibold text-[var(--text-primary)]">
            Nishok Vishnu Ganesan
          </h2>
          <p className="mt-1 font-mono text-xs text-[var(--accent-indigo)]">
            Senior SRE · Cloud &amp; Platform Eng
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
            15+ years in cloud platforms, Kubernetes &amp; distributed systems. Learning AI/ML in public — documenting the journey one post at a time. Reading Thirukkural between deployments.
          </p>

          <hr className="my-5 border-[var(--bg-border)]" />

          {/* Connect links */}
          <div className="flex flex-col gap-1">
            <p className="mb-1 font-sans text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Connect
            </p>
            {[
              { href: "https://github.com/nishokvg", icon: <GithubIcon />, label: "GitHub", external: true },
              { href: "https://linkedin.com/in/nishok-v-g", icon: <LinkedInIcon />, label: "LinkedIn", external: true },
              { href: "mailto:nishokvg@gmail.com", icon: <MailIcon />, label: "Email", external: false },
            ].map(({ href, icon, label, external }) => (
              <a key={label} href={href}
                 target={external ? "_blank" : undefined}
                 rel={external ? "noopener noreferrer" : undefined}
                 className="group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors
                            text-[var(--text-secondary)] hover:text-[var(--accent-indigo)] hover:bg-[var(--bg-elevated)]">
                {icon}
                <span>{label}</span>
                <span className="ml-auto font-mono text-xs opacity-0 group-hover:opacity-60 transition-opacity">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── AI/ML Journey ─────────────────────────── */}
        <div className="rounded-xl border p-5 border-[var(--bg-border)] bg-[var(--bg-surface)]">
          <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
            AI/ML Journey
          </p>
          <ol className="flex flex-col gap-2.5">
            {phases.map((phase, i) => (
              <li key={i} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full flex-shrink-0" style={{
                    backgroundColor: phase.done
                      ? "var(--accent-emerald)"
                      : phase.active
                        ? "var(--accent-indigo)"
                        : "var(--text-muted)",
                  }} />
                  <span className={phase.done || phase.active ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}>
                    Phase {i + 1} — {phase.label}
                  </span>
                </span>
                {phase.done && (
                  <span className="font-mono text-xs text-[var(--accent-emerald)]">✓</span>
                )}
                {phase.active && (
                  <span className="font-mono text-xs text-[var(--accent-indigo)]">→</span>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-[11px] border-t pt-3 text-[var(--text-muted)] border-[var(--bg-border)]">
            Posts tagged by phase as I progress.
          </p>
        </div>

      </div>
    </aside>
  );
}
