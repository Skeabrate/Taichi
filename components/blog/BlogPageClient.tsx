import { BlogHeading } from "./BlogHeading";
import { BlogPostCard } from "./BlogPostCard";
import { Pagination } from "./Pagination";
import type { BlogData } from "@/lib/contentful";
import type { BlogPostListItem } from "@/lib/blog-data";

interface BlogPageClientProps {
  posts: BlogPostListItem[];
  totalPages: number;
  currentPage: number;
  blogData: BlogData | null;
}

export function BlogPageClient({
  posts,
  totalPages,
  currentPage,
  blogData,
}: BlogPageClientProps) {
  return (
    <main>
      <BlogHeading blogData={blogData} />
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {posts.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              Brak dostępnych wpisów. Tutaj niedługo pojawią się nowe artykuły.
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} />
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
