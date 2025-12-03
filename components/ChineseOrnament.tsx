import { cn } from "@/lib/utils";
import { YinYang } from "./YinYang";

type ChineseOrnamentProps = {
  className?: string;
  variant?: "corner" | "divider" | "frame";
};

export function ChineseOrnament({
  className,
  variant = "divider",
}: ChineseOrnamentProps) {
  if (variant === "divider") {
    return (
      <div className={cn("flex items-center justify-center gap-4", className)}>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-primary/60" />
        <YinYang className="h-6 w-6 text-primary/60" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent via-primary/40 to-primary/60" />
      </div>
    );
  }

  if (variant === "corner") {
    return (
      <svg
        viewBox="0 0 60 60"
        className={cn("h-12 w-12 text-primary/20", className)}
      >
        <path
          d="M5 5 L5 25 M5 5 L25 5 M15 5 L15 15 L5 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <circle cx="30" cy="30" r="3" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "frame") {
    return (
      <svg
        viewBox="0 0 100 20"
        className={cn("h-5 w-full text-primary/30", className)}
      >
        <pattern
          id="chinese-pattern"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
        >
          <path
            d="M0 10 L5 5 L10 10 L5 15 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100" height="20" fill="url(#chinese-pattern)" />
      </svg>
    );
  }

  return null;
}


