import { Suspense } from "react";
import MyPlanView from "@/components/my-plan/MyPlanView";
import Spinner from "@/components/Spinner";
import { getWorkouts } from "@/lib/api";

export const metadata = { title: "My Plan — FitLog" };

async function PlanData() {
  let workouts;
  try {
    workouts = await getWorkouts();
  } catch {
    return (
      <p className="rounded-2xl border border-line bg-card p-8 text-center text-sm text-muted">
        Couldn&apos;t load your workouts. Please refresh to try again.
      </p>
    );
  }
  return <MyPlanView workouts={workouts} />;
}

export default function MyPlanPage() {
  return (
    <main className="mx-auto flex w-11/12 flex-col gap-6 py-8 lg:py-10">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-3xl font-bold uppercase tracking-[-0.75px]">My Plan</h1>
        <p className="text-sm text-muted-2">Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      <Suspense fallback={<Spinner />}>
        <PlanData />
      </Suspense>
    </main>
  );
}
