import type { MetadataRoute } from "next";
import { site } from "@/content/en";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date() },
    { url: `${site.url}/app`, lastModified: new Date() },
  ];
}
