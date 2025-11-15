"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { NAVIGATION_LINKS } from "@/lib/constants";

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
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-0 px-4 py-3">
        {NAVIGATION_LINKS.map((link) => {
          const className = `border-b-2 border-transparent pb-px text-lg transition-colors ${
            link.isSpecial
              ? "font-semibold text-red-800 font-eagle-lake hover:border-red-800"
              : "hover:border-neutral-700"
          }`;

          if (link.href.startsWith("/")) {
            return (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          }

          return (
            <a key={link.href} href={link.href} className={className}>
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
