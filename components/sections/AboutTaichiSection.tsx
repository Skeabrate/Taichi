import { ChineseBorder } from "@/components/ChineseBorder";
import { YinYang } from "@/components/YinYang";
import { NAV_LABEL_TAICHI, SECTION_ID_TAICHI } from "@/lib/constants";
import type { MainPageData } from "@/lib/contentful";
import { RichTextRenderer } from "@/lib/rich-text-renderer";
import type { Document } from "@contentful/rich-text-types";
import Image from "next/image";

interface AboutTaichiSectionProps {
  quoteAboutTaichi?: MainPageData["quoteAboutTaichi"];
  aboutTaichiText?: MainPageData["aboutTaichiText"];
  taichiImage?: MainPageData["taichiImage"];
  aboutTaichiTextLeftColumn?: MainPageData["aboutTaichiTextLeftColumn"];
  aboutTaichiTextRightColumn?: MainPageData["aboutTaichiTextRightColumn"];
}

export function AboutTaichiSection({
  quoteAboutTaichi,
  aboutTaichiText,
  taichiImage,
  aboutTaichiTextLeftColumn,
  aboutTaichiTextRightColumn,
}: AboutTaichiSectionProps) {
  return (
    <section
      id={SECTION_ID_TAICHI}
      className="flex items-center justify-center bg-white px-4 py-12 sm:py-28"
    >
      <div className="slide-up w-full max-w-6xl">
        <h2 className="mb-12 flex w-full flex-col items-center justify-center gap-4 pb-2 text-3xl font-bold sm:text-5xl">
          <div className="mb-2 flex items-center gap-4">
            <YinYang />
            {NAV_LABEL_TAICHI}
            <YinYang />
          </div>
          <ChineseBorder />
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8 text-lg leading-relaxed">
            {aboutTaichiText?.json && (
              <div>
                <RichTextRenderer document={aboutTaichiText.json as Document} />
              </div>
            )}

            {quoteAboutTaichi && (
              <div className="mt-12 border-t-2 border-gray-300 pt-8">
                <p className="text-center text-gray-600 italic">
                  &ldquo;{quoteAboutTaichi}&rdquo;
                </p>
              </div>
            )}
          </div>

          {/* Image */}
          {taichiImage?.url && (
            <div className="relative">
              <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl border-2 border-black opacity-20" />
              <div className="relative h-[500px] w-full overflow-hidden rounded-3xl border-4 border-black sm:h-[600px]">
                <Image
                  src={taichiImage.url}
                  alt={taichiImage.title ?? taichiImage.description ?? ""}
                  width={taichiImage.width || 800}
                  height={taichiImage.height || 500}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {aboutTaichiTextLeftColumn?.json && (
            <div className="text-lg leading-relaxed">
              <RichTextRenderer
                document={aboutTaichiTextLeftColumn.json as Document}
              />
            </div>
          )}

          {aboutTaichiTextRightColumn?.json && (
            <div className="rounded-3xl border-2 border-gray-200 bg-gray-50 p-6 text-lg leading-relaxed">
              <RichTextRenderer
                document={aboutTaichiTextRightColumn.json as Document}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
