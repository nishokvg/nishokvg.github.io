import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono:  ["var(--font-mono)"],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body":          "var(--text-primary)",
            "--tw-prose-headings":      "var(--text-primary)",
            "--tw-prose-lead":          "var(--text-secondary)",
            "--tw-prose-links":         "var(--accent-indigo)",
            "--tw-prose-bold":          "var(--text-primary)",
            "--tw-prose-counters":      "var(--text-muted)",
            "--tw-prose-bullets":       "var(--text-muted)",
            "--tw-prose-hr":            "var(--bg-border)",
            "--tw-prose-quotes":        "var(--text-secondary)",
            "--tw-prose-quote-borders": "var(--accent-indigo)",
            "--tw-prose-captions":      "var(--text-muted)",
            "--tw-prose-code":          "var(--accent-emerald)",
            "--tw-prose-pre-code":      "var(--text-primary)",
            "--tw-prose-pre-bg":        "var(--bg-elevated)",
            "--tw-prose-th-borders":    "var(--bg-border)",
            "--tw-prose-td-borders":    "var(--bg-border)",
            "code::before": { content: '""' },
            "code::after":  { content: '""' },
            code: {
              backgroundColor: "var(--bg-elevated)",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
              border: "1px solid var(--bg-border)",
            },
            pre: {
              backgroundColor: "var(--bg-elevated)",
              border: "1px solid var(--bg-border)",
              borderRadius: "0.5rem",
            },
            "h1,h2,h3,h4": { fontFamily: "var(--font-serif)" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
