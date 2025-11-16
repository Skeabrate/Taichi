import type { CodegenConfig } from "@graphql-codegen/cli";
import {
  CONTENTFUL_GRAPHQL_ENDPOINT,
  CONTENTFUL_ACCESS_TOKEN,
} from "./lib/envs";

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [CONTENTFUL_GRAPHQL_ENDPOINT || ""]: {
      headers: {
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
  },
  documents: ["graphql/**/*.graphql"],
  generates: {
    "lib/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-document-nodes",
      ],
      config: {
        skipTypename: false,
        enumsAsTypes: true,
        scalars: {
          DateTime: "string",
          JSON: "Record<string, any>",
        },
        maybeValue: "T | null",
        namingConvention: {
          typeNames: "keep",
          enumValues: "keep",
        },
      },
    },
    "lib/generated/schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
