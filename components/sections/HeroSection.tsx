import type { MainPageData } from "@/lib/contentful";
import { Navigation } from "@/components/Navigation";
import { YinYangBackground } from "@/components/YinYangBackground";

interface HeroProps {
  nameLastNameSeniority?: MainPageData["nameLastNameSeniority"];
}

export function Hero({ nameLastNameSeniority }: HeroProps) {
  return (
    <section className="relative flex h-screen min-h-[500px] flex-col items-center justify-center overflow-hidden">
      <YinYangBackground />

      <div className="fade-in z-10 px-4 text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-wider sm:text-8xl">
          太極拳
        </h1>
        <h2 className="mb-4 text-3xl font-light sm:text-5xl">TAICHI QUAN</h2>
        {nameLastNameSeniority && (
          <p className="mb-12 text-xl text-gray-600 sm:text-2xl">
            {nameLastNameSeniority}
          </p>
        )}

        <Navigation />
      </div>
    </section>
  );
}
