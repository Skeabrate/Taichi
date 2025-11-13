import { BlogPageClient } from "@/components/blog/BlogPageClient";
import { getPaginatedPosts, mapToBlogPostListItem } from "@/lib/blog-data";
import { fetchBlogData } from "@/lib/contentful";

interface BlogPageProps {
  params: Promise<{ pageNumber: string }>;
}

export default async function BlogPageNumber({ params }: BlogPageProps) {
  const { pageNumber } = await params;
  const page = parseInt(pageNumber, 10) || 1;

  const [{ posts, totalPages }, blogData] = await Promise.all([
    getPaginatedPosts(page),
    fetchBlogData(),
  ]);

  const listItems = posts.map(mapToBlogPostListItem);

  return (
    <BlogPageClient
      posts={listItems}
      totalPages={totalPages}
      currentPage={page}
      blogData={blogData}
    />
  );
}
