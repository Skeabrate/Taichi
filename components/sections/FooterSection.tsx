import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Jarosław Świeczkowski - Taichi Quan.
          Wszelkie prawa zastrzeżone.
        </p>
        <p className="mt-2 text-xs opacity-70">
          Starożytna sztuka dla współczesnego świata
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://patreon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-opacity hover:opacity-70"
            aria-label="Patreon"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
