import { BlogPageClient } from "@/components/blog/BlogPageClient";
import { getPaginatedPosts, mapToBlogPostListItem } from "@/lib/blog-data";
import { fetchBlogData } from "@/lib/contentful";

export default async function BlogPage() {
  const [{ posts, totalPages }, blogData] = await Promise.all([
    getPaginatedPosts(1),
    fetchBlogData(),
  ]);

  const listItems = posts.map(mapToBlogPostListItem);

  return (
    <main className="bg-background min-h-screen">
      <BlogPageClient
        posts={listItems}
        totalPages={totalPages}
        currentPage={1}
        blogData={blogData}
      />
    </main>
  );
}
