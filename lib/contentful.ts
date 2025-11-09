import { print } from "graphql";
import {
  GetMainPage,
  GetMainPageQuery,
  GetMainPageQueryVariables,
} from "./generated/graphql";

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
} from "./generated/graphql";

export type MainPageData = NonNullable<
  NonNullable<GetMainPageQuery["mainPageCollection"]>["items"][0]
>;

export async function fetchMainPageData(): Promise<MainPageData | null> {
  if (
    !CONTENTFUL_SPACE_ID ||
    !CONTENTFUL_ACCESS_TOKEN ||
    !CONTENTFUL_GRAPHQL_ENDPOINT
  ) {
    console.error("Contentful environment variables are not set");
    return null;
  }

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
      console.error("Contentful API error:", response.statusText);
      console.error("Error details:", errorMessage);
      throw new Error(`Contentful API error: ${errorMessage}`);
    }

    if (data.errors) {
      console.error(
        "Contentful GraphQL errors:",
        JSON.stringify(data.errors, null, 2),
      );
      return null;
    }

    const mainPageItem = data.data?.mainPageCollection?.items?.[0];
    if (!mainPageItem) {
      console.error("No mainPage entry found");
      return null;
    }

    return mainPageItem;
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return null;
  }
}
