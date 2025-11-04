"use client";

import { useState, useEffect, useRef } from "react";

export function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);
  const hasScrolledPastRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          hasScrolledPastRef.current = true;
          setIsVisible(true);
        } else if (hasScrolledPastRef.current) {
          setIsVisible(false);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0, rootMargin: "0px" },
    );

    const heroSection = document.querySelector("section:first-of-type");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl justify-center gap-8 px-4 py-3">
        <a
          className="border-b-2 border-transparent pb-px text-lg transition-colors hover:border-neutral-700"
          href="#o-mnie"
        >
          O MNIE
        </a>
        <a
          href="#zajecia"
          className="border-b-2 border-transparent pb-px text-lg transition-colors hover:border-neutral-700"
        >
          ZAJĘCIA
        </a>
        <a
          href="#kontakt"
          className="border-b-2 border-transparent pb-px text-lg transition-colors hover:border-neutral-700"
        >
          KONTAKT
        </a>
      </div>
    </nav>
  );
}
