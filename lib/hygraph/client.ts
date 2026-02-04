import { GraphQLClient } from "graphql-request";
import { draftMode } from "next/headers";
import {
  HYGRAPH_ENDPOINT,
  HYGRAPH_DRAFT_TOKEN,
  HYGRAPH_ENVIRONMENT,
} from "../envs";

function combineCacheTags(tags: string[]): string {
  return tags.join(",");
}

export const createGQLClient = async (
  tags: string | string[] = [],
  skipDraftMode = false,
) => {
  const HYGRAPH_URL = new URL(
    `${HYGRAPH_ENDPOINT}/${HYGRAPH_ENVIRONMENT}`,
  );
  const client = new GraphQLClient(HYGRAPH_URL.toString(), {
    next: { tags: [Array.isArray(tags) ? combineCacheTags(tags) : tags] },
  });

  if (!skipDraftMode) {
    const { isEnabled } = await draftMode();
    if (isEnabled) {
      client.setHeader("Authorization", `Bearer ${HYGRAPH_DRAFT_TOKEN}`);
    }
  }

  return client;
};
