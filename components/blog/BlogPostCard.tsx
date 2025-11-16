import Image from "next/image";
import Link from "next/link";
import type { BlogPostListItem } from "@/lib/blog-data";

interface BlogPostCardProps {
  post: BlogPostListItem;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link href={`/blog/${post.slug}`} className="group w-full text-left">
      <article className="h-full overflow-hidden rounded-3xl border-2 border-gray-200 bg-white transition-all hover:border-red-800 hover:shadow-lg">
        <div className="relative h-[300px] w-full overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-0" />
        </div>
        <div className="p-6">
          <time className="text-sm text-gray-500">
            {formatDate(post.createDate)}
          </time>
          <h3 className="mt-2 text-2xl font-bold text-gray-900 transition-colors group-hover:text-red-800">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-gray-600">{post.description}</p>
        </div>
      </article>
    </Link>
  );
}
