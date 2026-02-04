import { config as dotenvConfig } from "dotenv";
import { writeFileSync } from "fs";
import { getIntrospectionQuery } from "graphql";
import { resolve } from "path";

// Load .env.local explicitly
dotenvConfig({ path: resolve(process.cwd(), ".env.local") });

const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;
const HYGRAPH_DRAFT_TOKEN = process.env.HYGRAPH_DRAFT_TOKEN;
const HYGRAPH_ENVIRONMENT = process.env.HYGRAPH_ENVIRONMENT || "master";

if (!HYGRAPH_ENDPOINT || !HYGRAPH_DRAFT_TOKEN) {
  throw new Error(
    "Missing required environment variables: HYGRAPH_ENDPOINT and HYGRAPH_DRAFT_TOKEN must be set in .env.local"
  );
}

async function generateIntrospection() {
  const url = `${HYGRAPH_ENDPOINT}/${HYGRAPH_ENVIRONMENT}`;
  
  console.log("Fetching schema from:", url);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${HYGRAPH_DRAFT_TOKEN}`,
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { data, errors } = await response.json();

  if (errors) {
    console.error("GraphQL Errors:", errors);
    throw new Error("Failed to fetch schema");
  }

  // Generate TypeScript introspection file for gql.tada
  const introspectionContent = `/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file.
 * It will automatically be used by \`gql.tada\` to infer the types of your GraphQL documents.
 */
export type introspection = ${JSON.stringify(data, null, 2)};

import * as gqlTada from "gql.tada";

declare module "gql.tada" {
  interface setupSchema {
    introspection: introspection;
  }
}
`;

  writeFileSync(
    resolve(process.cwd(), "lib/hygraph/graphql-env.d.ts"),
    introspectionContent
  );

  console.log("✅ Generated lib/hygraph/graphql-env.d.ts");
}

generateIntrospection().catch((error) => {
  console.error("Error generating introspection:", error);
  process.exit(1);
});
