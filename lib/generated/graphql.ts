import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Circle: { input: any; output: any; }
  DateTime: { input: string; output: string; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: Record<string, any>; output: Record<string, any>; }
  Quality: { input: any; output: any; }
  Rectangle: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetcontentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetdescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetfileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetheightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetlinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetsizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssettitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AsseturlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetwidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  mainPageCollection?: Maybe<MainPageCollection>;
};


export type AssetLinkingCollectionsblogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsentryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsmainPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetOrder =
  | 'contentType_ASC'
  | 'contentType_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'width_ASC'
  | 'width_DESC';

/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blog) */
export type Blog = Entry & _Node & {
  __typename?: 'Blog';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<BlogLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blog) */
export type BlogdescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blog) */
export type BloglinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blog) */
export type BlogtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BlogCollection = {
  __typename?: 'BlogCollection';
  items: Array<Maybe<Blog>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogLinkingCollections = {
  __typename?: 'BlogLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogLinkingCollectionsentryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blogPost) */
export type BlogPost = Entry & _Node & {
  __typename?: 'BlogPost';
  _id: Scalars['ID']['output'];
  content?: Maybe<BlogPostContent>;
  contentfulMetadata: ContentfulMetadata;
  createDate?: Maybe<Scalars['DateTime']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blogPost) */
export type BlogPostcontentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blogPost) */
export type BlogPostcreateDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blogPost) */
export type BlogPostexcerptArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blogPost) */
export type BlogPostlinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blogPost) */
export type BlogPostslugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blogPost) */
export type BlogPostthumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/blogPost) */
export type BlogPosttitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  items: Array<Maybe<BlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogPostContent = {
  __typename?: 'BlogPostContent';
  json: Scalars['JSON']['output'];
  links: BlogPostContentLinks;
};

export type BlogPostContentAssets = {
  __typename?: 'BlogPostContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogPostContentEntries = {
  __typename?: 'BlogPostContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogPostContentLinks = {
  __typename?: 'BlogPostContentLinks';
  assets: BlogPostContentAssets;
  entries: BlogPostContentEntries;
  resources: BlogPostContentResources;
};

export type BlogPostContentResources = {
  __typename?: 'BlogPostContentResources';
  block: Array<BlogPostContentResourcesBlock>;
  hyperlink: Array<BlogPostContentResourcesHyperlink>;
  inline: Array<BlogPostContentResourcesInline>;
};

export type BlogPostContentResourcesBlock = ResourceLink & {
  __typename?: 'BlogPostContentResourcesBlock';
  sys: ResourceSys;
};

export type BlogPostContentResourcesHyperlink = ResourceLink & {
  __typename?: 'BlogPostContentResourcesHyperlink';
  sys: ResourceSys;
};

export type BlogPostContentResourcesInline = ResourceLink & {
  __typename?: 'BlogPostContentResourcesInline';
  sys: ResourceSys;
};

export type BlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  createDate?: InputMaybe<Scalars['DateTime']['input']>;
  createDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  createDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  createDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  excerpt_contains?: InputMaybe<Scalars['String']['input']>;
  excerpt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  excerpt_not?: InputMaybe<Scalars['String']['input']>;
  excerpt_not_contains?: InputMaybe<Scalars['String']['input']>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogPostLinkingCollections = {
  __typename?: 'BlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogPostLinkingCollectionsentryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogPostOrder =
  | 'createDate_ASC'
  | 'createDate_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/classesSchedule) */
export type ClassesSchedule = Entry & _Node & {
  __typename?: 'ClassesSchedule';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  day?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ClassesScheduleLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/classesSchedule) */
export type ClassesScheduledayArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/classesSchedule) */
export type ClassesSchedulehoursArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/classesSchedule) */
export type ClassesSchedulelinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ClassesScheduleCollection = {
  __typename?: 'ClassesScheduleCollection';
  items: Array<Maybe<ClassesSchedule>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ClassesScheduleFilter = {
  AND?: InputMaybe<Array<InputMaybe<ClassesScheduleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ClassesScheduleFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  day?: InputMaybe<Scalars['String']['input']>;
  day_contains?: InputMaybe<Scalars['String']['input']>;
  day_exists?: InputMaybe<Scalars['Boolean']['input']>;
  day_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  day_not?: InputMaybe<Scalars['String']['input']>;
  day_not_contains?: InputMaybe<Scalars['String']['input']>;
  day_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hours?: InputMaybe<Scalars['String']['input']>;
  hours_contains?: InputMaybe<Scalars['String']['input']>;
  hours_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hours_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hours_not?: InputMaybe<Scalars['String']['input']>;
  hours_not_contains?: InputMaybe<Scalars['String']['input']>;
  hours_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ClassesScheduleLinkingCollections = {
  __typename?: 'ClassesScheduleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  mainPageCollection?: Maybe<MainPageCollection>;
};


export type ClassesScheduleLinkingCollectionsentryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ClassesScheduleLinkingCollectionsmainPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ClassesScheduleLinkingCollectionsMainPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ClassesScheduleLinkingCollectionsMainPageCollectionOrder =
  | 'email_ASC'
  | 'email_DESC'
  | 'facebook_ASC'
  | 'facebook_DESC'
  | 'instagram_ASC'
  | 'instagram_DESC'
  | 'nameLastNameSeniority_ASC'
  | 'nameLastNameSeniority_DESC'
  | 'patreon_ASC'
  | 'patreon_DESC'
  | 'phoneNumber_ASC'
  | 'phoneNumber_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'youtube_ASC'
  | 'youtube_DESC';

export type ClassesScheduleOrder =
  | 'day_ASC'
  | 'day_DESC'
  | 'hours_ASC'
  | 'hours_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type EntryOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

export type ImageFormat =
  /** AVIF image format. */
  | 'AVIF'
  /** JPG image format. */
  | 'JPG'
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  | 'JPG_PROGRESSIVE'
  /** PNG image format */
  | 'PNG'
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  | 'PNG8'
  /** WebP image format. */
  | 'WEBP';

export type ImageResizeFocus =
  /** Focus the resizing on the bottom. */
  | 'BOTTOM'
  /** Focus the resizing on the bottom left. */
  | 'BOTTOM_LEFT'
  /** Focus the resizing on the bottom right. */
  | 'BOTTOM_RIGHT'
  /** Focus the resizing on the center. */
  | 'CENTER'
  /** Focus the resizing on the largest face. */
  | 'FACE'
  /** Focus the resizing on the area containing all the faces. */
  | 'FACES'
  /** Focus the resizing on the left. */
  | 'LEFT'
  /** Focus the resizing on the right. */
  | 'RIGHT'
  /** Focus the resizing on the top. */
  | 'TOP'
  /** Focus the resizing on the top left. */
  | 'TOP_LEFT'
  /** Focus the resizing on the top right. */
  | 'TOP_RIGHT';

export type ImageResizeStrategy =
  /** Crops a part of the original image to fit into the specified dimensions. */
  | 'CROP'
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  | 'FILL'
  /** Resizes the image to fit into the specified dimensions. */
  | 'FIT'
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  | 'PAD'
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  | 'SCALE'
  /** Creates a thumbnail from the image. */
  | 'THUMB';

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPage = Entry & _Node & {
  __typename?: 'MainPage';
  _id: Scalars['ID']['output'];
  aboutMe?: Maybe<MainPageAboutMe>;
  aboutTaichiText?: Maybe<MainPageAboutTaichiText>;
  aboutTaichiTextLeftColumn?: Maybe<MainPageAboutTaichiTextLeftColumn>;
  aboutTaichiTextRightColumn?: Maybe<MainPageAboutTaichiTextRightColumn>;
  classesAssetsCollection?: Maybe<AssetCollection>;
  classesScheduleCollection?: Maybe<MainPageClassesScheduleCollection>;
  contentfulMetadata: ContentfulMetadata;
  coordinates?: Maybe<Location>;
  email?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MainPageLinkingCollections>;
  localization?: Maybe<MainPageLocalization>;
  mainAsset?: Maybe<Asset>;
  nameLastNameSeniority?: Maybe<Scalars['String']['output']>;
  patreon?: Maybe<Scalars['String']['output']>;
  patreonSection?: Maybe<MainPagePatreonSection>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  quoteAboutMe?: Maybe<Scalars['String']['output']>;
  quoteAboutTaichi?: Maybe<Scalars['String']['output']>;
  quoteFooter?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  taichiImage?: Maybe<Asset>;
  youtube?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPageaboutMeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPageaboutTaichiTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPageaboutTaichiTextLeftColumnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPageaboutTaichiTextRightColumnArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPageclassesAssetsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPageclassesScheduleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MainPageClassesScheduleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClassesScheduleFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagecoordinatesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPageemailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagefacebookArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPageinstagramArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagelinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagelocalizationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagemainAssetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagenameLastNameSeniorityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagepatreonArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagepatreonSectionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagephoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagequoteAboutMeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagequoteAboutTaichiArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagequoteFooterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPagetaichiImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/df0umoagux3q/content_types/mainPage) */
export type MainPageyoutubeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MainPageAboutMe = {
  __typename?: 'MainPageAboutMe';
  json: Scalars['JSON']['output'];
  links: MainPageAboutMeLinks;
};

export type MainPageAboutMeAssets = {
  __typename?: 'MainPageAboutMeAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MainPageAboutMeEntries = {
  __typename?: 'MainPageAboutMeEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MainPageAboutMeLinks = {
  __typename?: 'MainPageAboutMeLinks';
  assets: MainPageAboutMeAssets;
  entries: MainPageAboutMeEntries;
  resources: MainPageAboutMeResources;
};

export type MainPageAboutMeResources = {
  __typename?: 'MainPageAboutMeResources';
  block: Array<MainPageAboutMeResourcesBlock>;
  hyperlink: Array<MainPageAboutMeResourcesHyperlink>;
  inline: Array<MainPageAboutMeResourcesInline>;
};

export type MainPageAboutMeResourcesBlock = ResourceLink & {
  __typename?: 'MainPageAboutMeResourcesBlock';
  sys: ResourceSys;
};

export type MainPageAboutMeResourcesHyperlink = ResourceLink & {
  __typename?: 'MainPageAboutMeResourcesHyperlink';
  sys: ResourceSys;
};

export type MainPageAboutMeResourcesInline = ResourceLink & {
  __typename?: 'MainPageAboutMeResourcesInline';
  sys: ResourceSys;
};

export type MainPageAboutTaichiText = {
  __typename?: 'MainPageAboutTaichiText';
  json: Scalars['JSON']['output'];
  links: MainPageAboutTaichiTextLinks;
};

export type MainPageAboutTaichiTextAssets = {
  __typename?: 'MainPageAboutTaichiTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MainPageAboutTaichiTextEntries = {
  __typename?: 'MainPageAboutTaichiTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MainPageAboutTaichiTextLeftColumn = {
  __typename?: 'MainPageAboutTaichiTextLeftColumn';
  json: Scalars['JSON']['output'];
  links: MainPageAboutTaichiTextLeftColumnLinks;
};

export type MainPageAboutTaichiTextLeftColumnAssets = {
  __typename?: 'MainPageAboutTaichiTextLeftColumnAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MainPageAboutTaichiTextLeftColumnEntries = {
  __typename?: 'MainPageAboutTaichiTextLeftColumnEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MainPageAboutTaichiTextLeftColumnLinks = {
  __typename?: 'MainPageAboutTaichiTextLeftColumnLinks';
  assets: MainPageAboutTaichiTextLeftColumnAssets;
  entries: MainPageAboutTaichiTextLeftColumnEntries;
  resources: MainPageAboutTaichiTextLeftColumnResources;
};

export type MainPageAboutTaichiTextLeftColumnResources = {
  __typename?: 'MainPageAboutTaichiTextLeftColumnResources';
  block: Array<MainPageAboutTaichiTextLeftColumnResourcesBlock>;
  hyperlink: Array<MainPageAboutTaichiTextLeftColumnResourcesHyperlink>;
  inline: Array<MainPageAboutTaichiTextLeftColumnResourcesInline>;
};

export type MainPageAboutTaichiTextLeftColumnResourcesBlock = ResourceLink & {
  __typename?: 'MainPageAboutTaichiTextLeftColumnResourcesBlock';
  sys: ResourceSys;
};

export type MainPageAboutTaichiTextLeftColumnResourcesHyperlink = ResourceLink & {
  __typename?: 'MainPageAboutTaichiTextLeftColumnResourcesHyperlink';
  sys: ResourceSys;
};

export type MainPageAboutTaichiTextLeftColumnResourcesInline = ResourceLink & {
  __typename?: 'MainPageAboutTaichiTextLeftColumnResourcesInline';
  sys: ResourceSys;
};

export type MainPageAboutTaichiTextLinks = {
  __typename?: 'MainPageAboutTaichiTextLinks';
  assets: MainPageAboutTaichiTextAssets;
  entries: MainPageAboutTaichiTextEntries;
  resources: MainPageAboutTaichiTextResources;
};

export type MainPageAboutTaichiTextResources = {
  __typename?: 'MainPageAboutTaichiTextResources';
  block: Array<MainPageAboutTaichiTextResourcesBlock>;
  hyperlink: Array<MainPageAboutTaichiTextResourcesHyperlink>;
  inline: Array<MainPageAboutTaichiTextResourcesInline>;
};

export type MainPageAboutTaichiTextResourcesBlock = ResourceLink & {
  __typename?: 'MainPageAboutTaichiTextResourcesBlock';
  sys: ResourceSys;
};

export type MainPageAboutTaichiTextResourcesHyperlink = ResourceLink & {
  __typename?: 'MainPageAboutTaichiTextResourcesHyperlink';
  sys: ResourceSys;
};

export type MainPageAboutTaichiTextResourcesInline = ResourceLink & {
  __typename?: 'MainPageAboutTaichiTextResourcesInline';
  sys: ResourceSys;
};

export type MainPageAboutTaichiTextRightColumn = {
  __typename?: 'MainPageAboutTaichiTextRightColumn';
  json: Scalars['JSON']['output'];
  links: MainPageAboutTaichiTextRightColumnLinks;
};

export type MainPageAboutTaichiTextRightColumnAssets = {
  __typename?: 'MainPageAboutTaichiTextRightColumnAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MainPageAboutTaichiTextRightColumnEntries = {
  __typename?: 'MainPageAboutTaichiTextRightColumnEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MainPageAboutTaichiTextRightColumnLinks = {
  __typename?: 'MainPageAboutTaichiTextRightColumnLinks';
  assets: MainPageAboutTaichiTextRightColumnAssets;
  entries: MainPageAboutTaichiTextRightColumnEntries;
  resources: MainPageAboutTaichiTextRightColumnResources;
};

export type MainPageAboutTaichiTextRightColumnResources = {
  __typename?: 'MainPageAboutTaichiTextRightColumnResources';
  block: Array<MainPageAboutTaichiTextRightColumnResourcesBlock>;
  hyperlink: Array<MainPageAboutTaichiTextRightColumnResourcesHyperlink>;
  inline: Array<MainPageAboutTaichiTextRightColumnResourcesInline>;
};

export type MainPageAboutTaichiTextRightColumnResourcesBlock = ResourceLink & {
  __typename?: 'MainPageAboutTaichiTextRightColumnResourcesBlock';
  sys: ResourceSys;
};

export type MainPageAboutTaichiTextRightColumnResourcesHyperlink = ResourceLink & {
  __typename?: 'MainPageAboutTaichiTextRightColumnResourcesHyperlink';
  sys: ResourceSys;
};

export type MainPageAboutTaichiTextRightColumnResourcesInline = ResourceLink & {
  __typename?: 'MainPageAboutTaichiTextRightColumnResourcesInline';
  sys: ResourceSys;
};

export type MainPageClassesScheduleCollection = {
  __typename?: 'MainPageClassesScheduleCollection';
  items: Array<Maybe<ClassesSchedule>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MainPageClassesScheduleCollectionOrder =
  | 'day_ASC'
  | 'day_DESC'
  | 'hours_ASC'
  | 'hours_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

export type MainPageCollection = {
  __typename?: 'MainPageCollection';
  items: Array<Maybe<MainPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MainPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<MainPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MainPageFilter>>>;
  aboutMe_contains?: InputMaybe<Scalars['String']['input']>;
  aboutMe_exists?: InputMaybe<Scalars['Boolean']['input']>;
  aboutMe_not_contains?: InputMaybe<Scalars['String']['input']>;
  aboutTaichiTextLeftColumn_contains?: InputMaybe<Scalars['String']['input']>;
  aboutTaichiTextLeftColumn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  aboutTaichiTextLeftColumn_not_contains?: InputMaybe<Scalars['String']['input']>;
  aboutTaichiTextRightColumn_contains?: InputMaybe<Scalars['String']['input']>;
  aboutTaichiTextRightColumn_exists?: InputMaybe<Scalars['Boolean']['input']>;
  aboutTaichiTextRightColumn_not_contains?: InputMaybe<Scalars['String']['input']>;
  aboutTaichiText_contains?: InputMaybe<Scalars['String']['input']>;
  aboutTaichiText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  aboutTaichiText_not_contains?: InputMaybe<Scalars['String']['input']>;
  classesAssetsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  classesSchedule?: InputMaybe<cfClassesScheduleNestedFilter>;
  classesScheduleCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  coordinates_exists?: InputMaybe<Scalars['Boolean']['input']>;
  coordinates_within_circle?: InputMaybe<Scalars['Circle']['input']>;
  coordinates_within_rectangle?: InputMaybe<Scalars['Rectangle']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  facebook_contains?: InputMaybe<Scalars['String']['input']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']['input']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebook_not?: InputMaybe<Scalars['String']['input']>;
  facebook_not_contains?: InputMaybe<Scalars['String']['input']>;
  facebook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  instagram_contains?: InputMaybe<Scalars['String']['input']>;
  instagram_exists?: InputMaybe<Scalars['Boolean']['input']>;
  instagram_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagram_not?: InputMaybe<Scalars['String']['input']>;
  instagram_not_contains?: InputMaybe<Scalars['String']['input']>;
  instagram_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  localization_contains?: InputMaybe<Scalars['String']['input']>;
  localization_exists?: InputMaybe<Scalars['Boolean']['input']>;
  localization_not_contains?: InputMaybe<Scalars['String']['input']>;
  mainAsset_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameLastNameSeniority?: InputMaybe<Scalars['String']['input']>;
  nameLastNameSeniority_contains?: InputMaybe<Scalars['String']['input']>;
  nameLastNameSeniority_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameLastNameSeniority_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameLastNameSeniority_not?: InputMaybe<Scalars['String']['input']>;
  nameLastNameSeniority_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameLastNameSeniority_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  patreon?: InputMaybe<Scalars['String']['input']>;
  patreonSection_contains?: InputMaybe<Scalars['String']['input']>;
  patreonSection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  patreonSection_not_contains?: InputMaybe<Scalars['String']['input']>;
  patreon_contains?: InputMaybe<Scalars['String']['input']>;
  patreon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  patreon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  patreon_not?: InputMaybe<Scalars['String']['input']>;
  patreon_not_contains?: InputMaybe<Scalars['String']['input']>;
  patreon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteAboutMe?: InputMaybe<Scalars['String']['input']>;
  quoteAboutMe_contains?: InputMaybe<Scalars['String']['input']>;
  quoteAboutMe_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAboutMe_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteAboutMe_not?: InputMaybe<Scalars['String']['input']>;
  quoteAboutMe_not_contains?: InputMaybe<Scalars['String']['input']>;
  quoteAboutMe_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteAboutTaichi?: InputMaybe<Scalars['String']['input']>;
  quoteAboutTaichi_contains?: InputMaybe<Scalars['String']['input']>;
  quoteAboutTaichi_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAboutTaichi_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteAboutTaichi_not?: InputMaybe<Scalars['String']['input']>;
  quoteAboutTaichi_not_contains?: InputMaybe<Scalars['String']['input']>;
  quoteAboutTaichi_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteFooter?: InputMaybe<Scalars['String']['input']>;
  quoteFooter_contains?: InputMaybe<Scalars['String']['input']>;
  quoteFooter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quoteFooter_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteFooter_not?: InputMaybe<Scalars['String']['input']>;
  quoteFooter_not_contains?: InputMaybe<Scalars['String']['input']>;
  quoteFooter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  taichiImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
  youtube_contains?: InputMaybe<Scalars['String']['input']>;
  youtube_exists?: InputMaybe<Scalars['Boolean']['input']>;
  youtube_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  youtube_not?: InputMaybe<Scalars['String']['input']>;
  youtube_not_contains?: InputMaybe<Scalars['String']['input']>;
  youtube_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MainPageLinkingCollections = {
  __typename?: 'MainPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MainPageLinkingCollectionsentryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MainPageLocalization = {
  __typename?: 'MainPageLocalization';
  json: Scalars['JSON']['output'];
  links: MainPageLocalizationLinks;
};

export type MainPageLocalizationAssets = {
  __typename?: 'MainPageLocalizationAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MainPageLocalizationEntries = {
  __typename?: 'MainPageLocalizationEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MainPageLocalizationLinks = {
  __typename?: 'MainPageLocalizationLinks';
  assets: MainPageLocalizationAssets;
  entries: MainPageLocalizationEntries;
  resources: MainPageLocalizationResources;
};

export type MainPageLocalizationResources = {
  __typename?: 'MainPageLocalizationResources';
  block: Array<MainPageLocalizationResourcesBlock>;
  hyperlink: Array<MainPageLocalizationResourcesHyperlink>;
  inline: Array<MainPageLocalizationResourcesInline>;
};

export type MainPageLocalizationResourcesBlock = ResourceLink & {
  __typename?: 'MainPageLocalizationResourcesBlock';
  sys: ResourceSys;
};

export type MainPageLocalizationResourcesHyperlink = ResourceLink & {
  __typename?: 'MainPageLocalizationResourcesHyperlink';
  sys: ResourceSys;
};

export type MainPageLocalizationResourcesInline = ResourceLink & {
  __typename?: 'MainPageLocalizationResourcesInline';
  sys: ResourceSys;
};

export type MainPageOrder =
  | 'email_ASC'
  | 'email_DESC'
  | 'facebook_ASC'
  | 'facebook_DESC'
  | 'instagram_ASC'
  | 'instagram_DESC'
  | 'nameLastNameSeniority_ASC'
  | 'nameLastNameSeniority_DESC'
  | 'patreon_ASC'
  | 'patreon_DESC'
  | 'phoneNumber_ASC'
  | 'phoneNumber_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'youtube_ASC'
  | 'youtube_DESC';

export type MainPagePatreonSection = {
  __typename?: 'MainPagePatreonSection';
  json: Scalars['JSON']['output'];
  links: MainPagePatreonSectionLinks;
};

export type MainPagePatreonSectionAssets = {
  __typename?: 'MainPagePatreonSectionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MainPagePatreonSectionEntries = {
  __typename?: 'MainPagePatreonSectionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MainPagePatreonSectionLinks = {
  __typename?: 'MainPagePatreonSectionLinks';
  assets: MainPagePatreonSectionAssets;
  entries: MainPagePatreonSectionEntries;
  resources: MainPagePatreonSectionResources;
};

export type MainPagePatreonSectionResources = {
  __typename?: 'MainPagePatreonSectionResources';
  block: Array<MainPagePatreonSectionResourcesBlock>;
  hyperlink: Array<MainPagePatreonSectionResourcesHyperlink>;
  inline: Array<MainPagePatreonSectionResourcesInline>;
};

export type MainPagePatreonSectionResourcesBlock = ResourceLink & {
  __typename?: 'MainPagePatreonSectionResourcesBlock';
  sys: ResourceSys;
};

export type MainPagePatreonSectionResourcesHyperlink = ResourceLink & {
  __typename?: 'MainPagePatreonSectionResourcesHyperlink';
  sys: ResourceSys;
};

export type MainPagePatreonSectionResourcesInline = ResourceLink & {
  __typename?: 'MainPagePatreonSectionResourcesInline';
  sys: ResourceSys;
};

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blog?: Maybe<Blog>;
  blogCollection?: Maybe<BlogCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  classesSchedule?: Maybe<ClassesSchedule>;
  classesScheduleCollection?: Maybe<ClassesScheduleCollection>;
  entryCollection?: Maybe<EntryCollection>;
  mainPage?: Maybe<MainPage>;
  mainPageCollection?: Maybe<MainPageCollection>;
};


export type Query_nodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_nodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryassetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryassetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryblogArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryblogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlogOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogFilter>;
};


export type QueryblogPostArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryblogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostFilter>;
};


export type QueryclassesScheduleArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryclassesScheduleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ClassesScheduleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClassesScheduleFilter>;
};


export type QueryentryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QuerymainPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerymainPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MainPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MainPageFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type cfClassesScheduleNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<cfClassesScheduleNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<cfClassesScheduleNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  day?: InputMaybe<Scalars['String']['input']>;
  day_contains?: InputMaybe<Scalars['String']['input']>;
  day_exists?: InputMaybe<Scalars['Boolean']['input']>;
  day_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  day_not?: InputMaybe<Scalars['String']['input']>;
  day_not_contains?: InputMaybe<Scalars['String']['input']>;
  day_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hours?: InputMaybe<Scalars['String']['input']>;
  hours_contains?: InputMaybe<Scalars['String']['input']>;
  hours_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hours_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hours_not?: InputMaybe<Scalars['String']['input']>;
  hours_not_contains?: InputMaybe<Scalars['String']['input']>;
  hours_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type GetBlogQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlogQuery = { __typename?: 'Query', blogCollection?: { __typename?: 'BlogCollection', items: Array<{ __typename?: 'Blog', title?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type GetBlogPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>> | InputMaybe<BlogPostOrder>>;
}>;


export type GetBlogPostsQuery = { __typename?: 'Query', blogPostCollection?: { __typename?: 'BlogPostCollection', total: number, items: Array<{ __typename?: 'BlogPost', slug?: string | null, title?: string | null, excerpt?: string | null, sys: { __typename?: 'Sys', id: string, publishedAt?: string | null }, thumbnail?: { __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null } | null, content?: { __typename?: 'BlogPostContent', json: Record<string, any>, links: { __typename?: 'BlogPostContentLinks', assets: { __typename?: 'BlogPostContentAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, contentType?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type GetBlogPostBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetBlogPostBySlugQuery = { __typename?: 'Query', blogPostCollection?: { __typename?: 'BlogPostCollection', items: Array<{ __typename?: 'BlogPost', slug?: string | null, title?: string | null, excerpt?: string | null, sys: { __typename?: 'Sys', id: string, publishedAt?: string | null }, thumbnail?: { __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null } | null, content?: { __typename?: 'BlogPostContent', json: Record<string, any>, links: { __typename?: 'BlogPostContentLinks', assets: { __typename?: 'BlogPostContentAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, contentType?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type GetMainPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainPageQuery = { __typename?: 'Query', mainPageCollection?: { __typename?: 'MainPageCollection', items: Array<{ __typename?: 'MainPage', nameLastNameSeniority?: string | null, quoteAboutMe?: string | null, phoneNumber?: string | null, email?: string | null, facebook?: string | null, instagram?: string | null, youtube?: string | null, patreon?: string | null, quoteFooter?: string | null, quoteAboutTaichi?: string | null, sys: { __typename?: 'Sys', id: string }, aboutMe?: { __typename?: 'MainPageAboutMe', json: Record<string, any>, links: { __typename?: 'MainPageAboutMeLinks', assets: { __typename?: 'MainPageAboutMeAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, contentType?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, mainAsset?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null, classesScheduleCollection?: { __typename?: 'MainPageClassesScheduleCollection', items: Array<{ __typename?: 'ClassesSchedule', day?: string | null, hours?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, localization?: { __typename?: 'MainPageLocalization', json: Record<string, any>, links: { __typename?: 'MainPageLocalizationLinks', assets: { __typename?: 'MainPageLocalizationAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, contentType?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, coordinates?: { __typename?: 'Location', lat?: number | null, lon?: number | null } | null, patreonSection?: { __typename?: 'MainPagePatreonSection', json: Record<string, any>, links: { __typename?: 'MainPagePatreonSectionLinks', assets: { __typename?: 'MainPagePatreonSectionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, contentType?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, classesAssetsCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, contentType?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, aboutTaichiText?: { __typename?: 'MainPageAboutTaichiText', json: Record<string, any>, links: { __typename?: 'MainPageAboutTaichiTextLinks', assets: { __typename?: 'MainPageAboutTaichiTextAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, contentType?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, taichiImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null, aboutTaichiTextLeftColumn?: { __typename?: 'MainPageAboutTaichiTextLeftColumn', json: Record<string, any>, links: { __typename?: 'MainPageAboutTaichiTextLeftColumnLinks', assets: { __typename?: 'MainPageAboutTaichiTextLeftColumnAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, contentType?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, aboutTaichiTextRightColumn?: { __typename?: 'MainPageAboutTaichiTextRightColumn', json: Record<string, any>, links: { __typename?: 'MainPageAboutTaichiTextRightColumnLinks', assets: { __typename?: 'MainPageAboutTaichiTextRightColumnAssets', block: Array<{ __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, contentType?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };


export const GetBlog = gql`
    query GetBlog {
  blogCollection(limit: 1) {
    items {
      sys {
        id
      }
      title
      description
    }
  }
}
    `;
export const GetBlogPosts = gql`
    query GetBlogPosts($limit: Int, $skip: Int, $order: [BlogPostOrder]) {
  blogPostCollection(limit: $limit, skip: $skip, order: $order) {
    total
    items {
      sys {
        id
        publishedAt
      }
      slug
      title
      excerpt
      thumbnail {
        url
        title
        width
        height
      }
      content {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              description
              contentType
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;
export const GetBlogPostBySlug = gql`
    query GetBlogPostBySlug($slug: String!) {
  blogPostCollection(where: {slug: $slug}, limit: 1) {
    items {
      sys {
        id
        publishedAt
      }
      slug
      title
      excerpt
      thumbnail {
        url
        title
        width
        height
      }
      content {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              description
              contentType
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;
export const GetMainPage = gql`
    query GetMainPage {
  mainPageCollection(limit: 1) {
    items {
      sys {
        id
      }
      nameLastNameSeniority
      aboutMe {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              description
              contentType
              width
              height
            }
          }
        }
      }
      quoteAboutMe
      mainAsset {
        sys {
          id
        }
        url
        title
        description
        width
        height
      }
      classesScheduleCollection {
        items {
          sys {
            id
          }
          day
          hours
        }
      }
      localization {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              description
              contentType
              width
              height
            }
          }
        }
      }
      coordinates {
        lat
        lon
      }
      patreonSection {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              description
              contentType
              width
              height
            }
          }
        }
      }
      classesAssetsCollection {
        items {
          sys {
            id
          }
          url
          title
          description
          contentType
          width
          height
        }
      }
      phoneNumber
      email
      facebook
      instagram
      youtube
      patreon
      quoteFooter
      quoteAboutTaichi
      aboutTaichiText {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              description
              contentType
              width
              height
            }
          }
        }
      }
      taichiImage {
        sys {
          id
        }
        url
        title
        description
        width
        height
      }
      aboutTaichiTextLeftColumn {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              description
              contentType
              width
              height
            }
          }
        }
      }
      aboutTaichiTextRightColumn {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              title
              description
              contentType
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;