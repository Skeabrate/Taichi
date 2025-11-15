import type { MainPageData } from "@/lib/contentful";
import { Navigation } from "@/components/Navigation";
import { YinYangBackground } from "@/components/YinYangBackground";
import { FadeIn } from "@/components/animations/FadeIn";

interface HeroProps {
  nameLastNameSeniority?: MainPageData["nameLastNameSeniority"];
}

export function Hero({ nameLastNameSeniority }: HeroProps) {
  return (
    <section className="relative flex h-screen min-h-[500px] flex-col items-center justify-center overflow-hidden">
      <YinYangBackground />

      <FadeIn className="z-10 px-4 text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-wider sm:text-8xl">
          太極拳
        </h1>
        <FadeIn delay={0.2}>
          <h2 className="mb-4 text-4xl font-bold sm:text-6xl">TAI CHI CHUAN</h2>
        </FadeIn>
        {nameLastNameSeniority && (
          <FadeIn delay={0.4}>
            <p className="mb-12 text-xl text-gray-600 sm:text-2xl">
              {nameLastNameSeniority}
            </p>
          </FadeIn>
        )}

        <FadeIn delay={0.6}>
          <Navigation />
        </FadeIn>
      </FadeIn>
    </section>
  );
}
