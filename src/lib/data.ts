import { profile } from "@/data/profile";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { copy, defaultCopy, defaultLang, languages, type Copy, type Lang, type NavKey, type ProjectKey } from "@/lib/i18n";

export { copy, defaultCopy, defaultLang, languages, posts, profile, projects, site };
export type { Copy, Lang, NavKey, ProjectKey };
export type { Experience, NavItem, Post, Profile, ProjectAsset, RouteDef } from "@/lib/types";

export const socialEntries = Object.entries(profile.socials) as [string, string][];

export function socialHref(key: string, value: string): string {
  return key === "email" ? `mailto:${value}` : value;
}

/** Rough reading time, shown next to each note. */
export function readingMinutes(body: string): number {
  return Math.max(1, Math.round(body.trim().split(/\s+/).length / 200));
}

export function postBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}
