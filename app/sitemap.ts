import { MetadataRoute } from "next";
import { getAllPostSitemapEntries, POSTS_PER_PAGE } from "@/lib/blog-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://taichi-world.pl";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // Dynamic blog post routes
  const blogPosts = await getAllPostSitemapEntries();
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog pagination routes
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const paginationRoutes: MetadataRoute.Sitemap = [];

  for (let page = 2; page <= totalPages; page++) {
    paginationRoutes.push({
      url: `${baseUrl}/blog/page/${page}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.5,
    });
  }

  return [...staticRoutes, ...blogRoutes, ...paginationRoutes];
}
