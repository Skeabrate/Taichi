import { cn } from "@/lib/utils";

type YinYangProps = {
  className?: string;
  withDots?: boolean;
};

export function YinYang({ className, withDots = false }: YinYangProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-10 w-10", className)}
      fill="currentColor"
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2"
        fill="white"
      />
      {withDots && (
        <>
          <circle cx="50" cy="26" r="4" fill="white" />
          <circle cx="50" cy="74" r="4" fill="#666666" />
        </>
      )}
    </svg>
  );
}
