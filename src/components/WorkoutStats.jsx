import { LuClock3, LuFlame, LuStar } from "react-icons/lu";

export default function WorkoutStats({ workout, className = "gap-4 text-muted" }) {
  const stats = [
    { icon: LuClock3, label: `${workout.duration} min`, title: "Duration" },
    { icon: LuFlame, label: `${workout.caloriesBurned} kcal`, title: "Calories" },
    { icon: LuStar, label: workout.rating, title: "Rating" },
  ];

  return (
    <ul className={`flex flex-wrap items-center text-xs ${className}`}>
      {stats.map(({ icon: Icon, label, title }) => (
        <li key={title} className="flex items-center gap-1.5" title={title}>
          <Icon className="size-3.5 text-accent" aria-hidden />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
