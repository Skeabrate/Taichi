import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

interface BlogPostCardProps {
  post: BlogPost;
  currentPage?: number;
}

export function BlogPostCard({ post, currentPage }: BlogPostCardProps) {
  // For intercepting routes, link to /blog/[slug] with page context in search params if needed
  const href = currentPage
    ? `/blog/${post.slug}?page=${currentPage}`
    : `/blog/${post.slug}`;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link href={href} className="group">
      <article className="h-full overflow-hidden rounded-3xl border-2 border-gray-200 bg-white transition-all hover:border-red-700 hover:shadow-lg">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <time className="text-sm text-gray-500">{formatDate(post.createdAt)}</time>
          <h3 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
            {post.title}
          </h3>
          <p className="mt-3 text-gray-600 line-clamp-3">{post.description}</p>
        </div>
      </article>
    </Link>
  );
}

