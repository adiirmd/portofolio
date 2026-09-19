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
  return (
    <>
      <PageHeader eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />

      <section className="shell pb-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialEntries.map(([key, value]) => {
            const Icon = ICONS[key] ?? LinkIcon;
            const href = socialHref(key, value);
            const external = key !== 'email';
            return (
              <li key={key}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="surface surface-hover group flex items-center gap-4 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="faint block text-[11px] uppercase tracking-wide">{key}</span>
                    <span className="block truncate text-sm font-medium">{value}</span>
                  </span>
                  <ArrowUpRight className="muted h-4 w-4 shrink-0 transition group-hover:text-accent-soft" />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
