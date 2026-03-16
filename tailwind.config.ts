import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e6edf3",
            a: {
              color: "#58a6ff",
              "&:hover": { color: "#79b8ff" },
            },
            h1: { color: "#e6edf3" },
            h2: { color: "#e6edf3" },
            h3: { color: "#e6edf3" },
            h4: { color: "#e6edf3" },
            strong: { color: "#e6edf3" },
            code: {
              color: "#79b8ff",
              backgroundColor: "#161b22",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            pre: {
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
            },
            blockquote: {
              color: "#8b949e",
              borderLeftColor: "#58a6ff",
            },
            hr: { borderColor: "#30363d" },
            "ul > li::marker": { color: "#8b949e" },
            "ol > li::marker": { color: "#8b949e" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
