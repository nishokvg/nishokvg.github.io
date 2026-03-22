import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPost, formatDate } from "@/lib/posts";
import TagPill from "@/components/TagPill";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt, keywords: post.tags };
}

const mdxComponents = {
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

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-mono text-xs mb-6" style={{ color: "var(--text-muted)" }}>
        <a href="/" className="transition-colors hover:text-[var(--accent-indigo)]">~/home</a>
        <span>/</span>
        <span>posts</span>
        <span>/</span>
        <span style={{ color: "var(--accent-indigo)" }} className="truncate">{params.slug}</span>
      </div>

      {/* Back */}
      <a href="/" className="inline-flex items-center gap-1.5 text-sm transition-colors mb-8 group
                             text-[var(--text-muted)] hover:text-[var(--accent-indigo)]">
        <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
        Back to all posts
      </a>

      <article>
        {/* Terminal title bar */}
        <div className="flex items-center gap-2 rounded-t-lg px-4 py-2 border border-b-0"
             style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--bg-border)" }}>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-xs truncate flex-1" style={{ color: "var(--text-muted)" }}>
            {params.slug}.mdx
          </span>
        </div>

        {/* Post header */}
        <div className="rounded-b-lg border border-t-0 px-6 pt-6 pb-7 mb-8"
             style={{ borderColor: "var(--bg-border)", backgroundColor: "var(--bg-surface)" }}>
          {/* Tags + meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap gap-1.5">
              {post!.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
            </div>
            <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              {formatDate(post!.date)} · {post!.readingTime}
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight mb-3"
              style={{ color: "var(--text-primary)" }}>
            {post!.title}
          </h1>

          {post!.excerpt && (
            <p className="text-base leading-relaxed italic border-l-2 pl-4"
               style={{ color: "var(--text-secondary)", borderColor: "rgba(129,140,248,0.5)" }}>
              {post!.excerpt}
            </p>
          )}
        </div>

        {/* MDX body */}
        <div className="space-y-2">
          <MDXRemote source={post!.content} components={mdxComponents} />
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t flex items-center justify-between"
             style={{ borderColor: "var(--bg-border)" }}>
          <a href="/" className="inline-flex items-center gap-1.5 text-sm transition-colors group
                             text-[var(--accent-indigo)] hover:text-[var(--accent-indigo-hover)]">
            <span className="group-hover:-translate-x-0.5 transition-transform inline-block">←</span>
            All posts
          </a>
          <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            {post!.readingTime}
          </span>
        </div>
      </article>
    </div>
  );
}
