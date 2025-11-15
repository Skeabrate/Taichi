export const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
export const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
export const CONTENTFUL_ENVIRONMENT =
  process.env.CONTENTFUL_ENVIRONMENT || "master";
export const CONTENTFUL_GRAPHQL_ENDPOINT =
  CONTENTFUL_SPACE_ID && CONTENTFUL_ENVIRONMENT
    ? `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`
    : "";
export const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
export const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;
export const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;
