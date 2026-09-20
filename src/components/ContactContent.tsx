"use client";

import { ArrowUpRight, Link as LinkIcon } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useI18n } from "@/components/LanguageProvider";
import { profile } from "@/lib/data";

export default function ContactContent() {
  const { t } = useI18n();
  const section = t.sections.contact;
  const portal = profile.socials.portal;

  return (
    <>
      <PageHeader eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />

      <section className="shell pb-20">
        <div className="surface flex flex-col items-start gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-accent">
              <LinkIcon className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <p className="faint text-xs uppercase tracking-wide">{t.labels.portal}</p>
              <p className="mt-1 break-words text-xl font-semibold sm:text-2xl">{portal.replace(/^https?:\/\//, "")}</p>
              <p className="muted mt-1.5 text-sm">{section.ctaNote}</p>
            </div>
          </div>
          <a href={portal} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
            {section.ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
