import Image from "next/image";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
  alt?: string;
  priority?: boolean;
  tone?: "default" | "light" | "watermark";
};

export function SiteLogo({
  className,
  imageClassName,
  alt = "Tai Chi Włocławek logo",
  priority = false,
  tone = "default",
}: SiteLogoProps) {
  return (
    <span className={cn("relative inline-flex shrink-0", className)}>
      <Image
        src="/taichi-wloclawek-logo.svg"
        alt={alt}
        width={316}
        height={272}
        priority={priority}
        className={cn(
          "h-full w-full object-contain",
          imageClassName,
        )}
      />
    </span>
  );
}
