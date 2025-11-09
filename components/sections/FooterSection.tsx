import { Facebook, Instagram, Youtube, Heart } from "lucide-react";
import type { MainPageData } from "@/lib/contentful";

interface FooterProps {
  quoteFooter?: MainPageData["quoteFooter"];
  facebook?: MainPageData["facebook"];
  instagram?: MainPageData["instagram"];
  youtube?: MainPageData["youtube"];
  patreon?: MainPageData["patreon"];
  nameLastNameSeniority?: MainPageData["nameLastNameSeniority"];
}

export function Footer({
  quoteFooter,
  facebook,
  instagram,
  youtube,
  patreon,
  nameLastNameSeniority,
}: FooterProps) {
  return (
    <footer className="bg-black px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          {nameLastNameSeniority || "Jarosław Świeczkowski"} - Taichi Quan.
          Wszelkie prawa zastrzeżone.
        </p>
        {quoteFooter && (
          <p className="mt-2 text-xs italic opacity-70">
            &ldquo;{quoteFooter}&rdquo;
          </p>
        )}
        {(facebook || instagram || youtube || patreon) && (
          <div className="mt-4 flex justify-center gap-6">
            {facebook && (
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-red-700"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-red-700"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            )}
            {youtube && (
              <a
                href={youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-red-700"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            )}
            {patreon && (
              <a
                href={patreon}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-red-700"
                aria-label="Patreon"
              >
                <Heart size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
