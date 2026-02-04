import { BlogPageClient } from "@/components/blog/BlogPageClient";
import { getPaginatedPosts, mapToBlogPostListItem } from "@/lib/blog-data";

interface BlogPageProps {
  params: Promise<{ pageNumber: string }>;
}

export default async function BlogPageNumber({ params }: BlogPageProps) {
  const { pageNumber } = await params;
  const page = parseInt(pageNumber, 10) || 1;

  const { posts, totalPages } = await getPaginatedPosts(page);

  const listItems = posts.map(mapToBlogPostListItem);

  return (
    <BlogPageClient
      posts={listItems}
      totalPages={totalPages}
      currentPage={page}
    />
  );
}
