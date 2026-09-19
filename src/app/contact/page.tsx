import type { Metadata } from 'next';
import { ArrowUpRight, Github, Linkedin, Mail, Link as LinkIcon, type LucideIcon } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile, site, socialEntries, socialHref } from '@/lib/data';

const section = site.sections.contact;

const ICONS: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

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
  const channels = socialEntries.filter(([key]) => key !== 'email');

  return (
    <>
      <PageHeader eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />

      <section className="shell pb-16">
        <div className="surface flex flex-col items-start gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-accent">
              <Mail className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <p className="faint text-xs uppercase tracking-wide">{site.labels.email}</p>
              <p className="mt-1 break-words text-xl font-semibold sm:text-2xl">
                {profile.socials.email}
              </p>
              <p className="muted mt-1.5 text-sm">{section.cta.note}</p>
            </div>
          </div>
          <a href={`mailto:${profile.socials.email}`} className="btn-primary shrink-0">
            {section.cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <h2 className="mt-12 text-2xl font-bold tracking-tight">{site.labels.channels}</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {channels.map(([key, value]) => {
            const Icon = ICONS[key] ?? LinkIcon;
            return (
              <li key={key}>
                <a
                  href={socialHref(key, value)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface surface-hover group flex items-center gap-4 p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="faint block text-xs uppercase tracking-wide">{key}</span>
                    <span className="mt-0.5 block truncate text-[15px] font-medium">{value}</span>
                  </span>
                  <ArrowUpRight className="muted h-[18px] w-[18px] shrink-0 transition group-hover:text-accent-soft" />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
