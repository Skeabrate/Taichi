import { BlogHeading } from "@/components/blog/BlogHeading";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { Pagination } from "@/components/blog/Pagination";
import { getPaginatedPosts } from "@/lib/blog-data";

export default function BlogPage() {
  const { posts, totalPages } = getPaginatedPosts(1);

  return (
    <main>
      <BlogHeading />
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination currentPage={1} totalPages={totalPages} />
          )}
        </div>
      </section>
    </main>
  );
}
