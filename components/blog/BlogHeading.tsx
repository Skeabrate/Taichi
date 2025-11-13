import { BlogYinYangBackground } from "@/components/blog/BlogYinYangBackground";
import type { BlogData } from "@/lib/contentful";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogHeadingProps {
  blogData?: BlogData | null;
}

export function BlogHeading({ blogData }: BlogHeadingProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-100 px-4 py-20 sm:py-28">
      <BlogYinYangBackground />

      <Link
        href="/"
        className="absolute top-4 left-4 z-20 flex items-center gap-2 text-lg font-semibold text-red-800 transition-colors hover:text-red-800 sm:top-8 sm:left-8"
      >
        <ArrowLeft className="h-5 w-5" />
        Powrót do strony głównej
      </Link>

      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="flex flex-col items-center justify-center gap-6 text-4xl font-bold sm:text-6xl md:text-7xl">
          {blogData?.title}
        </h1>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 sm:text-xl">
            {blogData?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
