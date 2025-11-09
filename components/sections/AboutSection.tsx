import { RichTextRenderer } from "@/lib/rich-text-renderer";
import type { MainPageData } from "@/lib/contentful";
import type { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import { YinYang } from "@/components/YinYang";

interface AboutSectionProps {
  aboutMe?: MainPageData["aboutMe"];
  quoteAboutMe?: MainPageData["quoteAboutMe"];
  mainAsset?: MainPageData["mainAsset"];
}

export function AboutSection({
  aboutMe,
  quoteAboutMe,
  mainAsset,
}: AboutSectionProps) {
  return (
    <section
      id="o-mnie"
      className="flex min-h-screen items-center justify-center bg-neutral-100 px-4 py-20"
    >
      <div className="slide-up w-full max-w-6xl">
        <h2 className="mb-12 flex w-full flex-col items-center justify-center gap-4 border-b-4 border-black pb-2 text-5xl font-bold">
          <div className="mb-2 flex items-center gap-4">
            <YinYang />
            O MNIE
            <YinYang />
          </div>
          <div className="h-2 w-1/3 bg-red-700" />
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {mainAsset?.url && (
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-full w-full border-2 border-black opacity-20" />
              <div className="relative h-[500px] w-full border-4 border-black sm:h-[600px]">
                <Image
                  src={mainAsset.url}
                  alt={mainAsset.title ?? mainAsset.description ?? ""}
                  width={mainAsset.width || 800}
                  height={mainAsset.height || 500}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          )}

          <div className="space-y-8 text-lg leading-relaxed">
            {aboutMe?.json && (
              <RichTextRenderer document={aboutMe.json as Document} />
            )}

            {quoteAboutMe && (
              <div className="mt-12 border-t-2 border-gray-300 pt-8">
                <p className="text-center text-gray-600 italic">
                  &ldquo;{quoteAboutMe}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
