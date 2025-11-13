import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog-data";
import { RichTextRenderer } from "@/lib/rich-text-renderer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post nie znaleziony",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://taichi-world.pl";

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.thumbnail,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.createdAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.thumbnail],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="blog-post min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Image Section */}
      <header className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 to-black/20" />
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-white/20 bg-white/90 shadow-lg backdrop-blur-sm hover:border-white/40 hover:bg-red-800 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Powrót do bloga
            </Button>
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute right-0 bottom-0 left-0 z-20 p-8 md:p-12 lg:p-16">
          <div className="mx-auto max-w-4xl">
            <time className="mb-3 block text-sm font-medium text-white/90">
              {formatDate(post.createdAt)}
            </time>
            <h1 className="mb-4 text-4xl leading-tight font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-xl leading-relaxed text-white/95 drop-shadow-md md:text-2xl">
                {post.description}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-4 pb-12 md:pb-16 lg:pb-20">
        {post.content && (
          <div className="prose prose-lg prose-red max-w-none">
            <RichTextRenderer
              document={post.content}
              links={post.contentLinks}
              className="prose-headings:font-bold prose-headings:text-gray-900 prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8 prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-8 prose-h2:text-red-800 prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-6 prose-h3:text-red-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-a:text-red-800 prose-a:no-underline prose-a:font-semibold hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-bold prose-ul:my-6 prose-ol:my-6 prose-li:text-gray-700 prose-li:text-lg prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:max-h-[500px] prose-img:w-auto prose-img:object-contain prose-blockquote:border-l-4 prose-blockquote:border-red-800 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600"
            />
          </div>
        )}

        {/* Back to Blog Button */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-red-800 text-red-800 transition-colors hover:bg-red-800 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Powrót do wszystkich wpisów
            </Button>
          </Link>
        </div>
      </section>
    </article>
  );
}
