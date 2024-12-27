/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type Startup = {
  _id: string;
  _type: "startup";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  category?: string;
  image?: string;
  description?: string;
  pitch?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  id?: number;
  name?: string;
  bio?: string;
  email?: string;
  image?: string;
};

export type Markdown = string;

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | SanityAssetSourceData | Startup | Slug | Author | Markdown;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/lib/queries.ts
// Variable: startup_query
// Query: *[_type == "startup" && defined(slug.current) && !defined($search) || category match $search|| title match $search || author->name match $search]|order(_createdAt desc){    _id,    title,    slug,    _createdAt,    category,    image,views,description,    author->{      _id,      name,      image,      bio    }  }
export type Startup_queryResult = Array<{
  _id: string;
  title: null;
  slug: null;
  _createdAt: string;
  category: null;
  image: string | null;
  views: null;
  description: null;
  author: null;
} | {
  _id: string;
  title: string | null;
  slug: null;
  _createdAt: string;
  category: null;
  image: null;
  views: null;
  description: string | null;
  author: null;
} | {
  _id: string;
  title: string | null;
  slug: Slug | null;
  _createdAt: string;
  category: string | null;
  image: string | null;
  views: null;
  description: string | null;
  author: {
    _id: string;
    name: string | null;
    image: string | null;
    bio: string | null;
  } | null;
}>;
// Variable: startup_query_by_slug
// Query: *[_type == "startup" && _id == $id][0]{    _id,    title,    slug,    _createdAt,    category,    image,    views,    description,    author->{      _id,      name,      image,      bio    },    pitch,  }
export type Startup_query_by_slugResult = {
  _id: string;
  title: string | null;
  slug: Slug | null;
  _createdAt: string;
  category: string | null;
  image: string | null;
  views: null;
  description: string | null;
  author: {
    _id: string;
    name: string | null;
    image: string | null;
    bio: string | null;
  } | null;
  pitch: string | null;
} | null;
// Variable: startup_views_query
// Query: *[_type == "startup" && _id == $id][0]{    _id,    views,  }
export type Startup_views_queryResult = {
  _id: string;
  views: null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n  *[_type == \"startup\" && defined(slug.current) && !defined($search) || category match $search|| title match $search || author->name match $search]|order(_createdAt desc){\n    _id,\n    title,\n    slug,\n    _createdAt,\n    category,\n    image,views,description,\n    author->{\n      _id,\n      name,\n      image,\n      bio\n    }\n  }\n": Startup_queryResult;
    "\n  *[_type == \"startup\" && _id == $id][0]{\n    _id,\n    title,\n    slug,\n    _createdAt,\n    category,\n    image,\n    views,\n    description,\n    author->{\n      _id,\n      name,\n      image,\n      bio\n    },\n    pitch,\n  }\n": Startup_query_by_slugResult;
    "\n  *[_type == \"startup\" && _id == $id][0]{\n    _id,\n    views,\n  }\n": Startup_views_queryResult;
  }
}
