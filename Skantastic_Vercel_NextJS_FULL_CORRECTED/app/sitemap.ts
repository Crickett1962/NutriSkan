import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://skantastic.com/", lastModified: new Date() },
    { url: "https://skantastic.com/privacy", lastModified: new Date() },
    { url: "https://skantastic.com/terms", lastModified: new Date() },
  ];
}
