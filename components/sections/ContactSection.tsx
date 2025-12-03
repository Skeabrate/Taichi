import { Facebook, Instagram, Youtube, Phone, Mail, Heart } from "lucide-react";
import type { MainPageData } from "@/lib/contentful";
import { ChineseOrnament } from "@/components/ChineseOrnament";
import { SECTION_ID_CONTACT, NAV_LABEL_CONTACT } from "@/lib/constants";
import { FadeInTitle } from "@/components/animations/FadeInTitle";
import { FadeIn } from "@/components/animations/FadeIn";

type ContactSectionProps = {
  phoneNumber?: MainPageData["phoneNumber"];
  email?: MainPageData["email"];
  facebook?: MainPageData["facebook"];
  instagram?: MainPageData["instagram"];
  youtube?: MainPageData["youtube"];
  patreon?: MainPageData["patreon"];
};

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
      className="bg-muted/30 relative overflow-hidden py-24 lg:py-32"
    >
      {/* Decorative elements */}
      <ChineseOrnament
        variant="corner"
        className="absolute bottom-8 left-8 rotate-180 opacity-20"
      />
      <ChineseOrnament
        variant="corner"
        className="absolute right-8 bottom-8 -rotate-90 opacity-20"
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section title */}
        <FadeInTitle className="mb-16 text-center">
          <ChineseOrnament variant="divider" className="mb-6" />
          <h2 className="font-heading text-foreground text-3xl font-normal tracking-wide sm:text-4xl">
            {NAV_LABEL_CONTACT}
          </h2>
          <div className="bg-primary mx-auto mt-4 h-1 w-16" />
        </FadeInTitle>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <h3 className="text-foreground text-xl font-semibold">
                Skontaktuj Się Ze Mną
              </h3>
            </FadeIn>

            {phoneNumber && (
              <FadeIn delay={0.2}>
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="group border-border bg-background hover:border-primary/50 flex items-center gap-4 rounded-lg border p-4 transition-colors"
                >
                  <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <span className="text-foreground font-medium">
                    {phoneNumber}
                  </span>
                </a>
              </FadeIn>
            )}

            {email && (
              <FadeIn delay={0.3}>
                <a
                  href={`mailto:${email}`}
                  className="group border-border bg-background hover:border-primary/50 flex items-center gap-4 rounded-lg border p-4 transition-colors"
                >
                  <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <span className="text-foreground font-medium">{email}</span>
                </a>
              </FadeIn>
            )}
          </div>

          {/* Social Media */}
          {(facebook || instagram || youtube || patreon) && (
            <div className="space-y-8">
              <FadeIn delay={0.4}>
                <h3 className="text-foreground text-xl font-semibold">
                  Znajdź Mnie Online
                </h3>
              </FadeIn>

              {facebook && (
                <FadeIn delay={0.5}>
                  <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-border bg-background hover:border-primary/50 flex items-center gap-4 rounded-lg border p-4 transition-colors"
                  >
                    <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                      <Facebook className="text-primary h-5 w-5" />
                    </div>
                    <span className="text-foreground font-medium">
                      Facebook
                    </span>
                  </a>
                </FadeIn>
              )}

              {instagram && (
                <FadeIn delay={0.6}>
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-border bg-background hover:border-primary/50 flex items-center gap-4 rounded-lg border p-4 transition-colors"
                  >
                    <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                      <Instagram className="text-primary h-5 w-5" />
                    </div>
                    <span className="text-foreground font-medium">
                      Instagram
                    </span>
                  </a>
                </FadeIn>
              )}

              {youtube && (
                <FadeIn delay={0.7}>
                  <a
                    href={youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-border bg-background hover:border-primary/50 flex items-center gap-4 rounded-lg border p-4 transition-colors"
                  >
                    <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                      <Youtube className="text-primary h-5 w-5" />
                    </div>
                    <span className="text-foreground font-medium">YouTube</span>
                  </a>
                </FadeIn>
              )}

              {patreon && (
                <FadeIn delay={0.8}>
                  <a
                    href={patreon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-border bg-background hover:border-primary/50 flex items-center gap-4 rounded-lg border p-4 transition-colors"
                  >
                    <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                      <Heart className="text-primary h-5 w-5" />
                    </div>
                    <span className="text-foreground font-medium">Patreon</span>
                  </a>
                </FadeIn>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
