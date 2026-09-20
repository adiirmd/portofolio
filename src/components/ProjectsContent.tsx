"use client";

import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { useI18n } from "@/components/LanguageProvider";
import { projects } from "@/lib/data";

export default function ProjectsContent() {
  const { t } = useI18n();
  const section = t.sections.projects;

  return (
    <>
      <PageHeader eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />

      <section className="shell pb-20 pt-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
