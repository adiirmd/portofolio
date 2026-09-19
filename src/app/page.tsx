import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import JsonLd from '@/components/JsonLd';
import { projects, site } from '@/lib/data';
import { projectsSchema } from '@/lib/schema';

export default function HomePage() {
  const featured = site.sections.featured;

  return (
    <>
      <JsonLd data={projectsSchema()} />
      <Hero />

      <section className="shell py-8 sm:py-12" id="featured">
        <SectionHeading
          eyebrow={featured.eyebrow}
          title={featured.title}
          subtitle={featured.subtitle}
          action={{ label: featured.viewAll, href: '/projects' }}
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
