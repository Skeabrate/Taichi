import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
