import { TableOfContents } from "@/components/blog/TableOfContents";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog-data";
import { extractHeadings } from "@/lib/blog-utils";
import { NEXT_PUBLIC_SITE_URL } from "@/lib/envs";
import { RichTextRenderer } from "@/lib/rich-text-renderer";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
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

  const siteUrl = NEXT_PUBLIC_SITE_URL || "https://taichi-world.pl";

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
      publishedTime: post.createDate,
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

  // Extract headings for table of contents
  const headings = post.content ? extractHeadings(post.content) : [];

  // Build share URL
  const siteUrl = NEXT_PUBLIC_SITE_URL || "https://taichi-world.pl";
  const shareUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <main className="bg-background min-h-screen">
      <article className="bg-background relative pt-32 pb-24 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Hero image - with decoration matching O MNIE section */}
          <div className="relative mb-8">
            <div className="from-primary/10 absolute -inset-4 rounded-lg bg-gradient-to-br to-transparent" />
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={1200}
                height={600}
                className="h-[300px] w-full object-cover md:h-[400px] lg:h-[500px]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
              {/* Red accent border */}
              <div className="bg-primary absolute right-0 bottom-0 left-0 h-1" />
              <div className="from-foreground/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
            </div>
            {/* Decorative frame corner */}
            <div className="border-primary/30 absolute -right-4 -bottom-4 h-24 w-24 border-r-2 border-b-2" />
          </div>

          {/* Back to blog link */}
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-primary group mb-8 inline-flex cursor-pointer items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Powrót do bloga</span>
          </Link>

          {/* Post header */}
          <div className="mb-6 sm:mb-12">
            <time className="text-muted-foreground mb-4 block text-sm">
              {formatDate(post.createDate)}
            </time>
            <h1 className="text-foreground font-heading mb-4 text-4xl font-normal tracking-wide sm:text-5xl">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-muted-foreground text-xl leading-relaxed">
                {post.description}
              </p>
            )}
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            {/* Main content */}
            <div className="prose prose-lg prose-headings:font-heading prose-headings:font-normal prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:scroll-mt-24 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-img:rounded-lg prose-img:shadow-lg max-w-none">
              {post.content && (
                <RichTextRenderer
                  document={post.content}
                  links={post.contentLinks}
                  blogPostStyle={true}
                />
              )}
            </div>

            {/* Sidebar with TOC and share */}
            {headings.length > 0 && (
              <aside className="sticky top-24 hidden self-start lg:block">
                <TableOfContents
                  headings={headings}
                  shareUrl={shareUrl}
                  shareTitle={post.title}
                />
              </aside>
            )}
          </div>

          {/* Back to all posts */}
          <div className="border-border mt-16 border-t pt-8">
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary group inline-flex cursor-pointer items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Powrót do wszystkich wpisów</span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
