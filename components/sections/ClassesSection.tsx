"use client";

import { MapPin, Clock } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageLightbox } from "../ImageLightbox";

export function ClassesSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const trainingImages = [
    "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&h=800&fit=crop",
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="zajecia" className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="slide-up mb-12 border-b-4 border-black pb-4 text-center text-5xl font-bold">
          ZAJĘCIA
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="fade-in space-y-6">
            <div className="border-2 border-black p-8">
              <div className="mb-6 flex items-start gap-4">
                <Clock className="mt-1 h-8 w-8" />
                <div>
                  <h3 className="mb-4 text-2xl font-bold">HARMONOGRAM</h3>
                  <div className="space-y-3">
                    <div className="border-b border-gray-300 pb-3">
                      <p className="font-bold">Poniedziałek</p>
                      <p className="text-gray-600">18:00 - 19:30</p>
                    </div>
                    <div className="border-b border-gray-300 pb-3">
                      <p className="font-bold">Środa</p>
                      <p className="text-gray-600">18:00 - 19:30</p>
                    </div>
                    <div className="pb-3">
                      <p className="font-bold">Piątek</p>
                      <p className="text-gray-600">17:00 - 18:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-8 w-8" />
                <div>
                  <h3 className="mb-4 text-2xl font-bold">LOKALIZACJA</h3>
                  <p className="mb-2 font-semibold">
                    Sala Treningowa "Harmonia"
                  </p>
                  <p className="mb-4 text-gray-600">
                    ul. Przykładowa 123
                    <br />
                    00-001 Warszawa
                  </p>
                  <div className="mt-4 h-[200px] border-2 border-black">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.228698057329!2d21.012228776934426!3d52.22967597198026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8cc96b8073%3A0x4e3a98e8b9c3e3c3!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokalizacja zajęć"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-black bg-gray-50 p-8">
              <h3 className="mb-4 text-xl font-bold">NAUKA ONLINE</h3>
              <p className="mb-4 text-gray-600">
                Nie możesz uczestniczyć w zajęciach stacjonarnych? Odkryj moją
                platformę edukacyjną na Patreon, gdzie znajdziesz:
              </p>
              <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600">
                <li>Interaktywne filmy instruktażowe</li>
                <li>Szczegółowe objaśnienia technik</li>
                <li>Materiały dla początkujących i zaawansowanych</li>
                <li>Regularne aktualizacje treści</li>
              </ul>
              <a
                href="https://patreon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800"
              >
                ODWIEDŹ PATREON
              </a>
            </div>
          </div>

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
                  {trainingImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2">
                      <div
                        className="relative cursor-pointer"
                        onClick={() => openLightbox(index)}
                      >
                        <img
                          src={image}
                          alt={`Zdjęcie z treningu ${index + 1}`}
                          className="h-[400px] w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/10">
                          <span className="text-sm font-bold text-white opacity-0 transition-opacity hover:opacity-100">
                            Kliknij aby powiększyć
                          </span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={trainingImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
