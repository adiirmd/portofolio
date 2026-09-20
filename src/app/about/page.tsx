import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";
import JsonLd from "@/components/JsonLd";
import { defaultCopy, profile } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

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
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: defaultCopy.nav.home, href: "/" },
          { name: section.title, href: "/about" },
        ])}
      />
      <AboutContent />
    </>
  );
}
