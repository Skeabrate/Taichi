import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const getPageHref = (page: number) => {
    if (page === 1) return "/blog";
    return `/blog/page/${page}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2 py-8">
      {currentPage > 1 && (
        <Link
          href={getPageHref(currentPage - 1)}
          className="rounded-lg border-2 border-gray-300 px-4 py-2 font-semibold text-gray-700 transition-colors hover:border-red-700 hover:text-red-700"
        >
          Poprzednia
        </Link>
      )}

      <div className="flex gap-2">
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <Link
              key={page}
              href={getPageHref(page)}
              className={`rounded-lg border-2 px-4 py-2 font-semibold transition-colors ${
                isActive
                  ? "border-red-700 bg-red-700 text-white"
                  : "border-gray-300 text-gray-700 hover:border-red-700 hover:text-red-700"
              }`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {currentPage < totalPages && (
        <Link
          href={getPageHref(currentPage + 1)}
          className="rounded-lg border-2 border-gray-300 px-4 py-2 font-semibold text-gray-700 transition-colors hover:border-red-700 hover:text-red-700"
        >
          Następna
        </Link>
      )}
    </nav>
  );
}

