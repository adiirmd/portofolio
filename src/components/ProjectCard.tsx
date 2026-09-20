"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import type { ProjectAsset } from "@/lib/types";

export default function ProjectCard({ project }: { project: ProjectAsset }) {
  const { t } = useI18n();
  const content = t.projects[project.id];

  return (
    <article className="surface surface-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={project.image} alt={content.title} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" aria-hidden />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug">{content.title}</h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-btn h-9 w-9 shrink-0" aria-label={`${t.labels.liveDemo}: ${content.title}`}>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="muted mt-3 flex-1 text-[15px] leading-[1.7]">{content.description}</p>

        <div className="mt-6">
          <p className="faint text-[11px] font-semibold uppercase tracking-[0.14em]">{t.labels.techStack}</p>
          <ul className="mt-2.5 flex flex-wrap gap-x-2 gap-y-2">
            {project.tech.map((tech) => (
              <li key={tech} className="chip chip-tech">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="divider-top mt-6 flex flex-wrap items-center gap-5 pt-5">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[15px] font-medium text-accent transition hover:opacity-80">
            {t.labels.liveDemo}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="muted inline-flex items-center gap-1.5 text-[15px] font-medium transition hover:text-accent">
            <Github className="h-4 w-4" />
            {t.labels.sourceCode}
          </a>
        </div>
      </div>
    </article>
  );
}
