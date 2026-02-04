import { ResultOf } from "gql.tada";
import { createGQLClient } from "./client";
import {
  GetMainPage,
  GetBlogPosts,
  GetBlogPostBySlug,
  GetBlogPostSlugs,
  GetBlogPostsCount,
  GetBlogPostSitemapEntries,
} from "./queries";

export type MainPageData = NonNullable<
  ResultOf<typeof GetMainPage>["mainPage"]
>;

export type BlogPostData = NonNullable<
  ResultOf<typeof GetBlogPostBySlug>["blogPost"]
>;

export async function fetchMainPageData(): Promise<MainPageData | null> {
  const client = await createGQLClient("main-page");
  const data = await client.request(GetMainPage);
  return data.mainPage ?? null;
}

export async function fetchBlogPostsCount(): Promise<number> {
  const client = await createGQLClient("blog-posts");
  const data = await client.request(GetBlogPostsCount);
  return data.blogPostsConnection?.aggregate?.count ?? 0;
}

export async function fetchBlogPosts(
  limit: number = 100,
  skip: number = 0,
): Promise<{ posts: any[]; total: number }> {
  const client = await createGQLClient("blog-posts");
  const data = await client.request(GetBlogPosts, {
    limit,
    skip,
  });

  return {
    posts: data.blogPosts ?? [],
    total: data.blogPostsConnection?.aggregate?.count ?? 0,
  };
}

export async function fetchBlogPostBySlug(
  slug: string,
): Promise<BlogPostData | null> {
  const client = await createGQLClient(["blog-post", slug]);
  const data = await client.request(GetBlogPostBySlug, { slug });
  return data.blogPost ?? null;
}

export async function fetchBlogPostSlugs(
  limit: number = 100,
  skip: number = 0,
): Promise<string[]> {
  const client = await createGQLClient("blog-slugs", true);
  const data = await client.request(GetBlogPostSlugs, { limit, skip });
  return data.blogPosts?.map((post) => post.slug).filter(Boolean) ?? [];
}

export interface BlogPostSitemapEntry {
  slug: string;
  publishedAt: string;
}

export async function fetchBlogPostSitemapEntries(
  limit: number = 100,
  skip: number = 0,
): Promise<BlogPostSitemapEntry[]> {
  const client = await createGQLClient("blog-sitemap", true);
  const data = await client.request(GetBlogPostSitemapEntries, { limit, skip });
  return (
    data.blogPosts
      ?.map((post) => ({
        slug: post.slug,
        publishedAt: post.publishedAt || new Date().toISOString(),
      }))
      .filter((entry): entry is BlogPostSitemapEntry => Boolean(entry.slug)) ??
    []
  );
}
