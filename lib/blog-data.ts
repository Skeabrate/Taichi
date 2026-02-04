import {
  fetchBlogPostBySlug,
  fetchBlogPosts,
  fetchBlogPostSitemapEntries,
  fetchBlogPostSlugs,
  type BlogPostData,
} from "./hygraph/api";
import { fetchAllInBatches } from "./utils";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: any; // Hygraph raw JSON
  thumbnail: string;
  createDate: string;
}

// Lightweight version for list views (without content for better serialization)
export interface BlogPostListItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  createDate: string;
}

function mapHygraphPostToBlogPost(post: BlogPostData): BlogPost {
  return {
    id: post.id,
    slug: post.slug ?? "",
    title: post.title ?? "",
    description: post.excerpt ?? "",
    content: post.content?.raw ?? null,
    thumbnail: post.thumbnail?.url ?? "",
    createDate:
      post.createDate && typeof post.createDate === "string"
        ? new Date(post.createDate).toISOString().split("T")[0]
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
    createDate: post.createDate,
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

  const posts = result.posts.map(mapHygraphPostToBlogPost);
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

  return mapHygraphPostToBlogPost(post);
}

export async function getAllPostSlugs(): Promise<string[]> {
  return fetchAllInBatches(fetchBlogPostSlugs);
}

export async function getAllPostSitemapEntries(): Promise<
  Array<{ slug: string; publishedAt: string }>
> {
  return fetchAllInBatches(fetchBlogPostSitemapEntries);
}
