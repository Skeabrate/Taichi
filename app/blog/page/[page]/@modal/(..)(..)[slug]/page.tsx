import { PostModal } from "@/components/blog/PostModal";
import { getPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";

interface PostModalPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function PostModalPage({
  params,
  searchParams,
}: PostModalPageProps) {
  const { slug } = await params;
  const { page } = await searchParams;
  const post = getPostBySlug(slug);
  
  // Get page from search params (passed from BlogPostCard)
  const pageNumber = page ? parseInt(page, 10) : undefined;

  if (!post) {
    notFound();
  }

  return <PostModal post={post} currentPage={pageNumber} />;
}

