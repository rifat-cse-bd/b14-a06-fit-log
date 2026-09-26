import Image from "next/image";
import { LuArrowDown } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse items-center gap-8 rounded-2xl border border-line bg-card p-6 sm:p-10 md:flex-row md:justify-between lg:p-14">
      <div className="flex max-w-[576px] flex-col items-start gap-5">
        <p className="text-[11px] font-bold uppercase tracking-[1.1px] text-accent">
          Workout Library
        </p>
        <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-[-1px] text-white sm:text-5xl lg:text-6xl lg:leading-[60px] lg:tracking-[-1.5px]">
          Train with intent. Log every set.
        </h1>
        <p className="max-w-[512px] text-base leading-6 text-muted">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s
          plan, and watch the week&apos;s work add up.
        </p>
        <a
          href="#library"
          className="btn btn-accent mt-2 h-auto gap-2 rounded-md border-0 px-6 py-3 text-xs font-bold uppercase tracking-[0.3px] shadow-sm hover:brightness-110"
        >
          Browse Workouts
          <LuArrowDown className="size-4" aria-hidden />
        </a>
      </div>

      <Image
        src="/assets/banner.png"
        alt="Muscle figure training on a preacher curl machine"
        width={334}
        height={334}
        priority
        className="size-56 shrink-0 object-contain sm:size-72 lg:size-[334px]"
      />
    </section>
  );
}
