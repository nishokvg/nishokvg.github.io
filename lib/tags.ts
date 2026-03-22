export type TagCategory = "ai" | "sre" | "tamil" | "life" | "travel" | "spirit";

export const tagColors: Record<string, TagCategory> = {
  // AI/ML
  RAG: "ai", FAISS: "ai", embeddings: "ai", LLM: "ai", LLMs: "ai",
  "deep learning": "ai", "AI agents": "ai", MCP: "ai", transformers: "ai",
  "machine learning": "ai", pytorch: "ai", python: "ai", "neural networks": "ai",
  // SRE/DevOps
  SRE: "sre", DevOps: "sre", Kubernetes: "sre", Terraform: "sre", Terragrunt: "sre",
  AWS: "sre", EKS: "sre", ClaudeCode: "sre", InfrastructureAsCode: "sre",
  PlatformEngineering: "sre", Istio: "sre", "CI/CD": "sre",
  // Tamil / Cultural
  Tamil: "tamil", Thirukkural: "tamil", "Sangam poetry": "tamil", "Tamil lit": "tamil",
  // Life & Thoughts
  personal: "life", opinions: "life", learnings: "life", random: "life",
  "desi perspective": "life", career: "life",
  // Travel
  travel: "travel",
  // Spirituality
  spirituality: "spirit", philosophy: "spirit", Vedanta: "spirit",
};

export const tagStyles: Record<TagCategory, { bg: string; text: string; border: string }> = {
  ai:     { bg: "#1e1b4b", text: "var(--tag-ai)",     border: "rgba(129,140,248,0.3)" },
  sre:    { bg: "#064e3b", text: "var(--tag-sre)",    border: "rgba(52,211,153,0.3)" },
  tamil:  { bg: "#451a03", text: "var(--tag-tamil)",  border: "rgba(251,191,36,0.3)" },
  life:   { bg: "#500724", text: "var(--tag-life)",   border: "rgba(244,114,182,0.3)" },
  travel: { bg: "#0c4a6e", text: "var(--tag-travel)", border: "rgba(56,189,248,0.3)" },
  spirit: { bg: "#3b0764", text: "var(--tag-spirit)", border: "rgba(192,132,252,0.3)" },
};

export function getCategoryForTag(tag: string): TagCategory {
  return tagColors[tag] ?? "ai";
}
