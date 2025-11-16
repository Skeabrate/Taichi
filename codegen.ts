import type { CodegenConfig } from "@graphql-codegen/cli";

const CONTENTFUL_SPACE_ID = "df0umoagux3q";
const CONTENTFUL_ACCESS_TOKEN = "PgIjDYYAN8wWs1pBa0ml-2ACWtmraH6CFjDiZpbIcZk";
const CONTENTFUL_ENVIRONMENT = "master";

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`]:
      {
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
