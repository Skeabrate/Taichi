import { print } from "graphql";
import {
  GetBlog,
  GetBlogPostBySlug,
  GetBlogPostBySlugQuery,
  GetBlogPostBySlugQueryVariables,
  GetBlogPosts,
  GetBlogPostsCount,
  GetBlogPostsCountQuery,
  GetBlogPostSitemapEntries,
  GetBlogPostSitemapEntriesQuery,
  GetBlogPostSitemapEntriesQueryVariables,
  GetBlogPostSlugs,
  GetBlogPostSlugsQuery,
  GetBlogPostSlugsQueryVariables,
  GetBlogPostsQuery,
  GetBlogPostsQueryVariables,
  GetBlogQuery,
  GetMainPage,
  GetMainPageQuery,
} from "./generated/graphql";
import { fetchContentfulGraphQL } from "./utils";

export type MainPageData = NonNullable<
  NonNullable<GetMainPageQuery["mainPageCollection"]>["items"][0]
>;

export type BlogData = NonNullable<
  NonNullable<GetBlogQuery["blogCollection"]>["items"][0]
>;

export async function fetchMainPageData(): Promise<MainPageData | null> {
  const queryString = print(GetMainPage);
  const { data } = await fetchContentfulGraphQL<GetMainPageQuery>(
    queryString,
    {},
    { revalidate: false },
  );

  if (!data) {
    return null;
  }

  return data.mainPageCollection?.items?.[0] ?? null;
}

export async function fetchBlogData(): Promise<BlogData | null> {
  const queryString = print(GetBlog);
  const { data } = await fetchContentfulGraphQL<GetBlogQuery>(
    queryString,
    {},
    { revalidate: false },
  );

  if (!data) {
    return null;
  }

  return data.blogCollection?.items?.[0] ?? null;
}

export async function fetchBlogPostsCount(): Promise<number | null> {
  const queryString = print(GetBlogPostsCount);
  const { data } = await fetchContentfulGraphQL<GetBlogPostsCountQuery>(
    queryString,
    undefined,
    { revalidate: false },
  );

  return data?.blogPostCollection?.total ?? null;
}

export async function fetchBlogPosts(
  limit?: number,
  skip?: number,
): Promise<{
  posts: NonNullable<
    NonNullable<GetBlogPostsQuery["blogPostCollection"]>["items"][0]
  >[];
  total: number;
} | null> {
  const queryString = print(GetBlogPosts);
  const variables: GetBlogPostsQueryVariables = {
    limit: limit ?? 100,
    skip: skip ?? 0,
    order: ["createDate_DESC"],
  };

  const { data } = await fetchContentfulGraphQL<GetBlogPostsQuery>(
    queryString,
    variables,
  );

  if (!data?.blogPostCollection) {
    return null;
  }

  const filteredPosts = data.blogPostCollection.items.filter(
    Boolean,
  ) as NonNullable<
    NonNullable<GetBlogPostsQuery["blogPostCollection"]>["items"][0]
  >[];

  return {
    posts: filteredPosts,
    total: data.blogPostCollection.total,
  };
}

export async function fetchBlogPostSlugs(
  limit: number = 100,
  skip: number = 0,
): Promise<string[]> {
  const queryString = print(GetBlogPostSlugs);
  const variables: GetBlogPostSlugsQueryVariables = { limit, skip };

  const { data } = await fetchContentfulGraphQL<GetBlogPostSlugsQuery>(
    queryString,
    variables,
  );

  const items = data?.blogPostCollection?.items ?? [];
  return items
    .map((item) => item?.slug)
    .filter((slug): slug is string => Boolean(slug));
}

export interface BlogPostSitemapEntry {
  slug: string;
  publishedAt: string;
}

export async function fetchBlogPostSitemapEntries(
  limit: number = 100,
  skip: number = 0,
): Promise<BlogPostSitemapEntry[]> {
  const queryString = print(GetBlogPostSitemapEntries);
  const variables: GetBlogPostSitemapEntriesQueryVariables = { limit, skip };

  const { data } = await fetchContentfulGraphQL<GetBlogPostSitemapEntriesQuery>(
    queryString,
    variables,
  );

  const items = data?.blogPostCollection?.items ?? [];
  return items
    .map((item) => ({
      slug: item?.slug,
      publishedAt: item?.sys?.publishedAt || new Date().toISOString(),
    }))
    .filter((entry): entry is BlogPostSitemapEntry => Boolean(entry.slug));
}

export async function fetchBlogPostBySlug(
  slug: string,
): Promise<NonNullable<
  NonNullable<GetBlogPostBySlugQuery["blogPostCollection"]>["items"][0]
> | null> {
  const queryString = print(GetBlogPostBySlug);
  const variables: GetBlogPostBySlugQueryVariables = { slug };

  const { data } = await fetchContentfulGraphQL<GetBlogPostBySlugQuery>(
    queryString,
    variables,
    { revalidate: false },
  );

  return data?.blogPostCollection?.items?.[0] ?? null;
}
