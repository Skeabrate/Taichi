import { BlogPageClient } from "@/components/blog/BlogPageClient";
import { getPaginatedPosts, mapToBlogPostListItem } from "@/lib/blog-data";

export default async function BlogPage() {
  const { posts, totalPages } = await getPaginatedPosts(1);

  const listItems = posts.map(mapToBlogPostListItem);

  return (
    <main className="bg-background min-h-screen">
      <BlogPageClient
        posts={listItems}
        totalPages={totalPages}
        currentPage={1}
      />
    </main>
  );
}
