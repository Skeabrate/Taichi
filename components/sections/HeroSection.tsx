"use client";

import type { MainPageData } from "@/lib/contentful";
import { YinYang } from "@/components/YinYang";
import { ChevronDown } from "lucide-react";

type HeroProps = {
  nameLastNameSeniority?: MainPageData["nameLastNameSeniority"];
};

export function Hero({ nameLastNameSeniority }: HeroProps) {
  return (
    <section className="from-muted/50 to-background relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Yin Yang watermark - aligned to left */}
        <div className="absolute top-1/4 left-5 opacity-[0.04]">
          <YinYang
            className="text-foreground animate-spin-slow h-[600px] w-[600px]"
            withDots={true}
          />
        </div>

        {/* Chinese pattern on right side */}
        <div className="absolute top-0 right-0 h-full w-1/3 opacity-[0.02]">
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

        {/* Bamboo illustration */}
        <svg
          className="absolute top-1/3 right-8 hidden h-auto w-16 opacity-10 md:block lg:right-16 lg:w-24"
          viewBox="0 0 50 200"
        >
          <line
            x1="25"
            y1="0"
            x2="25"
            y2="200"
            stroke="currentColor"
            strokeWidth="3"
          />
          <ellipse
            cx="25"
            cy="30"
            rx="12"
            ry="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <ellipse
            cx="25"
            cy="70"
            rx="12"
            ry="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <ellipse
            cx="25"
            cy="110"
            rx="12"
            ry="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <ellipse
            cx="25"
            cy="150"
            rx="12"
            ry="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M25 50 Q40 40 50 55"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M25 90 Q10 80 0 95"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M25 130 Q40 120 45 135"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Chinese characters */}
          <h1 className="font-heading text-foreground mb-4 text-6xl font-normal tracking-wider sm:text-7xl lg:text-8xl">
            太極拳
          </h1>

          {/* Red decorative line */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="bg-primary h-0.5 w-12" />
            <YinYang className="text-primary h-6 w-6" />
            <div className="bg-primary h-0.5 w-12" />
          </div>

          {/* English title */}
          <h2 className="font-heading text-foreground mb-8 text-3xl font-normal sm:text-4xl lg:text-6xl">
            TAI CHI CHUAN
          </h2>

          {/* Instructor name */}
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
