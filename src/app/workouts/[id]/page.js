import Image from "next/image";
import { notFound } from "next/navigation";
import DetailActions from "@/components/DetailActions";
import TagPill from "@/components/TagPill";
import { getWorkout } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);
  return { title: workout ? `${workout.name} — FitLog` : "Workout not found — FitLog" };
}

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);
  if (!workout) notFound();

  const specs = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <main className="mx-auto grid w-11/12 grid-cols-1 items-start gap-10 py-8 sm:py-12 lg:grid-cols-2 lg:gap-14">
      <div className="relative mx-auto aspect-4/5 w-full max-w-xl overflow-hidden rounded-2xl border border-[#232834] bg-[#171a21] shadow-2xl lg:max-w-none">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          priority
          sizes="(min-width: 1024px) 46vw, 92vw"
          className="object-cover"
        />
      </div>

      <section className="flex flex-col">
        <h1 className="pb-3 font-display text-3xl font-bold uppercase leading-10 tracking-[-0.9px] sm:text-4xl">
          {workout.name}
        </h1>
        <p className="max-w-xl pb-5 text-base leading-6 text-muted">{workout.description}</p>

        <div className="flex flex-wrap gap-2.5 pb-7">
          {workout.muscleGroups.map((group) => (
            <TagPill key={group} size="md">
              {group}
            </TagPill>
          ))}
        </div>

        <dl className="mb-8 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
          {specs.map(([label, value], index) => (
            <div
              key={label}
              className={`flex items-center justify-between gap-4 px-6 py-3.5 ${
                index > 0 ? "border-t border-[#1e2330]" : ""
              }`}
            >
              <dt className="text-xs font-bold uppercase tracking-[0.6px] text-muted">{label}</dt>
              <dd className="text-right text-sm font-medium text-gray-200">{value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="pb-4 text-base font-extrabold uppercase tracking-[0.8px]">Instructions</h2>
        <ol className="flex flex-col gap-3 pb-9">
          {workout.instructions.map((step, index) => (
            <li key={index} className="flex gap-2 text-sm leading-[22.75px]">
              <span className="text-muted">{index + 1}.</span>
              <span className="text-gray-300">{step}</span>
            </li>
          ))}
        </ol>

        <DetailActions workout={workout} />
      </section>
    </main>
  );
}
