import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
  href: string;
} & Pick<VariantProps<typeof buttonVariants>, "size"> &
  Omit<React.ComponentProps<typeof Link>, "href">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  href,
  children,
  ...props
}: PaginationLinkProps) => {
  if (!href) {
    return null;
  }

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  href,
  children,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  if (!href) {
    return null;
  }

  return (
    <Link
      href={href}
      aria-label="Go to previous page"
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "default",
        }),
        "gap-1 pl-2.5",
        className,
      )}
      {...props}
    >
      {children || (
        <>
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </>
      )}
    </Link>
  );
};
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  href,
  children,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  if (!href) {
    return null;
  }

  return (
    <Link
      href={href}
      aria-label="Go to next page"
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "default",
        }),
        "gap-1 pr-2.5",
        className,
      )}
      {...props}
    >
      {children || (
        <>
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </>
      )}
    </Link>
  );
};
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-end justify-center pb-1", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
