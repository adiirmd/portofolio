import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import { defaultCopy, profile } from "@/lib/data";

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
  return <ContactContent />;
}
