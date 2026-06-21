import React from "react";

/**
 * Shared MDX element styling used by both posts (/posts/[slug]) and notes (/notes/[slug]),
 * so the two render identically. Edit styles here once.
 */
export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-serif text-2xl font-bold mt-8 mb-4 border-b pb-2"
        style={{ color: "var(--text-primary)", borderColor: "var(--bg-border)" }} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-serif text-xl font-semibold mt-7 mb-3"
        style={{ color: "var(--text-primary)" }} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-serif text-lg font-semibold mt-6 mb-2"
        style={{ color: "var(--text-primary)" }} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }} {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-1.5 mb-4 pl-4 list-none" style={{ color: "var(--text-secondary)" }} {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="flex items-start gap-2 before:content-['▸'] before:text-xs before:mt-1 before:flex-shrink-0"
        style={{ color: "var(--text-secondary)" }}
        {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="space-y-1.5 mb-4 pl-6 list-decimal" style={{ color: "var(--text-secondary)" }} {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold" style={{ color: "var(--text-primary)" }} {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" style={{ color: "var(--text-secondary)" }} {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-sm px-1.5 py-0.5 rounded border"
          style={{ backgroundColor: "var(--bg-elevated)", color: "var(--accent-emerald)", borderColor: "var(--bg-border)" }}
          {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono border"
         style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--bg-border)" }}
         {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 pl-4 my-4 italic rounded-r-lg py-2"
                style={{ borderColor: "var(--accent-indigo)", color: "var(--text-secondary)", backgroundColor: "rgba(129,140,248,0.05)" }}
                {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="underline underline-offset-2 transition-colors"
       style={{ color: "var(--accent-indigo)" }}
       {...props} />
  ),
  hr: () => <hr className="my-6" style={{ borderColor: "var(--bg-border)" }} />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse text-sm" style={{ color: "var(--text-secondary)" }} {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="border px-3 py-2 text-left font-semibold"
        style={{ borderColor: "var(--bg-border)", color: "var(--text-primary)", backgroundColor: "var(--bg-elevated)" }}
        {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border px-3 py-2" style={{ borderColor: "var(--bg-border)" }} {...props} />
  ),
};
