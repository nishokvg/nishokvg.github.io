export default function TerminalHeader({ count, path = "~/posts" }: { count: number; path?: string }) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg border px-4 py-2 font-mono text-sm"
      style={{
        borderColor: "var(--bg-border)",
        backgroundColor: "var(--bg-elevated)",
        color: "var(--text-secondary)",
      }}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      <span className="ml-2">
        {path} — <span style={{ color: "var(--accent-indigo)" }}>{count}</span> entries
      </span>
    </div>
  );
}
