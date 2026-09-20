import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { copy, defaultCopy, defaultLang, languages, type Copy, type Lang, type NavKey, type ProjectKey } from "@/lib/i18n";

export { copy, defaultCopy, defaultLang, languages, profile, projects, site };
export type { Copy, Lang, NavKey, ProjectKey };
export type { Experience, NavItem, Profile, ProjectAsset, RouteDef } from "@/lib/types";

export const socialEntries = Object.entries(profile.socials) as [string, string][];

export function socialHref(key: string, value: string): string {
  return key === "email" ? `mailto:${value}` : value;
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}
