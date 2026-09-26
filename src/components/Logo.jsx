import Image from "next/image";

export default function Logo({ size = 28, textClassName = "" }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/assets/logo.png" alt="" width={size} height={size} priority />
      <span className={`font-display font-bold uppercase text-white ${textClassName}`}>
        FitLog
      </span>
    </span>
  );
}
