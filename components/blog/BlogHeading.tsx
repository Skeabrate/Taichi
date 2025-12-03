import type { BlogData } from "@/lib/contentful";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { YinYang } from "@/components/YinYang";

type BlogHeadingProps = {
  blogData?: BlogData | null;
};

export function BlogHeading({ blogData }: BlogHeadingProps) {
  return (
    <section className="bg-background relative pt-32 pb-12 lg:pb-16">
      {/* Background decorative yin yang */}
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 opacity-[0.02]">
        <YinYang
          className="text-foreground h-[400px] w-[400px] animate-spin-slow"
          withDots={true}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back to home link */}
        <Link
          href="/"
          className="text-muted-foreground hover:text-primary group mb-8 inline-flex cursor-pointer items-center gap-2 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Powrót do strony głównej</span>
        </Link>

        {/* Page title */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="via-primary/40 to-primary/60 h-px w-16 bg-gradient-to-r from-transparent" />
            <YinYang className="text-primary h-8 w-8" />
            <div className="via-primary/40 to-primary/60 h-px w-16 bg-gradient-to-l from-transparent" />
          </div>
          <h1 className="text-foreground font-heading mb-6 text-4xl font-normal tracking-wide sm:text-5xl lg:text-6xl">
            {blogData?.title || "ŚWIAT TAICHI"}
          </h1>
          {blogData?.description && (
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
              {blogData.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
