import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const getPageHref = (page: number) => {
    if (page === 1) return "/blog";
    return `/blog/page/${page}`;
  };

  const getPageNumbers = (): (number | "ellipsis")[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | "ellipsis")[] = [];

    pages.push(1);

    if (currentPage <= 4) {
      for (let i = 2; i <= 5; i++) {
        pages.push(i);
      }
      pages.push("ellipsis");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push("ellipsis");
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push("ellipsis");
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push("ellipsis");
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <PaginationRoot className="py-8">
      <div className="flex flex-col items-center gap-4 md:block">
        <PaginationContent className="flex-wrap justify-center">
          {currentPage > 1 && (
            <PaginationItem className="hidden md:block">
              <PaginationPrevious
                href={getPageHref(currentPage - 1)}
                className="border-border text-muted-foreground hover:border-primary/50 hover:text-primary gap-1 border transition-colors"
                size="default"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Poprzednia</span>
              </PaginationPrevious>
            </PaginationItem>
          )}

          {pageNumbers.map((page, index) => {
            if (page === "ellipsis") {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis className="text-muted-foreground h-8 w-8" />
                </PaginationItem>
              );
            }

            const isActive = page === currentPage;
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href={getPageHref(page)}
                  isActive={isActive}
                  size="icon"
                  className={cn(
                    "border-border text-muted-foreground hover:border-primary/50 hover:text-primary h-8 w-8 border text-sm transition-colors",
                    isActive &&
                      "border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
                  )}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {currentPage < totalPages && (
            <PaginationItem className="hidden md:block">
              <PaginationNext
                href={getPageHref(currentPage + 1)}
                className="border-border text-muted-foreground hover:border-primary/50 hover:text-primary gap-1 border transition-colors"
                size="default"
              >
                <span>Następna</span>
                <ChevronRight className="h-4 w-4" />
              </PaginationNext>
            </PaginationItem>
          )}
        </PaginationContent>

        {/* Mobile navigation buttons */}
        <div className="flex gap-2 md:hidden">
          {currentPage > 1 && (
            <PaginationPrevious
              href={getPageHref(currentPage - 1)}
              className="border-border text-muted-foreground hover:border-primary/50 hover:text-primary gap-1 border transition-colors"
              size="default"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Poprzednia</span>
            </PaginationPrevious>
          )}
          {currentPage < totalPages && (
            <PaginationNext
              href={getPageHref(currentPage + 1)}
              className="border-border text-muted-foreground hover:border-primary/50 hover:text-primary gap-1 border transition-colors"
              size="default"
            >
              <span>Następna</span>
              <ChevronRight className="h-4 w-4" />
            </PaginationNext>
          )}
        </div>
      </div>
    </PaginationRoot>
  );
}
