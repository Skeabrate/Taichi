import type { CodegenConfig } from "@graphql-codegen/cli";
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

dotenvConfig({ path: resolve(process.cwd(), ".env.local") });

const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;
const HYGRAPH_DRAFT_TOKEN = process.env.HYGRAPH_DRAFT_TOKEN;
const HYGRAPH_ENVIRONMENT = process.env.HYGRAPH_ENVIRONMENT || "master";

if (!HYGRAPH_ENDPOINT || !HYGRAPH_DRAFT_TOKEN) {
  throw new Error(
    "Missing required environment variables: HYGRAPH_ENDPOINT and HYGRAPH_DRAFT_TOKEN must be set in .env.local"
  );
}

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${HYGRAPH_ENDPOINT}/${HYGRAPH_ENVIRONMENT}`]: {
      headers: {
        Authorization: `Bearer ${HYGRAPH_DRAFT_TOKEN}`,
      },
    },
  },
  generates: {
    "lib/hygraph/graphql-env.d.ts": {
      plugins: ["@graphql-codegen/introspection"],
      config: {
        minify: true,
      },
    },
  },
};

export default config;
