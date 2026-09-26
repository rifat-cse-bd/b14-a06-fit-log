import Image from "next/image";
import Link from "next/link";
import TagPill from "./TagPill";
import WorkoutStats from "./WorkoutStats";

export default function WorkoutCard({ workout, priority = false }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition hover:-translate-y-0.5 hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div className="relative h-48 w-full overflow-hidden bg-[#1f232b]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <TagPill key={group}>{group}</TagPill>
            ))}
          </div>
          <h3 className="pt-2 font-display text-lg font-bold uppercase leading-7 tracking-[0.45px] text-white">
            {workout.name}
          </h3>
          <p className="text-xs text-muted">{workout.equipment}</p>
        </div>

        <div className="mt-4 border-t border-[#20242e] pt-3">
          <WorkoutStats workout={workout} />
        </div>
      </div>
    </Link>
  );
}
