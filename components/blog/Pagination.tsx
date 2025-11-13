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

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const getPageHref = (page: number) => {
    if (page === 1) return "/blog";
    return `/blog/page/${page}`;
  };

  const getPageNumbers = (): (number | "ellipsis")[] => {
    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | "ellipsis")[] = [];

    // Always show first page
    pages.push(1);

    if (currentPage <= 4) {
      // Near the beginning: 1 2 3 4 5 ... last
      for (let i = 2; i <= 5; i++) {
        pages.push(i);
      }
      pages.push("ellipsis");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      // Near the end: 1 ... (last-4) (last-3) (last-2) (last-1) last
      pages.push("ellipsis");
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // In the middle: 1 ... (current-1) current (current+1) ... last
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
                className="gap-1"
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
                  <PaginationEllipsis className="h-8 w-8" />
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
                    "h-8 w-8 text-sm",
                    isActive &&
                      "border-2 border-red-800 bg-red-800 text-white hover:bg-red-900 hover:text-white",
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
                className="gap-1"
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
              className="gap-1"
              size="default"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Poprzednia</span>
            </PaginationPrevious>
          )}
          {currentPage < totalPages && (
            <PaginationNext
              href={getPageHref(currentPage + 1)}
              className="gap-1"
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
