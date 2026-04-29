"use client";

import type { MainPageData } from "@/lib/hygraph/api";
import { YinYang } from "@/components/YinYang";
import { ChevronDown } from "lucide-react";
import { SiteLogo } from "@/components/SiteLogo";

type HeroProps = {
  nameLastNameSeniority?: MainPageData["nameLastNameSeniority"];
};

export function Hero({ nameLastNameSeniority }: HeroProps) {
  return (
      <section className="from-muted/50 to-background relative flex min-h-screen items-center justify-center bg-gradient-to-b py-12 sm:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-10">
        {/* Chinese pattern on left side - hidden on mobile */}
        <div className="absolute top-0 left-0 hidden h-full w-1/3 opacity-[0.02] md:block">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
              -45deg,
              currentColor 0px,
              currentColor 1px,
              transparent 1px,
              transparent 20px
            )`,
            }}
          />
        </div>

         <div className="absolute top-0 left-0 flex items-center justify-center opacity-[0.04] w-full h-full">
          <YinYang
            className="text-foreground animate-spin-slow h-full w-full max-w-[70vw] max-h-[70vh]"
            withDots={true}
          />
        </div>

        {/* Chinese pattern on right side - hidden on mobile */}
        <div className="absolute top-0 right-0 hidden h-full w-1/3 opacity-[0.02] md:block">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
              45deg,
              currentColor 0px,
              currentColor 1px,
              transparent 1px,
              transparent 20px
            )`,
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-heading text-foreground mb-4 text-6xl font-normal tracking-wider sm:text-7xl lg:text-8xl">
            太極拳
          </h1>

          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="bg-primary h-0.5 w-12" />
            <YinYang className="text-primary h-6 w-6" />
            <div className="bg-primary h-0.5 w-12" />
          </div>

          <h2 className="font-heading text-foreground mb-8 text-3xl font-normal sm:text-4xl lg:text-6xl">
            TAI CHI CHUAN
          </h2>

          {nameLastNameSeniority && (
            <p className="text-muted-foreground mb-12 text-lg tracking-wide sm:text-xl">
              {nameLastNameSeniority}
            </p>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-[fadeIn_0.5s_ease-out_1s_forwards,bounce_1s_ease-in-out_1.5s_infinite] opacity-0">
          <ChevronDown className="text-muted-foreground/50 h-6 w-6" />
        </div>
      </div>
    </section>
  );
}
