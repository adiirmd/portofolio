import type { MetadataRoute } from "next";
import { posts, site } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = site.routes.map((item) => ({
    url: new URL(item.href === "/" ? "/" : `${item.href}/`, site.url).toString(),
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));

  // Each note carries its own publication date rather than the build time, so
  // crawlers can tell which pages actually changed.
  const notes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: new URL(`/blog/${post.slug}/`, site.url).toString(),
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...routes, ...notes];
}
