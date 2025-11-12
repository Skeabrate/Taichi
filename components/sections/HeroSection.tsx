import type { MainPageData } from "@/lib/contentful";
import Link from "next/link";

interface HeroProps {
  nameLastNameSeniority?: MainPageData["nameLastNameSeniority"];
}

export function Hero({ nameLastNameSeniority }: HeroProps) {
  return (
    <section className="relative flex h-screen min-h-[500px] flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative aspect-square h-[90%]">
          <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-200">
            <div className="absolute top-0 right-0 h-full w-1/2 bg-white" />
            <div className="absolute top-1/4 right-1/4 z-10 aspect-square w-[12.5%] rounded-full bg-neutral-200" />
            <div className="absolute bottom-1/4 left-1/4 z-10 aspect-square w-[12.5%] rounded-full bg-white" />
            <div className="absolute top-0 left-1/4 h-1/2 w-1/2 rounded-full bg-white" />
            <div className="absolute right-1/4 bottom-0 h-1/2 w-1/2 rounded-full bg-neutral-200" />
          </div>
        </div>
      </div>

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

        <nav className="flex flex-wrap justify-center gap-6">
          <a
            href="#o-mnie"
            className="border-b-2 border-transparent pb-px text-lg transition-colors hover:border-red-700"
          >
            O MNIE
          </a>
          <a
            href="#o-taichi"
            className="border-b-2 border-transparent pb-px text-lg transition-colors hover:border-red-700"
          >
            O TAICHI
          </a>
          <a
            href="#zajecia"
            className="border-b-2 border-transparent pb-px text-lg transition-colors hover:border-red-700"
          >
            ZAJĘCIA
          </a>
          <a
            href="#kontakt"
            className="border-b-2 border-transparent pb-px text-lg transition-colors hover:border-red-700"
          >
            KONTAKT
          </a>
          <Link
            href="/blog"
            className="border-b-2 border-transparent pb-px text-lg font-semibold text-red-700 transition-colors hover:border-red-700"
          >
            ŚWIAT TAICHI
          </Link>
        </nav>
      </div>
    </section>
  );
}
