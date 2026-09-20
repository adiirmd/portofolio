import type { StaticImageData } from "next/image";
import type { Lang, NavKey, ProjectKey } from "@/lib/i18n";

export type Experience = {
  title: string;
  company: string;
  duration: string;
};

export type Profile = {
  name: string;
  socials: Record<string, string>;
  photos: {
    home: StaticImageData;
    about: StaticImageData;
  };
};

export type ProjectAsset = {
  id: ProjectKey;
  tech: readonly string[];
  image: StaticImageData;
  link: string;
  github: string;
};

export type NavItem = {
  key: NavKey;
  href: string;
  label: string;
};

export type RouteDef = {
  key: NavKey;
  href: string;
};

export type Post = {
  slug: string;
  /** Language of the body text, independent of the interface language. */
  lang: Lang;
  /** ISO date, e.g. "2026-09-20". */
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  /** Markdown. */
  body: string;
};
