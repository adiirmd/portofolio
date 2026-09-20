"use client";

import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { useI18n } from "@/components/LanguageProvider";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  const { t } = useI18n();
  const section = t.sections.featured;

  return (
    <section className="shell pb-16 pt-16" id="featured">
      <SectionHeading eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} action={{ label: section.viewAll, href: "/projects" }} />

      <div className="mt-9 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
