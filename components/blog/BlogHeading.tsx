import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogYinYangBackground } from "@/components/blog/BlogYinYangBackground";
import { NAV_LABEL_BLOG } from "@/lib/constants";

export function BlogHeading() {
  return (
    <section className="relative overflow-hidden bg-neutral-100 px-4 py-20 sm:py-28">
      <BlogYinYangBackground />

      <Link
        href="/"
        className="absolute top-4 left-4 z-20 flex items-center gap-2 text-lg font-semibold text-red-700 transition-colors hover:text-red-800 sm:top-8 sm:left-8"
      >
        <ArrowLeft className="h-5 w-5" />
        Powrót do strony głównej
      </Link>

      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="flex flex-col items-center justify-center gap-6 text-4xl font-bold sm:text-6xl md:text-7xl">
          {NAV_LABEL_BLOG}
        </h1>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 sm:text-xl">
            Zapraszam Cię do odkrywania świata Tai Chi Chuan przez moje
            artykuły, poradniki i historie. Dzielę się swoją wiedzą o
            tradycyjnej sztuce walki, korzyściach zdrowotnych, filozofii oraz
            praktycznych wskazówkach dla początkujących i zaawansowanych
            praktykujących.
          </p>
        </div>
      </div>
    </section>
  );
}
