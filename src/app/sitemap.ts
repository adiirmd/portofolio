import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return site.routes.map((item) => ({
    url: new URL(item.href === "/" ? "/" : `${item.href}/`, site.url).toString(),
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
