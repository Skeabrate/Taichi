# Contentful CMS Integration

This project is integrated with Contentful CMS using GraphQL API.

## Environment Variables

Add the following environment variables to your `.env.local` file:

```env
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT=master
```

### Getting Your Contentful Credentials

1. **Space ID**: Found in your Contentful space settings
2. **Access Token**: 
   - Go to Contentful → Settings → API keys
   - Create a new Content Delivery API (CDA) token
   - Use this token as `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`
3. **Environment**: Usually "master" unless you're using a custom environment

## Content Model

The integration expects a `mainPage` content type with the following fields:

- `nameLastNameSeniority` (Symbol) - Name, last name, and seniority
- `aboutMe` (RichText) - About section content
- `quoteAboutMe` (Text) - Quote for about section
- `mainAsset` (Asset) - Main image for about section
- `classesSchedule` (Array of Links to `classesSchedule` entries) - Class schedule
- `localization` (RichText) - Location information
- `coordinates` (Location) - GPS coordinates for map
- `patreonSection` (RichText) - Patreon/online learning section
- `classesAssets` (Array of Assets) - Images from classes
- `phoneNumber` (Symbol) - Contact phone number
- `email` (Symbol) - Contact email
- `facebook` (Symbol) - Facebook URL
- `instagram` (Symbol) - Instagram URL
- `youtube` (Symbol) - YouTube URL
- `patreon` (Symbol) - Patreon URL
- `quoteFooter` (Text) - Footer quote

## Classes Schedule Model

The `classesSchedule` content type should have:
- `dayOfWeek` (Symbol) - Day of the week
- `startTime` (Symbol) - Start time
- `endTime` (Symbol) - End time
- `description` (Text) - Optional description

## Usage

The data is automatically fetched on the home page (`app/page.tsx`) and passed to all section components. The components will fall back to default content if Contentful data is not available.

## GraphQL Query

The GraphQL query is defined in `lib/contentful.ts` and fetches all mainPage fields. The data is cached and revalidated every hour.

