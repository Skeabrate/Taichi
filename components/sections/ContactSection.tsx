import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="flex min-h-screen items-center justify-center bg-neutral-100 px-4 py-20"
    >
      <div className="w-full max-w-4xl">
        <h2 className="mb-12 border-b-4 border-black pb-4 text-center text-5xl font-bold">
          KONTAKT
        </h2>

        <div className="mx-auto max-w-2xl">
          <h3 className="mb-5 text-center text-2xl font-bold">
            Skontaktuj Się Ze Mną
          </h3>

          <div className="mb-6 grid gap-4">
            <a
              href="tel:+48123456789"
              className="flex items-center gap-4 border-2 border-black p-6 transition-colors hover:bg-black hover:text-white"
            >
              <Phone className="h-8 w-8" />
              <span className="text-xl font-bold">+48 123 456 789</span>
            </a>

            <a
              href="mailto:kontakt@taichi.pl"
              className="flex items-center gap-4 border-2 border-black p-6 transition-colors hover:bg-black hover:text-white"
            >
              <Mail className="h-8 w-8" />
              <span className="text-xl font-bold">kontakt@taichi.pl</span>
            </a>
          </div>

          <div className="pt-8">
            <h3 className="mb-5 text-center text-2xl font-bold">
              Znajdź Mnie Online
            </h3>
            <div className="grid gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border-2 border-black p-6 transition-colors hover:bg-black hover:text-white"
              >
                <Facebook className="h-8 w-8" />
                <span className="text-xl font-bold">Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border-2 border-black p-6 transition-colors hover:bg-black hover:text-white"
              >
                <Instagram className="h-8 w-8" />
                <span className="text-xl font-bold">Instagram</span>
              </a>

              <a
                href="https://patreon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border-2 border-black p-6 transition-colors hover:bg-black hover:text-white"
              >
                <Youtube className="h-8 w-8" />
                <span className="text-xl font-bold">Patreon</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
