export default function Spinner({ label = "Loading workouts…" }) {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-4 py-24">
      <span className="size-10 animate-spin rounded-full border-4 border-line border-t-accent" />
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}
