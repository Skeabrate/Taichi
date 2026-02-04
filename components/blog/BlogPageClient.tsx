import { BlogHeading } from "./BlogHeading";
import { BlogPostCard } from "./BlogPostCard";
import { Pagination } from "./Pagination";
import type { BlogPostListItem } from "@/lib/blog-data";

interface BlogPageClientProps {
  posts: BlogPostListItem[];
  totalPages: number;
  currentPage: number;
}

export function BlogPageClient({
  posts,
  totalPages,
  currentPage,
}: BlogPageClientProps) {
  return (
    <>
      <BlogHeading />

      <section className="bg-background relative overflow-hidden pt-8 pb-24 lg:pb-32">
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-muted-foreground py-12 text-center">
              Brak dostępnych wpisów. Tutaj niedługo pojawią się nowe artykuły.
            </div>
          ) : (
            <>
              {/* Blog posts grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-12">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
