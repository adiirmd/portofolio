import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import JsonLd from "@/components/JsonLd";
import { defaultCopy, profile } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";

const section = defaultCopy.sections.contact;

export const metadata: Metadata = {
  title: section.title,
  description: section.subtitle,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${section.title} | ${profile.name}`,
    description: section.subtitle,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: defaultCopy.nav.home, href: "/" },
          { name: section.title, href: "/contact" },
        ])}
      />
      <ContactContent />
    </>
  );
}
