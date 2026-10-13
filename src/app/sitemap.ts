import type { MetadataRoute } from "next";
import { site } from "@/content/en";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/app", "/about", "/legal", "/privacy", "/terms", "/cookies"];
  return paths.map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
