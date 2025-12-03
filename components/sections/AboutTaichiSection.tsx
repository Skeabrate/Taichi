import { ChineseOrnament } from "@/components/ChineseOrnament";
import { YinYang } from "@/components/YinYang";
import { NAV_LABEL_TAICHI, SECTION_ID_TAICHI } from "@/lib/constants";
import type { MainPageData } from "@/lib/contentful";
import { RichTextRenderer } from "@/lib/rich-text-renderer";
import type { Document } from "@contentful/rich-text-types";
import { FadeInTitle } from "@/components/animations/FadeInTitle";
import { FadeInImage } from "@/components/animations/FadeInImage";
import { FadeIn } from "@/components/animations/FadeIn";
import { DecoratedImage } from "@/components/DecoratedImage";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type AboutTaichiSectionProps = {
  quoteAboutTaichi?: MainPageData["quoteAboutTaichi"];
  aboutTaichiText?: MainPageData["aboutTaichiText"];
  taichiImage?: MainPageData["taichiImage"];
  aboutTaichiHealthBenefitsCollection?: MainPageData["aboutTaichiHealthBenefitsCollection"];
  aboutTaichiLabsCollection?: MainPageData["aboutTaichiLabsCollection"];
};

const polishIconMap: Record<string, string> = {
  mózg: "Brain",
  puls: "Activity",
  gwiazdka: "Star",
  serce: "Heart",
  tarcza: "Shield",
  waga: "Scale",
  iskra: "Sparkles",
};

// Helper to normalize icon name (lowercase, remove diacritics)
function normalizeIconName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Helper function to get icon component from string name
function getIconComponent(
  iconName: string | null | undefined,
): LucideIcon | null {
  if (!iconName) return null;

  const normalized = normalizeIconName(iconName);

  // Look up in Polish icon map (normalize map keys for comparison)
  for (const [key, value] of Object.entries(polishIconMap)) {
    if (normalizeIconName(key) === normalized) {
      const icon = LucideIcons[value as keyof typeof LucideIcons];
      if (icon) {
        return icon as LucideIcon;
      }
    }
  }

  return null;
}

export function AboutTaichiSection({
  quoteAboutTaichi,
  aboutTaichiText,
  taichiImage,
  aboutTaichiHealthBenefitsCollection,
  aboutTaichiLabsCollection,
}: AboutTaichiSectionProps) {
  const healthBenefits = aboutTaichiHealthBenefitsCollection?.items?.filter(
    (item): item is NonNullable<typeof item> => item != null,
  );

  // Get the first item from each collection for the bottom tiles
  const healthBenefitsTile = aboutTaichiHealthBenefitsCollection?.items?.[0];
  const labsTile = aboutTaichiLabsCollection?.items?.[0];
  return (
    <section
      id={SECTION_ID_TAICHI}
      className="bg-muted/30 relative overflow-hidden py-12 sm:py-24 lg:py-32"
    >
      {/* Background Yin Yang with dots - centered on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:left-auto sm:right-5 sm:translate-x-0 opacity-[0.02]">
        <YinYang
          className="text-foreground animate-spin-slow h-[300px] w-[300px] sm:h-[600px] sm:w-[600px]"
          withDots={true}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section title */}
        <FadeInTitle className="mb-16 text-center">
          <ChineseOrnament variant="divider" className="mb-6" />
          <h2 className="font-heading text-foreground text-3xl font-normal tracking-wide sm:text-4xl">
            {NAV_LABEL_TAICHI}
          </h2>
          <div className="bg-primary mx-auto mt-4 h-1 w-16" />
        </FadeInTitle>

        {/* Main content */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <FadeIn delay={0.1} className="space-y-6">
            {aboutTaichiText?.json && (
              <div className="prose prose-lg text-muted-foreground mx-auto">
                <RichTextRenderer document={aboutTaichiText.json as Document} />
              </div>
            )}

            {quoteAboutTaichi && (
              <blockquote className="border-primary bg-background relative mx-auto max-w-2xl rounded-lg border-l-4 px-8 py-6 shadow-sm">
                <p className="text-muted-foreground text-lg italic">
                  &ldquo;{quoteAboutTaichi}&rdquo;
                </p>
              </blockquote>
            )}
          </FadeIn>
        </div>

        {/* Tai Chi Practice Image */}
        {taichiImage?.url && (
          <div className="mx-auto mb-20 max-w-4xl">
            <FadeInImage delay={0.2}>
              <DecoratedImage
                src={taichiImage.url}
                alt={taichiImage.title ?? taichiImage.description ?? ""}
                width={taichiImage.width || 800}
                height={taichiImage.height || 400}
                imageClassName="h-[400px] w-full object-cover"
              />
            </FadeInImage>
          </div>
        )}

        {/* Health Benefits */}
        {healthBenefits && healthBenefits.length > 0 && (
          <div className="mb-20">
            <h3 className="font-eagle-lake mb-12 text-center text-2xl font-bold text-red-800">
              Korzyści zdrowotne Tai Chi
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {healthBenefits.map((benefit, index) => {
                // Handle icon as array or string
                const iconName = Array.isArray(benefit.icon)
                  ? benefit.icon[0]
                  : benefit.icon;

                const IconComponent = iconName
                  ? getIconComponent(iconName)
                  : null;

                // Debug: log icon name if component not found (development only)
                if (
                  iconName &&
                  !IconComponent &&
                  typeof window !== "undefined"
                ) {
                  console.warn(
                    `Icon not found for: "${iconName}". Available mappings: Mózg→Brain, Puls→Pulse, Gwiazdka→Star, etc.`,
                  );
                }

                return (
                  <FadeIn
                    key={benefit.sys?.id || index}
                    delay={0.3 + index * 0.1}
                  >
                    <div className="group border-border bg-background hover:border-primary/30 flex h-full flex-col rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                      {IconComponent ? (
                        <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors">
                          <IconComponent className="text-primary h-6 w-6" />
                        </div>
                      ) : iconName ? (
                        // Fallback: show icon name if icon component not found
                        <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors">
                          <span className="text-primary text-xs font-medium">
                            {iconName.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                      ) : null}
                      {benefit.text?.json && (
                        <div className="prose prose-sm text-muted-foreground flex-1 [&_h4]:mb-2 [&_p]:text-sm [&_p]:leading-relaxed">
                          <RichTextRenderer
                            document={benefit.text.json as Document}
                            links={benefit.text.links}
                          />
                        </div>
                      )}
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        )}

        {/* Two tiles for additional content */}
        {(healthBenefitsTile?.text?.json || labsTile?.text?.json) && (
          <div className="grid gap-8 md:grid-cols-2">
            {healthBenefitsTile?.text?.json && (
              <FadeIn delay={0.4}>
                <div className="border-border bg-background flex h-full flex-col rounded-lg border p-8 shadow-sm">
                  <div className="prose prose-lg flex-1">
                    <RichTextRenderer
                      document={healthBenefitsTile.text.json as Document}
                      links={healthBenefitsTile.text.links}
                    />
                  </div>
                </div>
              </FadeIn>
            )}

            {labsTile?.text?.json && (
              <FadeIn delay={0.5}>
                <div className="border-border bg-background flex h-full flex-col rounded-lg border p-8 shadow-sm">
                  <div className="prose prose-lg flex-1">
                    <RichTextRenderer
                      document={labsTile.text.json as Document}
                      links={labsTile.text.links}
                    />
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
