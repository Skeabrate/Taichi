import { graphql } from "./graphql";

// Main Page Query
export const GetMainPage = graphql(`
  query GetMainPage {
    mainPage(where: { id: "cmjd2iqbo9fdl07mk18dq9cg2" }) {
      id
      aboutMe {
        id
        richText {
          raw
        }
      }
      aboutTaichiHealthBenefits(first: 100) {
        id
        icon
        tekst {
          id
          richText {
            raw
          }
        }
      }
      aboutTaichiText {
        richText {
          raw
        }
      }
      classesAssetsCollection {
        mimeType
        url
        width
        height
      }
      classesSchedule(first: 100) {
        id
        day
        hours
      }
      coordinates {
        distance(from: { latitude: 1.5, longitude: 1.5 })
        latitude
        longitude
      }
      localisation {
        richText {
          raw
        }
      }
      email
      facebook
      instagram
      mainAsset {
        url
        width
        height
        mimeType
      }
      nameLastNameSeniority
      patreonSection {
        richText {
          raw
        }
      }
      patreon
      phoneNumber
      quoteAboutMe
      quoteAboutTaichi
      quoteFooter
      taichiImage {
        url
        width
        height
        mimeType
      }
      youtube
    }
  }
`);

// Blog Posts Query
export const GetBlogPosts = graphql(`
  query GetBlogPosts($limit: Int, $skip: Int) {
    blogPosts(first: $limit, skip: $skip, orderBy: createDate_DESC) {
      id
      slug
      title
      excerpt
      createDate
      thumbnail {
        id
        url
        width
        height
        mimeType
      }
      content {
        raw
      }
    }
    blogPostsConnection {
      aggregate {
        count
      }
    }
  }
`);

// Single Blog Post Query
export const GetBlogPostBySlug = graphql(`
  query GetBlogPostBySlug($slug: String!) {
    blogPost(where: { slug: $slug }) {
      id
      slug
      title
      excerpt
      createDate
      thumbnail {
        id
        url
        width
        height
        mimeType
      }
      content {
        raw
      }
    }
  }
`);

// Blog Post Slugs Query
export const GetBlogPostSlugs = graphql(`
  query GetBlogPostSlugs($limit: Int, $skip: Int) {
    blogPosts(first: $limit, skip: $skip) {
      slug
    }
  }
`);

// Blog Post Count Query
export const GetBlogPostsCount = graphql(`
  query GetBlogPostsCount {
    blogPostsConnection {
      aggregate {
        count
      }
    }
  }
`);

// Blog Post Sitemap Entries Query
export const GetBlogPostSitemapEntries = graphql(`
  query GetBlogPostSitemapEntries($limit: Int, $skip: Int) {
    blogPosts(first: $limit, skip: $skip) {
      slug
      publishedAt
    }
  }
`);
