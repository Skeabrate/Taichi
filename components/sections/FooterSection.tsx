import { Facebook, Instagram, Youtube, Heart } from "lucide-react";
import type { MainPageData } from "@/lib/contentful";
import { YinYang } from "@/components/YinYang";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/lib/constants";

type FooterProps = {
  quoteFooter?: MainPageData["quoteFooter"];
  facebook?: MainPageData["facebook"];
  instagram?: MainPageData["instagram"];
  youtube?: MainPageData["youtube"];
  patreon?: MainPageData["patreon"];
  nameLastNameSeniority?: MainPageData["nameLastNameSeniority"];
};

export function Footer({
  quoteFooter,
  facebook,
  instagram,
  youtube,
  patreon,
  nameLastNameSeniority,
}: FooterProps) {
  const regularLinks = NAVIGATION_LINKS.filter((link) => !link.isSpecial);
  const specialLink = NAVIGATION_LINKS.find((link) => link.isSpecial);

  // Convert hash links to homepage links
  const getLinkHref = (href: string) => {
    if (href.startsWith("#")) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link
            href="/"
            className="mb-6 flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-80"
          >
            <YinYang className="text-primary h-8 w-8" withDots={false} />
            <span className="font-serif text-xl font-bold tracking-wider">
              太極拳
            </span>
          </Link>

          {/* Tagline */}
          <p className="text-background/60 mb-6 text-sm">
            {quoteFooter || "Tai Chi Chuan - Harmonia ciała i umysłu"}
          </p>

          {/* Navigation */}
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            {regularLinks.map((link) => {
              const href = getLinkHref(link.href);
              return (
                <Link
                  key={link.href}
                  href={href}
                  className="text-background/60 hover:text-primary cursor-pointer text-sm transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
            {specialLink && (
              <Link
                href={specialLink.href}
                className="text-primary hover:text-primary/80 cursor-pointer text-sm font-medium transition-colors"
              >
                {specialLink.label}
              </Link>
            )}
          </nav>

          {/* Social Links */}
          {(facebook || instagram || youtube || patreon) && (
            <div className="mb-8 flex justify-center gap-4">
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
              {youtube && (
                <a
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-white"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
              )}
              {patreon && (
                <a
                  href={patreon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-white"
                  aria-label="Patreon"
                >
                  <Heart size={18} />
                </a>
              )}
            </div>
          )}

          {/* Divider */}
          <div className="bg-background/10 mb-6 h-px w-full" />

          {/* Copyright */}
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()}{" "}
            {nameLastNameSeniority || "Jarosław Świeczkowski"}. Wszystkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
