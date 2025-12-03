"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface DecoratedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  imageClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
  children?: ReactNode;
  variant?: "default" | "banner";
}

export function DecoratedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  imageClassName = "",
  aspectRatio,
  priority = false,
  sizes,
  children,
  variant = "default",
}: DecoratedImageProps) {
  if (variant === "banner") {
    return (
      <div className={`relative ${className}`}>
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={imageClassName}
            priority={priority}
            sizes={sizes}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={imageClassName}
            priority={priority}
            sizes={sizes}
          />
        )}
        {children}
        <div className="bg-primary absolute right-0 bottom-0 left-0 z-20 h-1" />
        <div className="from-foreground/30 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="from-primary/10 absolute -inset-4 rounded-lg bg-gradient-to-br to-transparent" />
      <div
        className={`relative overflow-hidden rounded-lg shadow-2xl ${
          aspectRatio || ""
        }`}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={imageClassName}
            priority={priority}
            sizes={sizes}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={imageClassName}
            priority={priority}
            sizes={sizes}
          />
        )}
        {children}
        <div className="bg-primary absolute right-0 bottom-0 left-0 h-1" />
        <div className="from-foreground/30 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>
      <div className="border-primary/30 absolute -right-4 -bottom-4 h-24 w-24 border-r-2 border-b-2" />
    </div>
  );
}
