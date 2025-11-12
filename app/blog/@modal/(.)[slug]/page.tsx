import { PostModal } from "@/components/blog/PostModal";
import { getPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

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

  // Debug logging
  console.log("PostModalPage (intercepting) - slug:", slug);

  const post = getPostBySlug(slug);

  console.log("PostModalPage (intercepting) - post found:", !!post);

  if (!post) {
    console.log(
      "PostModalPage (intercepting) - post not found, calling notFound()",
    );
    notFound();
  }

  const pageNumber = page ? parseInt(page, 10) : undefined;

  return <PostModal post={post} currentPage={pageNumber} />;
}
