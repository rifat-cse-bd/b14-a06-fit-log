import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#111317]/50 px-4 py-24 text-center">
      <h2 className="pb-2 font-display text-xl font-bold uppercase tracking-[0.7px]">
        Nothing here yet
      </h2>
      <p className="max-w-sm pb-6 text-xs text-zinc-400">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="btn btn-accent h-auto rounded-full border-0 bg-[#c2f10d] px-6 py-2.5 text-xs font-semibold tracking-[-0.3px] shadow-lg shadow-[#c2f10d]/10 hover:brightness-110"
      >
        Go to workouts
      </Link>
    </div>
  );
}
