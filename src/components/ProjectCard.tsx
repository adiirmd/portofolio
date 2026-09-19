import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';
import { site, type Project } from '@/lib/data';

const dividerStyle = { borderTop: '1px solid rgb(var(--border) / var(--border-alpha))' };

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface surface-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn h-9 w-9 shrink-0"
            aria-label={`${site.labels.liveDemo}: ${project.title}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="muted mt-3 text-[15px] leading-[1.7]">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-5 pt-6" style={dividerStyle}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-accent-soft transition hover:text-accent"
          >
            {site.labels.liveDemo}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="muted inline-flex items-center gap-1.5 text-[15px] font-medium transition hover:text-accent-soft"
          >
            <Github className="h-4 w-4" />
            {site.labels.sourceCode}
          </a>
        </div>
      </div>
    </article>
  );
}
