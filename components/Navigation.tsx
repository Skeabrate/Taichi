import Link from "next/link";
import { NAVIGATION_LINKS } from "@/lib/constants";

interface NavigationProps {
  basePath?: string;
}

export function Navigation({ basePath }: NavigationProps) {
  const links = NAVIGATION_LINKS;

  return (
    <nav className="flex flex-wrap justify-center gap-6">
      {links.map((link) => {
        const href = link.href.startsWith("/")
          ? link.href
          : basePath
            ? `${basePath}${link.href}`
            : link.href;

        const className = `border-b-2 border-transparent pb-px text-lg transition-colors hover:border-red-700 ${
          link.isSpecial ? "font-semibold text-red-700" : ""
        }`;

        if (link.href.startsWith("/") || basePath) {
          return (
            <Link key={link.href} href={href} className={className}>
              {link.label}
            </Link>
          );
        }

        return (
          <a key={link.href} href={href} className={className}>
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
