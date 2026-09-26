"use client";

import toast from "react-hot-toast";
import { LuBookmark, LuBookmarkCheck, LuCalendarCheck, LuCalendarPlus } from "react-icons/lu";
import { PLAN_CAP, usePlan } from "@/context/PlanContext";

export default function DetailActions({ workout }) {
  const { plan, saved, addToPlan, saveForLater } = usePlan();
  const inPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.includes(workout.id);

  function handleAddToPlan() {
    const result = addToPlan(workout.id);
    if (result === "added") toast.success(`Added ${workout.name} to today's plan`);
    else if (result === "exists") toast(`${workout.name} is already in today's plan`, { icon: "📋" });
    else toast.error(`Today's plan is full — finish your ${PLAN_CAP} lifts first`);
  }

  function handleSave() {
    const result = saveForLater(workout.id);
    if (result === "saved") toast.success(`Saved ${workout.name} for later`);
    else toast(`${workout.name} is already saved`, { icon: "🔖" });
  }

  const PlanIcon = inPlan ? LuCalendarCheck : LuCalendarPlus;
  const SaveIcon = isSaved ? LuBookmarkCheck : LuBookmark;

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <button
        type="button"
        onClick={handleAddToPlan}
        className="btn btn-primary h-auto gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-sm hover:brightness-110"
      >
        <PlanIcon className="size-4" aria-hidden />
        {inPlan ? "In today's plan" : "Add to today's plan"}
      </button>
      <button
        type="button"
        onClick={handleSave}
        className="btn btn-outline h-auto gap-2 rounded-xl border-gray-700 px-6 py-3 text-sm font-medium text-gray-200 hover:border-gray-500 hover:bg-white/5 hover:text-gray-200"
      >
        <SaveIcon className="size-4" aria-hidden />
        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
