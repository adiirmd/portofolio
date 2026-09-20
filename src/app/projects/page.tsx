import type { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";
import JsonLd from "@/components/JsonLd";
import { defaultCopy, site } from "@/lib/data";
import { breadcrumbSchema, projectsSchema } from "@/lib/schema";

const section = defaultCopy.sections.projects;

export const metadata: Metadata = {
  title: section.title,
  description: section.subtitle,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${section.title} | ${site.brand}`,
    description: section.subtitle,
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={projectsSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: defaultCopy.nav.home, href: "/" },
          { name: section.title, href: "/projects" },
        ])}
      />
      <ProjectsContent />
    </>
  );
}
