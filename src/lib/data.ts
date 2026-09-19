import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { site } from '@/data/site';
import type { NavItem } from '@/lib/types';

export type { Experience, NavItem, Profile, Project } from '@/lib/types';
export { profile, projects, site };

export const nav = site.nav as NavItem[];

export const socialEntries = Object.entries(profile.socials) as [string, string][];

export function socialHref(key: string, value: string): string {
  return key === 'email' ? `mailto:${value}` : value;
}

export function absoluteUrl(path = '/'): string {
  return new URL(path, site.url).toString();
}
