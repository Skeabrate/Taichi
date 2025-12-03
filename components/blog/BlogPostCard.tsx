import Image from "next/image";
import Link from "next/link";
import type { BlogPostListItem } from "@/lib/blog-data";

type BlogPostCardProps = {
  post: BlogPostListItem;
};

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
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-background border-border hover:border-primary/50 block cursor-pointer overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-xl"
    >
      <article>
        <div className="bg-muted relative aspect-video overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
          {/* Red inset shadow on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_30px_rgba(196,30,58,0.4)] transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-6">
          <time className="text-muted-foreground mb-3 block text-sm">
            {formatDate(post.createDate)}
          </time>
          <h3 className="text-foreground group-hover:text-primary font-heading mb-3 text-2xl font-normal transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
