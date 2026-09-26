"use client";

import { LuCheck, LuChevronDown } from "react-icons/lu";

const OPTIONS = [
  { id: "duration", label: "Duration" },
  { id: "calories", label: "Calories" },
  { id: "rating", label: "Rating" },
];

// Shortest session first; for calories and rating the biggest number leads.
const comparators = {
  duration: (a, b) => a.duration - b.duration,
  calories: (a, b) => b.caloriesBurned - a.caloriesBurned,
  rating: (a, b) => b.rating - a.rating,
};

export function sortWorkouts(list, sortBy) {
  return [...list].sort(comparators[sortBy]);
}

export default function SortMenu({ value, onChange }) {
  const current = OPTIONS.find((option) => option.id === value);

  function choose(id) {
    onChange(id);
    // The DaisyUI dropdown is focus-driven: dropping focus closes it.
    document.activeElement?.blur();
  }

  return (
    <div className="flex items-center gap-3">
      <span id="sort-label" className="text-xs text-muted-2">
        Sort By
      </span>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          aria-haspopup="listbox"
          aria-labelledby="sort-label"
          className="btn btn-sm h-8.5 gap-1.5 rounded-[9px] border-[#232732] bg-card-2 px-3 text-xs font-normal text-white shadow-none hover:border-[#2f3442]"
        >
          {current.label}
          <LuChevronDown className="size-3.5 text-muted" aria-hidden />
        </div>
        <ul
          tabIndex={0}
          role="listbox"
          aria-labelledby="sort-label"
          className="menu dropdown-content z-20 mt-2 w-36 rounded-lg border border-[#232732] bg-card-2 p-1 shadow-xl"
        >
          {OPTIONS.map((option) => {
            const selected = option.id === value;
            return (
              <li key={option.id} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => choose(option.id)}
                  className={`flex justify-between rounded-md px-3 py-2 text-xs ${
                    selected ? "text-accent" : "text-gray-300"
                  }`}
                >
                  {option.label}
                  {selected && <LuCheck className="size-3.5" aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
