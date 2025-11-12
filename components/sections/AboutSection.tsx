import { RichTextRenderer } from "@/lib/rich-text-renderer";
import type { MainPageData } from "@/lib/contentful";
import type { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import { YinYang } from "@/components/YinYang";
import { ChineseBorder } from "@/components/ChineseBorder";
import { SECTION_ID_ABOUT, NAV_LABEL_ABOUT } from "@/lib/constants";

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
      id={SECTION_ID_ABOUT}
      className="flex items-center justify-center bg-neutral-100 px-4 py-12 sm:py-28"
    >
      <div className="slide-up w-full max-w-6xl">
        <h2 className="mb-12 flex w-full flex-col items-center justify-center gap-4 pb-2 text-3xl font-bold sm:text-5xl">
          <div className="mb-2 flex items-center gap-4">
            <YinYang />
            {NAV_LABEL_ABOUT}
            <YinYang />
          </div>
          <ChineseBorder />
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {mainAsset?.url && (
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl border-2 border-black opacity-20" />
              <div className="relative h-[500px] w-full overflow-hidden rounded-3xl border-4 border-black sm:h-[600px]">
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
