import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#1a1d24] bg-footer py-10">
      <div className="mx-auto flex w-11/12 flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <Link href="/" aria-label="FitLog home">
          <Logo size={20} textClassName="text-sm tracking-[0.7px]" />
        </Link>
        <p className="text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
