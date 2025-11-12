import { PostModal } from "@/components/blog/PostModal";
import { getPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  
  // Debug logging
  console.log('PostPage - slug:', slug);
  
  const post = getPostBySlug(slug);
  
  console.log('PostPage - post found:', !!post);

  if (!post) {
    console.log('PostPage - post not found, calling notFound()');
    notFound();
  }

  return <PostModal post={post} />;
}

