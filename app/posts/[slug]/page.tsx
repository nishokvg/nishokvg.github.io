import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllPostSlugs,
  getPost,
  formatDate,
} from "@/lib/posts";
import { TagBadge } from "@/components/PostCard";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
  };
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-2xl font-bold text-text-primary mt-8 mb-4 border-b border-border pb-2"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-xl font-semibold text-text-primary mt-7 mb-3 flex items-center gap-2 before:content-['##'] before:text-accent before:font-mono before:text-sm before:opacity-60"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-lg font-semibold text-text-primary mt-6 mb-2"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-text-secondary leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="text-text-secondary space-y-1.5 mb-4 pl-4 list-none"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className="text-text-secondary flex items-start gap-2 before:content-['▸'] before:text-accent before:text-xs before:mt-1 before:flex-shrink-0"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="text-text-secondary space-y-1.5 mb-4 pl-6 list-decimal marker:text-accent"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-text-primary" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-text-secondary/90" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="font-mono text-sm bg-bg-tertiary text-accent px-1.5 py-0.5 rounded border border-border"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-bg-secondary border border-border rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-accent pl-4 my-4 italic text-text-secondary bg-accent/5 py-2 rounded-r-lg"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
      {...props}
    />
  ),
  hr: () => <hr className="border-border my-6" />,
};

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
        <a href="/" className="hover:text-accent transition-colors">
          ~/home
        </a>
        <span>/</span>
        <span className="hover:text-accent transition-colors">posts</span>
        <span>/</span>
        <span className="text-accent truncate">{params.slug}</span>
      </div>

      {/* Back link */}
      <a
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">
          ←
        </span>
        Back to all posts
      </a>

      {/* Post header */}
      <article>
        <header className="space-y-4 mb-8 pb-6 border-b border-border">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 bg-bg-tertiary rounded-t-lg px-4 py-2 border border-border border-b-0">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2 text-xs text-text-muted font-mono flex-1 truncate">
              {params.slug}.mdx
            </span>
          </div>

          <div className="bg-bg-secondary rounded-b-lg border border-border border-t-0 px-6 pt-5 pb-6 space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
              <time
                dateTime={post.date}
                className="font-mono"
              >
                {formatDate(post.date)}
              </time>
              <span className="text-border">·</span>
              <span>{post.readingTime}</span>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-text-secondary text-sm leading-relaxed italic border-l-2 border-accent/50 pl-4">
                {post.excerpt}
              </p>
            )}
          </div>
        </header>

        {/* MDX Content */}
        <div className="prose-content space-y-4">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* Footer nav */}
        <div className="mt-12 pt-6 border-t border-border flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">
              ←
            </span>
            All posts
          </a>
          <span className="text-xs text-text-muted font-mono">
            {post.readingTime}
          </span>
        </div>
      </article>
    </div>
  );
}
