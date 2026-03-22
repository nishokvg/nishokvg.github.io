import TagPill from "./TagPill";

const categories = [
  { heading: "// AI & ML",               tags: ["RAG", "LLMs", "embeddings", "deep learning", "AI agents", "MCP"] },
  { heading: "// SRE & Platform",        tags: ["SRE", "Kubernetes", "Terraform", "AWS", "DevOps", "EKS"] },
  { heading: "// Tamil & Culture",       tags: ["Tamil", "Thirukkural", "Sangam poetry"] },
  { heading: "// Spirituality",          tags: ["spirituality", "Vedanta", "philosophy"] },
  { heading: "// Life & Thoughts",       tags: ["personal", "opinions", "learnings", "desi perspective", "random"] },
  { heading: "// Travel",               tags: ["travel"] },
];

export default function WhatIWriteAbout() {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ borderColor: "var(--bg-border)", backgroundColor: "var(--bg-surface)" }}
    >
      <p className="mb-4 font-sans text-[10px] font-semibold uppercase tracking-widest"
         style={{ color: "var(--text-muted)" }}>
        What I Write About
      </p>
      <div className="flex flex-col gap-4">
        {categories.map((cat) => (
          <div key={cat.heading}>
            <p className="mb-2 font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              {cat.heading}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cat.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
