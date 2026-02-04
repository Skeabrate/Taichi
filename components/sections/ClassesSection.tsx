"use client";

import { ChineseOrnament } from "@/components/ChineseOrnament";
import { YinYang } from "@/components/YinYang";
import { NAV_LABEL_CLASSES, SECTION_ID_CLASSES } from "@/lib/constants";
import type { MainPageData } from "@/lib/hygraph/api";
import { RichTextRenderer } from "@/lib/rich-text-renderer";
import { Clock, MapPin, Video, Play, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "../ImageLightbox";
import { FadeInTitle } from "@/components/animations/FadeInTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import { FadeInImage } from "@/components/animations/FadeInImage";

type ClassesSectionProps = {
  classesSchedule?: MainPageData["classesSchedule"];
  localisation?: MainPageData["localisation"];
  coordinates?: MainPageData["coordinates"];
  patreonSection?: MainPageData["patreonSection"];
  patreon?: MainPageData["patreon"];
  classesAssetsCollection?: MainPageData["classesAssetsCollection"];
};

const DAYS_MAP = {
  monday: "Poniedziałek",
  tuesday: "Wtorek",
  wednesday: "Środa",
  thursday: "Czwartek",
  friday: "Piątek",
  saturday: "Sobota",
  sunday: "Niedziela",
};

export function ClassesSection({
  classesSchedule,
  localisation,
  coordinates,
  patreonSection,
  patreon,
  classesAssetsCollection,
}: ClassesSectionProps) {
  const classesAssets = classesAssetsCollection;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // Process assets to include both images and videos
  const trainingMedia =
    classesAssets
      ?.map((asset) => {
        if (!asset?.url) return null;
        const isVideo = asset.mimeType?.startsWith("video/");
        return {
          url: asset.url,
          isVideo: !!isVideo,
        };
      })
      .filter((media): media is NonNullable<typeof media> => media !== null) ??
    [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getGoogleMapsUrl = () => {
    if (coordinates?.latitude != null && coordinates?.longitude != null) {
      return `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}&output=embed`;
    }
    return null;
  };

  const displayedMedia = showAllPhotos
    ? trainingMedia
    : trainingMedia.slice(0, 6);

  return (
    <section
      id={SECTION_ID_CLASSES}
      className="bg-background relative overflow-hidden py-12 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section title */}
        <FadeInTitle className="mb-16 text-center">
          <ChineseOrnament variant="divider" className="mb-6" />
          <h2 className="font-heading text-foreground text-3xl font-normal tracking-wide sm:text-4xl">
            {NAV_LABEL_CLASSES}
          </h2>
          <div className="bg-primary mx-auto mt-4 h-1 w-16" />
        </FadeInTitle>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column: Schedule and Online Learning */}
          <FadeIn delay={0.1} className="space-y-8">
            <div className="border-border bg-muted/30 rounded-lg border p-8">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="text-primary h-6 w-6" />
                <h3 className="text-foreground text-xl font-semibold">
                  HARMONOGRAM
                </h3>
              </div>
              {!!classesSchedule && classesSchedule.length > 0 && (
                <div className="space-y-3">
                  {classesSchedule
                    .filter(
                      (schedule): schedule is NonNullable<typeof schedule> =>
                        schedule != null,
                    )
                    .map((schedule, index) => (
                      <div
                        key={schedule.id || index}
                        className="bg-background flex items-center justify-between rounded-lg p-4"
                      >
                        {!!schedule.day && (
                          <span className="text-foreground font-semibold">
                            {DAYS_MAP[schedule.day as keyof typeof DAYS_MAP]}
                          </span>
                        )}
                        {!!schedule.hours && (
                          <span className="text-primary text-lg font-bold">
                            {schedule.hours}
                          </span>
                        )}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Online Learning */}
            {!!patreonSection?.richText?.raw && (
              <div className="border-border bg-muted/30 rounded-lg border p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Video className="text-primary h-6 w-6" />
                  <h3 className="text-foreground text-xl font-semibold">
                    NAUKA ONLINE
                  </h3>
                  {!patreon && (
                    <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs whitespace-nowrap">
                      w przygotowaniu
                    </span>
                  )}
                </div>
                {patreonSection?.richText?.raw && (
                  <div className="prose prose-sm text-muted-foreground mb-6">
                    <RichTextRenderer
                      content={patreonSection.richText.raw}
                      useCheckCircleIcons={true}
                    />
                  </div>
                )}
                {patreon && (
                  <a
                    href={patreon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors"
                  >
                    Sprawdź kurs
                    <ChevronRight className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}
          </FadeIn>

          {/* Right column: Location Card */}
          <FadeIn delay={0.2}>
            <div className="bg-foreground text-background relative h-full overflow-hidden rounded-lg p-8">
              <div className="absolute top-4 right-4 opacity-10">
                <YinYang className="h-24 w-24" />
              </div>

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <MapPin className="text-primary h-6 w-6" />
                  <h3 className="text-xl font-semibold">LOKALIZACJA</h3>
                </div>

                {!!localisation?.richText?.raw && (
                  <div className="text-background/80 mb-6 [&_p]:mb-4 [&_p]:leading-relaxed [&_strong]:font-bold">
                    <RichTextRenderer content={localisation.richText.raw} />
                  </div>
                )}

                {getGoogleMapsUrl() && (
                  <div className="bg-background/10 aspect-video overflow-hidden rounded-lg">
                    <iframe
                      src={getGoogleMapsUrl()!}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokalizacja zajęć"
                      className="h-full w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Gallery */}
        {trainingMedia.length > 0 && (
          <div className="mt-16">
            <h3 className="font-eagle-lake mb-8 text-center text-2xl font-bold text-red-800">
              Galeria
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {displayedMedia.map((media, i) => {
                const isLastVisible =
                  !showAllPhotos && i === 5 && trainingMedia.length > 6;

                return (
                  <FadeInImage key={i} delay={0.3 + i * 0.05}>
                    <div
                      className="group bg-muted relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => openLightbox(i)}
                    >
                      {media.isVideo ? (
                        <>
                          <video
                            src={media.url}
                            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                            muted
                            playsInline
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                            <div className="rounded-full bg-white/90 p-3">
                              <Play
                                className="h-6 w-6 text-black"
                                fill="black"
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <Image
                            src={media.url}
                            alt={`Zdjęcie z treningu ${i + 1}`}
                            fill
                            className="object-cover transition-all duration-500 group-hover:scale-105"
                          />
                          {/* Red inset shadow hover effect */}
                          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(196,30,58,0.6)]" />
                          </div>
                        </>
                      )}

                      {/* Show more overlay on last visible image */}
                      {isLastVisible && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowAllPhotos(true);
                          }}
                          className="bg-foreground/70 text-background hover:bg-foreground/80 absolute inset-0 flex flex-col items-center justify-center gap-2 transition-colors"
                        >
                          <span className="text-lg font-semibold">
                            +{trainingMedia.length - 6}
                          </span>
                          <span className="flex items-center gap-1 text-sm">
                            Zobacz więcej <ChevronRight className="h-4 w-4" />
                          </span>
                        </button>
                      )}
                    </div>
                  </FadeInImage>
                );
              })}
            </div>

            {/* Show less button */}
            {showAllPhotos && trainingMedia.length > 6 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAllPhotos(false)}
                  className="border-primary/50 text-primary hover:bg-primary rounded-full border px-6 py-2 text-sm font-medium transition-all duration-300 hover:text-white"
                >
                  Pokaż mniej
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <ImageLightbox
          media={trainingMedia}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
