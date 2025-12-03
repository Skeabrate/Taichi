import Link from "next/link";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { YinYang } from "./YinYang";

type NavigationProps = {
  basePath?: string;
};

export function Navigation({ basePath }: NavigationProps) {
  const links = NAVIGATION_LINKS;
  const regularLinks = links.filter((link) => !link.isSpecial);
  const specialLink = links.find((link) => link.isSpecial);

  return (
    <nav className="flex flex-wrap items-center justify-center gap-6">
      {regularLinks.map((link) => {
        const href = link.href.startsWith("/")
          ? link.href
          : basePath
            ? `${basePath}${link.href}`
            : link.href;

        const className =
          "relative text-sm font-medium tracking-widest text-muted-foreground transition-colors hover:text-primary group cursor-pointer";

        if (link.href.startsWith("/") || basePath) {
          return (
            <Link key={link.href} href={href} className={className}>
              {link.label}
              <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
            </Link>
          );
        }

        return (
          <a key={link.href} href={href} className={className}>
            {link.label}
            <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
          </a>
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
  );
}
