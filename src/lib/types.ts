import type { StaticImageData } from 'next/image';

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
  photos: {
    home: StaticImageData;
    about: StaticImageData;
  };
  experience: Experience[];
  skills: string[];
  socials: Record<string, string>;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: StaticImageData;
  link: string;
  github: string;
};

export type NavItem = { label: string; href: string };
