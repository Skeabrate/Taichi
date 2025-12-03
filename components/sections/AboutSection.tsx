import { RichTextRenderer } from "@/lib/rich-text-renderer";
import type { MainPageData } from "@/lib/contentful";
import type { Document } from "@contentful/rich-text-types";
import { ChineseOrnament } from "@/components/ChineseOrnament";
import { SECTION_ID_ABOUT, NAV_LABEL_ABOUT } from "@/lib/constants";
import { FadeInTitle } from "@/components/animations/FadeInTitle";
import { FadeInImage } from "@/components/animations/FadeInImage";
import { FadeIn } from "@/components/animations/FadeIn";
import { DecoratedImage } from "@/components/DecoratedImage";

type AboutSectionProps = {
  aboutMe?: MainPageData["aboutMe"];
  quoteAboutMe?: MainPageData["quoteAboutMe"];
  mainAsset?: MainPageData["mainAsset"];
};

export function AboutSection({
  aboutMe,
  quoteAboutMe,
  mainAsset,
}: AboutSectionProps) {
  return (
    <section
      id={SECTION_ID_ABOUT}
      className="bg-background relative overflow-hidden py-12 sm:py-24 lg:py-32"
    >
      {/* Corner ornaments */}
      <ChineseOrnament
        variant="corner"
        className="absolute top-8 left-8 opacity-20"
      />
      <ChineseOrnament
        variant="corner"
        className="absolute top-8 right-8 rotate-90 opacity-20"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section title */}
        <FadeInTitle className="mb-16 text-center">
          <ChineseOrnament variant="divider" className="mb-6" />
          <h2 className="font-heading text-foreground text-3xl font-normal tracking-wide sm:text-4xl">
            {NAV_LABEL_ABOUT}
          </h2>
          <div className="bg-primary mx-auto mt-4 h-1 w-16" />
        </FadeInTitle>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          {mainAsset?.url && (
            <FadeInImage>
              <DecoratedImage
                src={mainAsset.url}
                alt={mainAsset.title ?? mainAsset.description ?? ""}
                width={mainAsset.width || 800}
                height={mainAsset.height || 1000}
                aspectRatio="aspect-[4/5]"
                imageClassName="h-full w-full object-cover"
              />
            </FadeInImage>
          )}

          {/* Content */}
          <FadeIn delay={0.2} className="space-y-6">
            {aboutMe?.json && (
              <div className="prose prose-lg">
                <RichTextRenderer document={aboutMe.json as Document} />
              </div>
            )}

            {quoteAboutMe && (
              <blockquote className="border-primary relative mt-8 border-l-2 pl-6">
                <p className="text-muted-foreground text-lg italic">
                  &ldquo;{quoteAboutMe}&rdquo;
                </p>
              </blockquote>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
