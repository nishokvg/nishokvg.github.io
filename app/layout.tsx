import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nishok's Kural & Cloud",
    template: "%s | Nishok's Kural & Cloud",
  },
  description:
    "Ancient wisdom. Modern infrastructure. One life, many threads. — Nishok Vishnu Ganesan's personal blog on SRE, AI/ML, Tamil literature, and life.",
  keywords: ["SRE", "AI", "ML", "Kubernetes", "Tamil", "Thirukkural", "cloud", "blog", "Nishok"],
  alternates: {
    types: {
      "application/rss+xml": "https://nishokvg.github.io/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* Prevent flash — default to dark */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              var s = localStorage.getItem('theme');
              var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var dark = s ? s === 'dark' : d !== false;
              if (!dark) document.documentElement.classList.add('light');
            })()`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased transition-colors duration-200"
            style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)", fontFamily: "var(--font-sans)" }}>

        {/* Navbar */}
        <nav style={{ backgroundColor: "color-mix(in srgb, var(--bg-surface) 90%, transparent)", borderBottom: "1px solid var(--bg-border)" }}
             className="sticky top-0 z-50 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <a href="/" className="flex items-center gap-1 no-underline">
              <span className="font-mono text-sm" style={{ color: "var(--accent-indigo)" }}>&gt;_</span>
              <span className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>Nishok&apos;s </span>
              <span className="font-serif text-lg font-semibold" style={{ color: "var(--text-primary)" }}>Kural</span>
              <span className="font-mono text-lg" style={{ color: "var(--accent-indigo)" }}> &amp; Cloud</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/" className="text-sm transition-colors hover:text-[var(--accent-indigo)]"
                 style={{ color: "var(--text-secondary)" }}>Home</a>
              <a href="/about" className="text-sm transition-colors hover:text-[var(--accent-indigo)]"
                 style={{ color: "var(--text-secondary)" }}>About</a>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Main */}
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid var(--bg-border)" }} className="mt-16">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <p className="text-center font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              Built with Next.js · Deployed on GitHub Pages ·{" "}
              <span style={{ color: "var(--accent-indigo)" }}>Nishok&apos;s Kural &amp; Cloud</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
