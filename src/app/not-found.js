import Link from "next/link";

export const metadata = { title: "Page not found — FitLog" };

export default function NotFound() {
  return (
    <main className="mx-auto flex w-11/12 flex-1 flex-col items-center justify-center py-24 text-center">
      <p className="text-[11px] font-bold uppercase tracking-[1.1px] text-accent">Error 404</p>
      <h1 className="mt-3 font-display text-7xl font-bold uppercase tracking-[-1.5px] sm:text-8xl">
        Missed rep
      </h1>
      <p className="mt-4 max-w-md text-base text-muted">
        This page isn&apos;t on the program. The lift you&apos;re looking for doesn&apos;t exist or
        has been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="btn btn-accent h-auto rounded-md border-0 px-6 py-3 text-xs font-bold uppercase tracking-[0.3px] hover:brightness-110"
        >
          Back to workouts
        </Link>
        <Link
          href="/my-plan"
          className="btn btn-outline h-auto rounded-md border-gray-700 px-6 py-3 text-xs font-bold uppercase tracking-[0.3px] text-gray-200 hover:border-gray-500 hover:bg-white/5 hover:text-gray-200"
        >
          My plan
        </Link>
      </div>
    </main>
  );
}
