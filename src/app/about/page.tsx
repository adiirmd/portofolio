import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";
import { defaultCopy, profile } from "@/lib/data";

const section = defaultCopy.sections.about;

export const metadata: Metadata = {
  title: section.title,
  description: defaultCopy.profile.bio,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${section.title} | ${profile.name}`,
    description: defaultCopy.profile.bio,
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
