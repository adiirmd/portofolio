import type { Metadata } from "next";
import BlogContent from "@/components/BlogContent";
import JsonLd from "@/components/JsonLd";
import { defaultCopy, profile } from "@/lib/data";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";

const section = defaultCopy.sections.blog;

export const metadata: Metadata = {
  title: section.title,
  description: section.subtitle,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${section.title} | ${profile.name}`,
    description: section.subtitle,
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: defaultCopy.nav.home, href: "/" },
          { name: section.title, href: "/blog" },
        ])}
      />
      <BlogContent />
    </>
  );
}
