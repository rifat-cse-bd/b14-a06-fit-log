export default function Spinner({ label = "Loading workouts…" }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-5 py-24"
    >
      {/* Spinner */}
      <div className="relative flex size-16 items-center justify-center">
        {/* Outer rotating ring */}
        <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-line border-t-accent" />

        {/* Inner pulse */}
        <span className="size-7 animate-pulse rounded-full bg-accent shadow-[0_0_20px_rgba(0,0,0,0.15)]" />

        {/* Center dot */}
        <span className="absolute size-2 rounded-full bg-white" />
      </div>

      {/* Brand */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm font-black tracking-[0.25em] text-foreground">
          FITLOG
        </span>

        <span className="text-xs text-muted">{label}</span>
      </div>
    </div>
  );
}
