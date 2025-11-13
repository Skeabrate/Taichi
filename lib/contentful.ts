import { print } from "graphql";
import {
  GetMainPage,
  GetMainPageQuery,
  GetMainPageQueryVariables,
  GetBlog,
  GetBlogQuery,
  GetBlogQueryVariables,
  GetBlogPosts,
  GetBlogPostsQuery,
  GetBlogPostsQueryVariables,
  GetBlogPostBySlug,
  GetBlogPostBySlugQuery,
  GetBlogPostBySlugQueryVariables,
} from "./generated/graphql";
import gql from "graphql-tag";

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || "master";
const CONTENTFUL_GRAPHQL_ENDPOINT =
  CONTENTFUL_SPACE_ID && CONTENTFUL_ENVIRONMENT
    ? `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`
    : "";

export type {
  GetMainPageQuery,
  GetMainPageQueryVariables,
  GetBlogQuery,
  GetBlogQueryVariables,
  GetBlogPostsQuery,
  GetBlogPostsQueryVariables,
  GetBlogPostBySlugQuery,
  GetBlogPostBySlugQueryVariables,
} from "./generated/graphql";

export type MainPageData = NonNullable<
  NonNullable<GetMainPageQuery["mainPageCollection"]>["items"][0]
>;

export type BlogData = NonNullable<
  NonNullable<GetBlogQuery["blogCollection"]>["items"][0]
>;

export async function fetchMainPageData(): Promise<MainPageData | null> {
  try {
    const queryString = print(GetMainPage);
    const variables: GetMainPageQueryVariables = {};

    const response = await fetch(CONTENTFUL_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: queryString,
        variables,
      }),
      cache: "force-cache",
      next: { revalidate: false },
    });

    const data = (await response.json()) as {
      data?: GetMainPageQuery;
      errors?: Array<{ message: string }>;
    };

    if (!response.ok) {
      const errorMessage = data.errors
        ? JSON.stringify(data.errors, null, 2)
        : response.statusText;
      throw new Error(`Contentful API error: ${errorMessage}`);
    }

    if (data.errors) {
      return null;
    }

    const mainPageItem = data.data?.mainPageCollection?.items?.[0];
    if (!mainPageItem) {
      return null;
    }

    return mainPageItem;
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return null;
  }
}

export async function fetchBlogData(): Promise<BlogData | null> {
  try {
    const queryString = print(GetBlog);
    const variables: GetBlogQueryVariables = {};

    const response = await fetch(CONTENTFUL_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: queryString,
        variables,
      }),
      cache: "force-cache",
      next: { revalidate: false },
    });

    const data = (await response.json()) as {
      data?: GetBlogQuery;
      errors?: Array<{ message: string }>;
    };

    if (!response.ok) {
      const errorMessage = data.errors
        ? JSON.stringify(data.errors, null, 2)
        : response.statusText;
      throw new Error(`Contentful API error: ${errorMessage}`);
    }

    if (data.errors) {
      return null;
    }

    const blogItem = data.data?.blogCollection?.items?.[0];
    if (!blogItem) {
      return null;
    }

    return blogItem;
  } catch (error) {
    console.error("Error fetching Contentful blog data:", error);
    return null;
  }
}

const GetBlogPostsCount = gql`
  query GetBlogPostsCount {
    blogPostCollection {
      total
    }
  }
`;

export async function fetchBlogPostsCount(): Promise<number | null> {
  try {
    const queryString = print(GetBlogPostsCount);

    const response = await fetch(CONTENTFUL_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: queryString,
      }),
      cache: "force-cache",
      next: { revalidate: false },
    });

    const data = (await response.json()) as {
      data?: { blogPostCollection?: { total: number } };
      errors?: Array<{ message: string }>;
    };

    if (!response.ok || data.errors) {
      return null;
    }

    return data.data?.blogPostCollection?.total ?? null;
  } catch (error) {
    console.error("Error fetching blog posts count:", error);
    return null;
  }
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
  try {
    const queryString = print(GetBlogPosts);
    const variables: GetBlogPostsQueryVariables = {
      limit: limit ?? 100,
      skip: skip ?? 0,
      order: ["createDate_DESC"],
    };

    const response = await fetch(CONTENTFUL_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: queryString,
        variables,
      }),
      cache: "force-cache",
    });

    const data = (await response.json()) as {
      data?: GetBlogPostsQuery;
      errors?: Array<{ message: string }>;
    };

    if (!response.ok) {
      const errorMessage = data.errors
        ? JSON.stringify(data.errors, null, 2)
        : response.statusText;
      throw new Error(`Contentful API error: ${errorMessage}`);
    }

    if (data.errors) {
      return null;
    }

    const collection = data.data?.blogPostCollection;
    if (!collection) {
      return null;
    }

    const filteredPosts = collection.items.filter(Boolean) as NonNullable<
      NonNullable<GetBlogPostsQuery["blogPostCollection"]>["items"][0]
    >[];

    return {
      posts: filteredPosts,
      total: collection.total,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return null;
  }
}

export async function fetchBlogPostBySlug(
  slug: string,
): Promise<NonNullable<
  NonNullable<GetBlogPostBySlugQuery["blogPostCollection"]>["items"][0]
> | null> {
  try {
    const queryString = print(GetBlogPostBySlug);
    const variables: GetBlogPostBySlugQueryVariables = { slug };

    const response = await fetch(CONTENTFUL_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: queryString,
        variables,
      }),
      cache: "force-cache",
      next: { revalidate: false },
    });

    const data = (await response.json()) as {
      data?: GetBlogPostBySlugQuery;
      errors?: Array<{ message: string }>;
    };

    if (!response.ok) {
      const errorMessage = data.errors
        ? JSON.stringify(data.errors, null, 2)
        : response.statusText;
      throw new Error(`Contentful API error: ${errorMessage}`);
    }

    if (data.errors) {
      return null;
    }

    const post = data.data?.blogPostCollection?.items?.[0];
    if (!post) {
      return null;
    }

    return post;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return null;
  }
}
