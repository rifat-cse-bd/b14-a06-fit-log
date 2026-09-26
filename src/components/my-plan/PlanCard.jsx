import Image from "next/image";
import Link from "next/link";
import { LuCalendarPlus, LuCheck, LuX } from "react-icons/lu";
import WorkoutStats from "@/components/WorkoutStats";

export default function PlanCard({ workout, variant, onDone, onRemove, onAddToPlan }) {
  const { done } = workout;

  return (
    <article
      className={`flex flex-col gap-4 rounded-2xl border border-[#232732] bg-[#14171e] p-4 transition sm:flex-row sm:items-center sm:justify-between ${
        done ? "opacity-70" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-800 sm:w-36">
          <Image src={workout.image} alt={workout.name} fill sizes="144px" className="object-cover" />
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <h2 className="font-display text-base font-bold uppercase leading-6 tracking-[0.4px]">
            {workout.name}
            {done && (
              <span className="ml-2 align-middle font-sans text-[10px] font-bold tracking-[0.5px] text-accent">
                DONE
              </span>
            )}
          </h2>
          <p className="text-xs font-semibold text-muted-2">{workout.equipment}</p>
          <WorkoutStats workout={workout} className="gap-3 pt-1.5 text-gray-300" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3">
        <Link
          href={`/workouts/${workout.id}`}
          className="btn btn-outline btn-sm rounded-full border-gray-700 px-4 text-xs font-normal text-white hover:border-gray-500 hover:bg-white/5 hover:text-white"
        >
          View Details
        </Link>

        {variant === "plan" ? (
          <button
            type="button"
            onClick={() => onDone(workout)}
            disabled={done}
            className="btn btn-primary btn-sm gap-1.5 rounded-full px-4 text-xs font-semibold text-black shadow-sm hover:brightness-110 disabled:border-transparent disabled:bg-accent-deep disabled:text-accent"
          >
            <LuCheck className="size-3.5" aria-hidden />
            {done ? "Done" : "Mark as Done"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onAddToPlan(workout)}
            className="btn btn-primary btn-sm gap-1.5 rounded-full px-4 text-xs font-semibold text-black shadow-sm hover:brightness-110"
          >
            <LuCalendarPlus className="size-3.5" aria-hidden />
            Add to Plan
          </button>
        )}

        <button
          type="button"
          onClick={() => onRemove(workout)}
          aria-label={`Remove ${workout.name}`}
          className="btn btn-ghost btn-sm btn-circle text-muted hover:bg-white/5 hover:text-white"
        >
          <LuX className="size-4" aria-hidden />
        </button>
      </div>
    </article>
  );
}
