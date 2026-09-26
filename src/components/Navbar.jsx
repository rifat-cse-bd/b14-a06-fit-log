"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu } from "react-icons/lu";
import Logo from "./Logo";
import { usePlan } from "@/context/PlanContext";

const links = [
  { href: "/", label: "Workouts", isActive: (path) => path === "/" || path.startsWith("/workouts") },
  { href: "/my-plan", label: "My Plan", isActive: (path) => path.startsWith("/my-plan") },
];

// DaisyUI menu with the Figma active pill: dark green background, lime text.
const menuClass =
  "menu gap-1 p-0 text-xs [--menu-active-bg:var(--color-secondary)] [--menu-active-fg:var(--color-secondary-content)]";

// A focus-based DaisyUI dropdown stays open after client-side navigation unless focus leaves it.
const closeDropdown = () => document.activeElement?.blur();

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const navItems = links.map(({ href, label, isActive }) => {
    const active = isActive(pathname);
    return (
      <li key={href}>
        <Link
          href={href}
          onClick={closeDropdown}
          aria-current={active ? "page" : undefined}
          className={`rounded-full px-4 py-1.5 ${
            active ? "font-semibold" : "font-medium text-muted hover:text-white"
          }`}
        >
          {label}
        </Link>
      </li>
    );
  });

  return (
    <header className="sticky top-0 z-40 border-b border-line-soft bg-ink/95 backdrop-blur-sm">
      <nav className="navbar mx-auto min-h-16 w-11/12 px-0 md:min-h-20">
        <div className="navbar-start gap-1">
          <div className="dropdown md:hidden">
            <button type="button" aria-label="Open menu" className="btn btn-ghost btn-sm btn-square">
              <LuMenu className="size-5" aria-hidden />
            </button>
            <ul
              tabIndex={0}
              className={`${menuClass} dropdown-content mt-3 w-44 rounded-box border border-line bg-base-200 p-2 shadow-xl`}
            >
              {navItems}
            </ul>
          </div>
          <Link href="/" aria-label="FitLog home">
            <Logo textClassName="text-lg tracking-[0.9px]" />
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className={`${menuClass} menu-horizontal`}>{navItems}</ul>
        </div>

        <div className="navbar-end gap-4 sm:gap-6">
          <Link href="/my-plan" className="group flex items-center gap-2" aria-label={`Plan: ${plan.length} workouts`}>
            <span className="text-xs font-medium text-gray-300 group-hover:text-white">Plan</span>
            <span className="badge badge-primary badge-sm min-w-5 px-1 text-[11px] font-bold">
              {plan.length}
            </span>
          </Link>
          <Link href="/my-plan" className="group flex items-center gap-2" aria-label={`Saved: ${saved.length} workouts`}>
            <span className="text-xs font-medium text-muted group-hover:text-white">Saved</span>
            <span className="badge badge-outline badge-sm min-w-5 border-[#2d313b] px-1 text-[11px] font-medium text-gray-300">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
