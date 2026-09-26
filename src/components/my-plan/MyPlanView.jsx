"use client";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { PLAN_CAP, usePlan } from "@/context/PlanContext";
import EmptyState from "./EmptyState";
import MetricsSummary from "./MetricsSummary";
import PlanCard from "./PlanCard";
import SortMenu, { sortWorkouts } from "./SortMenu";

const TABS = [
  { id: "plan", label: "Today's Plan" },
  { id: "saved", label: "Saved" },
];

export default function MyPlanView({ workouts }) {
  const { plan, saved, addToPlan, markDone, removeFromPlan, removeFromSaved } = usePlan();
  const [tab, setTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const byId = useMemo(() => new Map(workouts.map((w) => [w.id, w])), [workouts]);

  const planItems = useMemo(
    () =>
      plan
        .filter((item) => byId.has(item.id))
        .map((item) => ({ ...byId.get(item.id), done: item.done })),
    [plan, byId]
  );
  const savedItems = useMemo(
    () => saved.filter((id) => byId.has(id)).map((id) => byId.get(id)),
    [saved, byId]
  );

  const list = sortWorkouts(tab === "plan" ? planItems : savedItems, sortBy);

  function handleDone(workout) {
    markDone(workout.id);
    toast.success(`Nice work — ${workout.name} done!`);
  }

  function handleRemove(workout) {
    if (tab === "plan") {
      removeFromPlan(workout.id);
      toast(`Removed ${workout.name} from today's plan`, { icon: "🗑️" });
    } else {
      removeFromSaved(workout.id);
      toast(`Removed ${workout.name} from saved`, { icon: "🗑️" });
    }
  }

  function handleAddToPlan(workout) {
    const result = addToPlan(workout.id);
    if (result === "added") toast.success(`Added ${workout.name} to today's plan`);
    else if (result === "exists") toast(`${workout.name} is already in today's plan`, { icon: "📋" });
    else toast.error(`Today's plan is full — finish your ${PLAN_CAP} lifts first`);
  }

  return (
    <>
      <MetricsSummary items={planItems} />

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div
          role="tablist"
          className="tabs tabs-box tabs-sm gap-1 rounded-xl border border-[#232732] bg-[#151921] p-1"
        >
          {TABS.map(({ id, label }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(id)}
                className={`tab rounded-lg px-4 text-xs ${
                  active ? "tab-active bg-[#1f242d] font-bold text-white ring-1 ring-[#2b303d]" : "text-muted-2 hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <SortMenu value={sortBy} onChange={setSortBy} />
      </div>

      {list.length === 0 ? (
        <EmptyState />
      ) : (
        <ul className="flex flex-col gap-4">
          {list.map((workout) => (
            <li key={workout.id}>
              <PlanCard
                workout={workout}
                variant={tab}
                onDone={handleDone}
                onRemove={handleRemove}
                onAddToPlan={handleAddToPlan}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
