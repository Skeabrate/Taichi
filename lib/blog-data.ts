import {
  fetchBlogPosts,
  fetchBlogPostBySlug,
  fetchBlogPostSlugs,
  type GetBlogPostsQuery,
  type GetBlogPostBySlugQuery,
} from "./contentful";
import type { Document } from "@contentful/rich-text-types";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: Document | null;
  contentLinks?: {
    assets?: {
      block?: Array<{
        sys: { id: string };
        url?: string | null;
        title?: string | null;
        description?: string | null;
        contentType?: string | null;
        width?: number | null;
        height?: number | null;
      } | null>;
    };
  };
  thumbnail: string;
  createdAt: string;
}

// Lightweight version for list views (without content for better serialization)
export interface BlogPostListItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
}

type BlogPostItem = NonNullable<
  NonNullable<GetBlogPostsQuery["blogPostCollection"]>["items"][0]
>;

type BlogPostBySlugItem = NonNullable<
  NonNullable<GetBlogPostBySlugQuery["blogPostCollection"]>["items"][0]
>;

function mapContentfulPostToBlogPost(
  post: BlogPostItem | BlogPostBySlugItem,
): BlogPost {
  const thumbnailUrl = post.thumbnail?.url ?? "";

  return {
    id: post.sys.id,
    slug: post.slug ?? "",
    title: post.title ?? "",
    description: post.excerpt ?? "",
    content: (post.content?.json as Document) ?? null,
    contentLinks: post.content?.links
      ? {
          assets: {
            block: post.content.links.assets?.block?.map((asset) => ({
              sys: { id: asset?.sys?.id ?? "" },
              url: asset?.url ?? null,
              title: asset?.title ?? null,
              description: asset?.description ?? null,
              contentType: asset?.contentType ?? null,
              width: asset?.width ?? null,
              height: asset?.height ?? null,
            })),
          },
        }
      : undefined,
    thumbnail: thumbnailUrl,
    createdAt: post.sys.publishedAt
      ? new Date(post.sys.publishedAt).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
  };
}

export const POSTS_PER_PAGE = 9;

export function mapToBlogPostListItem(post: BlogPost): BlogPostListItem {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    thumbnail: post.thumbnail,
    createdAt: post.createdAt,
  };
}

export async function getPaginatedPosts(page: number): Promise<{
  posts: BlogPost[];
  totalPages: number;
}> {
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const result = await fetchBlogPosts(POSTS_PER_PAGE, startIndex);

  if (!result) {
    return { posts: [], totalPages: 0 };
  }

  const posts = result.posts.map(mapContentfulPostToBlogPost);
  const totalPages = Math.ceil(result.total / POSTS_PER_PAGE);

  return { posts, totalPages };
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    return undefined;
  }

  return mapContentfulPostToBlogPost(post);
}

export async function getAllPostSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  let skip = 0;
  const limit = 1000;
  let hasMore = true;

  while (hasMore) {
    const batchSlugs = await fetchBlogPostSlugs(limit, skip);

    if (batchSlugs.length === 0) {
      hasMore = false;
      break;
    }

    slugs.push(...batchSlugs);

    if (batchSlugs.length < limit) {
      hasMore = false;
    } else {
      skip += limit;
    }
  }

  return slugs;
}
