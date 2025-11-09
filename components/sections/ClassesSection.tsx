"use client";

import { MapPin, Clock, Play } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageLightbox } from "../ImageLightbox";
import { RichTextRenderer } from "@/lib/rich-text-renderer";
import type { MainPageData } from "@/lib/contentful";
import { YinYang } from "@/components/YinYang";

interface ClassesSectionProps {
  classesScheduleCollection?: MainPageData["classesScheduleCollection"];
  localization?: MainPageData["localization"];
  coordinates?: MainPageData["coordinates"];
  patreonSection?: MainPageData["patreonSection"];
  patreon?: MainPageData["patreon"];
  classesAssetsCollection?: MainPageData["classesAssetsCollection"];
}

export function ClassesSection({
  classesScheduleCollection,
  localization,
  coordinates,
  patreonSection,
  patreon: patreonUrl,
  classesAssetsCollection,
}: ClassesSectionProps) {
  const classesSchedule = classesScheduleCollection?.items;
  const classesAssets = classesAssetsCollection?.items;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Process assets to include both images and videos
  const trainingMedia =
    classesAssets
      ?.map((asset) => {
        if (!asset?.url) return null;
        const isVideo =
          asset.contentType?.startsWith("video/") ||
          asset.url.match(/\.(mov|mp4|webm|ogg|avi|wmv|flv|mkv)$/i);
        return {
          url: asset.url,
          isVideo: !!isVideo,
          title: asset.title,
          description: asset.description,
        };
      })
      .filter((media): media is NonNullable<typeof media> => media !== null) ??
    [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getGoogleMapsUrl = () => {
    if (coordinates?.lat != null && coordinates?.lon != null) {
      return `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lon}&output=embed`;
    }
    return null;
  };

  return (
    <section id="zajecia" className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="slide-up mb-12 flex flex-col items-center justify-center gap-4 border-b-4 border-black pb-2 text-5xl font-bold">
          <div className="mb-2 flex items-center gap-4">
            <YinYang />
            ZAJĘCIA
            <YinYang />
          </div>
          <div className="h-2 w-1/3 bg-red-700" />
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="fade-in space-y-6">
            <div className="border-2 border-black p-8">
              <div className="mb-6 flex items-start gap-4">
                <Clock className="mt-1 h-8 w-8" />
                <div>
                  <h3 className="mb-4 text-2xl font-bold">HARMONOGRAM</h3>
                  {classesSchedule && classesSchedule.length > 0 && (
                    <div className="space-y-3">
                      {classesSchedule
                        .filter(
                          (
                            schedule,
                          ): schedule is NonNullable<typeof schedule> =>
                            schedule != null,
                        )
                        .map((schedule, index, array) => (
                          <div
                            key={schedule.sys.id || index}
                            className={
                              index < array.length - 1
                                ? "border-b border-gray-300 pb-3"
                                : "pb-3"
                            }
                          >
                            {schedule.day && (
                              <p className="font-bold">{schedule.day}</p>
                            )}
                            {schedule.hours && (
                              <p className="text-gray-600">{schedule.hours}</p>
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-8 w-8 shrink-0" />
                <div className="w-full flex-1">
                  <h3 className="mb-4 text-2xl font-bold">LOKALIZACJA</h3>
                  {localization?.json && (
                    <RichTextRenderer document={localization.json as any} />
                  )}
                  {getGoogleMapsUrl() && (
                    <div className="mt-4 h-[300px] w-full border-2 border-black">
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
            </div>

            {patreonSection?.json && (
              <div className="border-2 border-black bg-gray-50 p-8">
                <RichTextRenderer document={patreonSection.json as any} />
                {patreonUrl && (
                  <a
                    href={patreonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-black px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800"
                  >
                    ODWIEDŹ PATREON
                  </a>
                )}
              </div>
            )}
          </div>

          {trainingMedia.length > 0 && (
            <div className="fade-in relative min-h-[85vh]">
              <div className="sticky top-20 border-4 border-black bg-white p-2">
                <Carousel
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true,
                    slidesToScroll: 1,
                  }}
                >
                  <CarouselContent className="-ml-4">
                    {trainingMedia.map((media, index) => (
                      <CarouselItem key={index} className="pl-4 md:basis-full">
                        <div
                          className="relative h-[400px] cursor-pointer"
                          onClick={() => openLightbox(index)}
                        >
                          {media.isVideo ? (
                            <>
                              <video
                                src={media.url}
                                className="h-full w-full object-cover"
                                muted
                                playsInline
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30">
                                <div className="flex flex-col items-center gap-2">
                                  <div className="rounded-full bg-white/90 p-4">
                                    <Play
                                      className="h-8 w-8 text-black"
                                      fill="black"
                                    />
                                  </div>
                                  <span className="text-sm font-bold text-white">
                                    Kliknij aby odtworzyć
                                  </span>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <Image
                                src={media.url}
                                alt={
                                  media.title ??
                                  media.description ??
                                  `Zdjęcie z treningu ${index + 1}`
                                }
                                fill
                                className="object-cover object-top"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/10">
                                <span className="text-sm font-bold text-white opacity-0 transition-opacity hover:opacity-100">
                                  Kliknij aby powiększyć
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>
          )}
        </div>
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
