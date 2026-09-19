import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import JsonLd from '@/components/JsonLd';
import { projects, site } from '@/lib/data';
import { projectsSchema } from '@/lib/schema';

const section = site.sections.projects;

export const metadata: Metadata = {
  title: section.title,
  description: section.subtitle,
  alternates: { canonical: '/projects' },
  openGraph: {
    title: `${section.title} | ${site.brand}`,
    description: section.subtitle,
    url: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={projectsSchema()} />
      <PageHeader eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />

      <section className="shell pb-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
