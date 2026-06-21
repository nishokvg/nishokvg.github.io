import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "./mdxComponents";

/**
 * Single place that renders MDX/Markdown for both posts and notes.
 * remark-gfm enables GitHub-Flavored Markdown — tables, strikethrough, task
 * lists, autolinks — which next-mdx-remote does NOT parse by default.
 */
export default function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  );
}
