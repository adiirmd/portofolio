import type { Metadata } from 'next';
import { ArrowUpRight, Link as LinkIcon } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile, site } from '@/lib/data';

const section = site.sections.contact;

export const metadata: Metadata = {
  title: section.title,
  description: section.subtitle,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `${section.title} | ${profile.name}`,
    description: section.subtitle,
    url: '/contact',
  },
};

export default function ContactPage() {
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
              <p className="faint text-xs uppercase tracking-wide">{site.labels.portal}</p>
              <p className="mt-1 break-words text-xl font-semibold sm:text-2xl">
                {portal.replace(/^https?:\/\//, '')}
              </p>
              <p className="muted mt-1.5 text-sm">{section.cta.note}</p>
            </div>
          </div>
          <a
            href={portal}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            {section.cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
