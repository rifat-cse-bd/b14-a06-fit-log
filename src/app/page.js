import { Suspense } from "react";
import Hero from "@/components/Hero";
import Library from "@/components/Library";
import Spinner from "@/components/Spinner";

export default function Home() {
  return (
    <main className="mx-auto flex w-11/12 flex-col gap-16 py-8 sm:py-12">
      <Hero />

      <section id="library" className="flex scroll-mt-28 flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.75px]">
            The Library
          </h2>
          <p className="text-sm text-muted">Twelve lifts covering every major muscle group.</p>
        </div>

        <Suspense fallback={<Spinner />}>
          <Library />
        </Suspense>
      </section>
    </main>
  );
}
