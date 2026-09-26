"use client";

import { createContext, useContext, useState } from "react";

// Today's plan holds at most this many unfinished lifts.
export const PLAN_CAP = 5;

const PlanContext = createContext(null);

export function PlanProvider({ children }) {
  // plan: [{ id, done }], saved: [id]
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  // Returns "added" | "exists" | "full".
  function addToPlan(id) {
    if (plan.some((item) => item.id === id)) return "exists";
    if (plan.filter((item) => !item.done).length >= PLAN_CAP) return "full";
    setPlan([...plan, { id, done: false }]);
    return "added";
  }

  // Returns "saved" | "exists".
  function saveForLater(id) {
    if (saved.includes(id)) return "exists";
    setSaved([...saved, id]);
    return "saved";
  }

  function markDone(id) {
    setPlan((current) => current.map((item) => (item.id === id ? { ...item, done: true } : item)));
  }

  function removeFromPlan(id) {
    setPlan((current) => current.filter((item) => item.id !== id));
  }

  function removeFromSaved(id) {
    setSaved((current) => current.filter((savedId) => savedId !== id));
  }

  const value = { plan, saved, addToPlan, saveForLater, markDone, removeFromPlan, removeFromSaved };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) throw new Error("usePlan must be used inside <PlanProvider>");
  return context;
}
