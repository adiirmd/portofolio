import type { StaticImageData } from "next/image";
import type { NavKey, ProjectKey } from "@/lib/i18n";

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

