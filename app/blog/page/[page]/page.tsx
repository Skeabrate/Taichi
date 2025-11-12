import { BlogHeading } from "@/components/blog/BlogHeading";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { Pagination } from "@/components/blog/Pagination";
import { getPaginatedPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{ page: string }>;
}

export default async function BlogPageNumber({ params }: BlogPageProps) {
  const { page } = await params;
  const pageNumber = parseInt(page, 10);

  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound();
  }

  const { posts, totalPages } = getPaginatedPosts(pageNumber);

  if (posts.length === 0 || pageNumber > totalPages) {
    notFound();
  }

  return (
    <main>
      <BlogHeading />
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} currentPage={pageNumber} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination currentPage={pageNumber} totalPages={totalPages} />
          )}
        </div>
      </section>
    </main>
  );
}

