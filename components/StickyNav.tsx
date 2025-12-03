"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { YinYang } from "./YinYang";
import { NAVIGATION_LINKS } from "@/lib/constants";

export function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const regularLinks = NAVIGATION_LINKS.filter((link) => !link.isSpecial);
  const specialLink = NAVIGATION_LINKS.find((link) => link.isSpecial);

  // Convert hash links to homepage links when not on homepage
  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-border bg-background/95 border-b shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="group flex cursor-pointer items-center gap-3"
          >
            <YinYang className="text-primary h-10 w-10 transition-transform duration-500 group-hover:rotate-180" />
            <span
              className={cn(
                "font-serif text-xl font-bold tracking-wide transition-colors",
                "text-foreground",
              )}
            >
              太極拳
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {regularLinks.map((item) => {
              const linkClass = cn(
                "group relative cursor-pointer text-sm font-medium tracking-widest transition-colors",
                "text-muted-foreground hover:text-primary",
              );
              const href = getLinkHref(item.href);

              return (
                <Link key={item.href} href={href} className={linkClass}>
                  {item.label}
                  <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}

            {specialLink && (
              <Link
                href={specialLink.href}
                className="group relative cursor-pointer text-sm font-medium tracking-widest transition-all duration-300"
              >
                <span className="border-primary/50 bg-primary/5 text-primary group-hover:bg-primary relative z-10 flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-300 group-hover:text-white">
                  <YinYang className="h-4 w-4" withDots={false} />
                  {specialLink.label}
                </span>
              </Link>
            )}
          </nav>

          <button
            className="text-foreground cursor-pointer p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "border-border bg-background/98 absolute top-full right-0 left-0 overflow-hidden border-b backdrop-blur-md transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col py-4">
          {regularLinks.map((item) => {
            const linkClass =
              "cursor-pointer px-6 py-3 text-sm font-medium tracking-widest text-muted-foreground transition-colors hover:bg-muted hover:text-primary";
            const href = getLinkHref(item.href);

            return (
              <Link
                key={item.href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={linkClass}
              >
                {item.label}
              </Link>
            );
          })}

          {specialLink && (
            <Link
              href={specialLink.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-primary/50 bg-primary/5 text-primary hover:bg-primary mx-6 mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-3 text-center text-sm font-medium tracking-widest transition-all duration-300 hover:text-white"
            >
              <YinYang className="h-4 w-4" withDots={false} />
              {specialLink.label}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
