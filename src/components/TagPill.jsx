export default function TagPill({ children, size = "sm" }) {
  const sizing =
    size === "md"
      ? "px-3.5 py-1 text-xs font-semibold"
      : "px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.55px]";

  return (
    <span className={`inline-block rounded-full bg-accent-bright text-ink-2 ${sizing}`}>
      {children}
    </span>
  );
}
