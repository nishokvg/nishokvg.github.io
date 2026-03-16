import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nishok's Rumination",
    template: "%s | Nishok's Rumination",
  },
  description:
    "Nishok's personal blog — AI/ML learnings, random thoughts, and a desi perspective on tech and life.",
  keywords: ["AI", "ML", "machine learning", "personal blog", "Nishok", "LLM", "life"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        {/* Nav */}
        <nav className="sticky top-0 z-50 border-b border-border bg-bg-primary/90 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex h-14 items-center justify-between">
              <a
                href="/"
                className="font-semibold text-text-primary hover:text-accent transition-colors text-sm sm:text-base"
              >
                <span className="text-accent font-mono">&gt;_</span>{" "}
                Nishok&apos;s Rumination
              </a>
              <div className="flex items-center gap-6">
                <a
                  href="/"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border mt-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
            <p className="text-center text-xs text-text-muted font-mono">
              Built with Next.js · Deployed on GitHub Pages ·{" "}
              <span className="text-accent">Nishok&apos;s Rumination</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
