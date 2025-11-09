"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface MediaItem {
  url: string;
  isVideo: boolean;
  title?: string | null;
  description?: string | null;
}

interface ImageLightboxProps {
  media: MediaItem[];
  initialIndex: number;
  onClose: () => void;
}

export function ImageLightbox({
  media,
  initialIndex,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync currentIndex when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Pause video when switching items
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white transition-colors hover:text-gray-300"
      >
        <X size={32} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrevious();
        }}
        className="absolute left-4 text-white transition-colors hover:text-gray-300"
      >
        <ChevronLeft size={48} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 text-white transition-colors hover:text-gray-300"
      >
        <ChevronRight size={48} />
      </button>

      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        {media[currentIndex]?.isVideo ? (
          <video
            ref={videoRef}
            src={media[currentIndex].url}
            controls
            autoPlay
            className="max-h-[90vh] max-w-[90vw] object-contain"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={media[currentIndex]?.url || ""}
            alt={
              media[currentIndex]?.title ??
              media[currentIndex]?.description ??
              `Zdjęcie ${currentIndex + 1}`
            }
            width={1200}
            height={800}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            unoptimized
          />
        )}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white">
        {currentIndex + 1} / {media.length}
      </div>
    </div>
  );
}
