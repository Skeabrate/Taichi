import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CONTENTFUL_GRAPHQL_ENDPOINT, CONTENTFUL_ACCESS_TOKEN } from "./envs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BATCH_SIZE = 100;

/**
 * Generic utility function to fetch all items in batches with pagination
 * @param fetcher Function that takes limit and skip, returns Promise of array
 * @returns Promise of all items aggregated from all batches
 */
export async function fetchAllInBatches<T>(
  fetcher: (limit: number, skip: number) => Promise<T[]>,
): Promise<T[]> {
  const items: T[] = [];
  let skip = 0;
  let hasMore = true;

  while (hasMore) {
    const batch = await fetcher(BATCH_SIZE, skip);

    if (batch.length === 0) {
      hasMore = false;
      break;
    }

    items.push(...batch);

    if (batch.length < BATCH_SIZE) {
      hasMore = false;
    } else {
      skip += BATCH_SIZE;
    }
  }

  return items;
}

export /**
 * Generic utility function to fetch data from Contentful GraphQL API
 * Handles errors, response parsing, and returns typed data or null
 */
async function fetchContentfulGraphQL<
  TData,
  TVariables = Record<string, unknown>,
>(
  query: string,
  variables?: TVariables,
  options?: {
    cache?: RequestCache;
    revalidate?: number | false;
    onError?: (error: Error) => void;
  },
): Promise<{ data: TData | null; errors?: Array<{ message: string }> }> {
  try {
    const response = await fetch(CONTENTFUL_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      cache: options?.cache ?? "force-cache",
      next:
        options?.revalidate !== undefined
          ? { revalidate: options.revalidate }
          : undefined,
    });

    const result = (await response.json()) as {
      data?: TData;
      errors?: Array<{ message: string }>;
    };

    if (!response.ok) {
      const errorMessage = result.errors
        ? JSON.stringify(result.errors, null, 2)
        : response.statusText;
      const error = new Error(`Contentful API error: ${errorMessage}`);
      options?.onError?.(error);
      throw error;
    }

    return {
      data: result.data ?? null,
      errors: result.errors,
    };
  } catch (error) {
    if (error instanceof Error) {
      options?.onError?.(error);
      console.error("Error fetching Contentful data:", error.message);
    } else {
      console.error("Unknown error fetching Contentful data:", error);
    }
    return { data: null };
  }
}
