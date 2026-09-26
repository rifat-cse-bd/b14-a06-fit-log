export default function MetricsSummary({ items, label }) {
  const metrics = [
    { label: "Exercises", value: items.length, accent: true },
    { label: "Minutes", value: items.reduce((sum, w) => sum + w.duration, 0) },
    { label: "Calories", value: items.reduce((sum, w) => sum + w.caloriesBurned, 0) },
  ];

  return (
    <section
      aria-label={label}
      className="grid grid-cols-3 rounded-2xl border border-[#232732] bg-card-2 px-4 pb-6 pt-8 sm:px-6"
    >
      {metrics.map(({ label, value, accent }, index) => (
        <div
          key={label}
          className={index > 0 ? "border-l border-[#232732]/60 pl-4 sm:pl-8" : "pr-4"}
        >
          <p className="pb-1 text-xs text-muted-2">{label}</p>
          <p
            className={`font-display text-2xl font-bold leading-10 sm:text-4xl ${
              accent ? "text-accent-bright" : "text-white"
            }`}
          >
            {value}
          </p>
        </div>
      ))}
    </section>
  );
}
