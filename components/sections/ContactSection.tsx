import { Facebook, Instagram, Youtube, Phone, Mail, Heart } from "lucide-react";
import type { MainPageData } from "@/lib/contentful";
import { YinYang } from "@/components/YinYang";
import { ChineseBorder } from "@/components/ChineseBorder";

interface ContactSectionProps {
  phoneNumber?: MainPageData["phoneNumber"];
  email?: MainPageData["email"];
  facebook?: MainPageData["facebook"];
  instagram?: MainPageData["instagram"];
  youtube?: MainPageData["youtube"];
  patreon?: MainPageData["patreon"];
}

export function ContactSection({
  phoneNumber,
  email,
  facebook,
  instagram,
  youtube,
  patreon,
}: ContactSectionProps) {
  return (
    <section
      id="kontakt"
      className="flex items-center justify-center bg-white px-4 py-12 sm:py-28"
    >
      <div className="slide-up w-full max-w-4xl">
        <h2 className="mb-12 flex flex-col items-center justify-center gap-4 pb-2 text-3xl font-bold sm:text-5xl">
          <div className="mb-2 flex items-center gap-4">
            <YinYang />
            KONTAKT
            <YinYang />
          </div>
          <ChineseBorder />
        </h2>

        <div className="mx-auto max-w-2xl">
          <h3 className="mb-5 text-center text-2xl font-bold">
            Skontaktuj Się Ze Mną
          </h3>

          <div className="mb-6 grid gap-4">
            {phoneNumber && (
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-colors hover:bg-red-700 hover:text-white"
              >
                <Phone className="h-8 w-8" />
                <span className="text-xl font-bold">{phoneNumber}</span>
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-colors hover:bg-red-700 hover:text-white"
              >
                <Mail className="h-8 w-8" />
                <span className="text-xl font-bold break-all">{email}</span>
              </a>
            )}
          </div>

          {(facebook || instagram || youtube || patreon) && (
            <div className="pt-8">
              <h3 className="mb-5 text-center text-2xl font-bold">
                Znajdź Mnie Online
              </h3>
              <div className="grid gap-6">
                {facebook && (
                  <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-colors hover:bg-red-700 hover:text-white"
                  >
                    <Facebook className="h-8 w-8" />
                    <span className="text-xl font-bold">Facebook</span>
                  </a>
                )}

                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-colors hover:bg-red-700 hover:text-white"
                  >
                    <Instagram className="h-8 w-8" />
                    <span className="text-xl font-bold">Instagram</span>
                  </a>
                )}

                {youtube && (
                  <a
                    href={youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-colors hover:bg-red-700 hover:text-white"
                  >
                    <Youtube className="h-8 w-8" />
                    <span className="text-xl font-bold">YouTube</span>
                  </a>
                )}

                {patreon && (
                  <a
                    href={patreon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-colors hover:bg-red-700 hover:text-white"
                  >
                    <Heart className="h-8 w-8" />
                    <span className="text-xl font-bold">Patreon</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
