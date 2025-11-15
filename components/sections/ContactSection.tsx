import { Facebook, Instagram, Youtube, Phone, Mail, Heart } from "lucide-react";
import type { MainPageData } from "@/lib/contentful";
import { YinYang } from "@/components/YinYang";
import { ChineseBorder } from "@/components/ChineseBorder";
import { SECTION_ID_CONTACT, NAV_LABEL_CONTACT } from "@/lib/constants";
import { FadeInTitle } from "@/components/animations/FadeInTitle";
import { FadeIn } from "@/components/animations/FadeIn";

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
      id={SECTION_ID_CONTACT}
      className="flex items-center justify-center bg-white px-4 py-12 sm:py-28"
    >
      <div className="w-full max-w-4xl">
        <FadeInTitle className="mb-12 flex flex-col items-center justify-center gap-4 pb-2 text-3xl font-bold sm:text-5xl">
          <div className="mb-2 flex items-center gap-4">
            <YinYang />
            {NAV_LABEL_CONTACT}
            <YinYang />
          </div>
          <ChineseBorder />
        </FadeInTitle>

        <div className="mx-auto max-w-2xl">
          <FadeIn delay={0.1}>
            <h3 className="mb-5 text-center text-2xl font-bold">
              Skontaktuj Się Ze Mną
            </h3>
          </FadeIn>

          <div className="mb-6 grid gap-4">
            {phoneNumber && (
              <FadeIn delay={0.2}>
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-all hover:border-red-800 hover:bg-red-800 hover:text-white hover:shadow-lg"
                >
                  <Phone className="h-8 w-8 transition-transform group-hover:scale-110" />
                  <span className="text-xl font-bold">{phoneNumber}</span>
                </a>
              </FadeIn>
            )}

            {email && (
              <FadeIn delay={0.3}>
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-all hover:border-red-800 hover:bg-red-800 hover:text-white hover:shadow-lg"
                >
                  <Mail className="h-8 w-8 transition-transform group-hover:scale-110" />
                  <span className="text-xl font-bold break-all">{email}</span>
                </a>
              </FadeIn>
            )}
          </div>

          {(facebook || instagram || youtube || patreon) && (
            <FadeIn delay={0.4} className="pt-8">
              <h3 className="mb-5 text-center text-2xl font-bold">
                Znajdź Mnie Online
              </h3>
              <div className="grid gap-6">
                {facebook && (
                  <FadeIn delay={0.5}>
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-all hover:border-red-800 hover:bg-red-800 hover:text-white hover:shadow-lg"
                    >
                      <Facebook className="h-8 w-8 transition-transform group-hover:scale-110" />
                      <span className="text-xl font-bold">Facebook</span>
                    </a>
                  </FadeIn>
                )}

                {instagram && (
                  <FadeIn delay={0.6}>
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-all hover:border-red-800 hover:bg-red-800 hover:text-white hover:shadow-lg"
                    >
                      <Instagram className="h-8 w-8 transition-transform group-hover:scale-110" />
                      <span className="text-xl font-bold">Instagram</span>
                    </a>
                  </FadeIn>
                )}

                {youtube && (
                  <FadeIn delay={0.7}>
                    <a
                      href={youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-all hover:border-red-800 hover:bg-red-800 hover:text-white hover:shadow-lg"
                    >
                      <Youtube className="h-8 w-8 transition-transform group-hover:scale-110" />
                      <span className="text-xl font-bold">YouTube</span>
                    </a>
                  </FadeIn>
                )}

                {patreon && (
                  <FadeIn delay={0.8}>
                    <a
                      href={patreon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-3xl border-2 border-gray-300 p-6 transition-all hover:border-red-800 hover:bg-red-800 hover:text-white hover:shadow-lg"
                    >
                      <Heart className="h-8 w-8 transition-transform group-hover:scale-110" />
                      <span className="text-xl font-bold">Patreon</span>
                    </a>
                  </FadeIn>
                )}
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
