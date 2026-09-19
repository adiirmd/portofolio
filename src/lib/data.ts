import profileJson from '@/data/profile.json';
import projectsJson from '@/data/projects.json';
import siteJson from '@/data/site.json';

export type Experience = {
  title: string;
  company: string;
  duration: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  bio: string;
  experience: Experience[];
  skills: string[];
  socials: Record<string, string>;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
};

export type NavItem = { label: string; href: string };

export const profile = profileJson as Profile;
export const projects = projectsJson as Project[];
export const site = siteJson;
export const nav = siteJson.nav as NavItem[];

export const socialEntries = Object.entries(profile.socials) as [string, string][];

export function socialHref(key: string, value: string): string {
  return key === 'email' ? `mailto:${value}` : value;
}

export function absoluteUrl(path = '/'): string {
  return new URL(path, site.url).toString();
}
