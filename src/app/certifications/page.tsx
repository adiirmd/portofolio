import type { Metadata } from "next";
import CertificationsContent from "@/components/CertificationsContent";
import JsonLd from "@/components/JsonLd";
import { defaultCopy, profile } from "@/lib/data";
import { breadcrumbSchema, certificationsSchema } from "@/lib/schema";

const section = defaultCopy.sections.certifications;

export const metadata: Metadata = {
  title: section.title,
  description: section.subtitle,
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: `${section.title} | ${profile.name}`,
    description: section.subtitle,
    url: "/certifications",
  },
};

export default function CertificationsPage() {
  return (
    <>
      <JsonLd data={certificationsSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: defaultCopy.nav.home, href: "/" },
          { name: section.title, href: "/certifications" },
        ])}
      />
      <CertificationsContent />
    </>
  );
}
