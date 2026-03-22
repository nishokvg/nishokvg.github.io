import { getCategoryForTag, tagStyles } from "@/lib/tags";

export default function TagPill({ tag }: { tag: string }) {
  const category = getCategoryForTag(tag);
  const style = tagStyles[category];

  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-medium"
      style={{
        backgroundColor: style.bg,
        color: style.text,
        borderColor: style.border,
      }}
    >
      {tag}
    </span>
  );
}
