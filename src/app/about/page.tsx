import type { Metadata } from 'next';
import Image from 'next/image';
import { Briefcase, Mail, MapPin, User } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile, site } from '@/lib/data';

const section = site.sections.about;

export const metadata: Metadata = {
  title: section.title,
  description: profile.bio,
  alternates: { canonical: '/about' },
  openGraph: {
    title: `${section.title} | ${profile.name}`,
    description: profile.bio,
    url: '/about',
  },
};

export default function AboutPage() {
  const details = [
    { icon: User, label: site.labels.name, value: profile.name },
    { icon: Briefcase, label: site.labels.role, value: profile.role },
    { icon: MapPin, label: site.labels.location, value: profile.location },
    {
      icon: Mail,
      label: site.labels.email,
      value: profile.socials.email,
      href: `mailto:${profile.socials.email}`,
    },
  ];

  return (
    <>
      <PageHeader eyebrow={section.eyebrow} title={section.title} />

      <section className="shell grid gap-10 pb-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div>
          <p className="muted text-sm leading-relaxed sm:text-base">{profile.bio}</p>

          <h2 className="sr-only">{section.detailTitle}</h2>
          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="surface flex items-center gap-3 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/12 text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <dt className="faint text-[11px] uppercase tracking-wide">{label}</dt>
                  <dd className="break-words text-sm font-medium">
                    {href ? (
                      <a href={href} className="transition hover:text-accent-soft">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-[320px] lg:justify-self-end">
          <div
            className="absolute -right-3 top-5 hidden h-full w-full rotate-6 rounded-3xl border border-accent/25 bg-accent/5 sm:block"
            aria-hidden
          />
          <div className="surface relative overflow-hidden rounded-3xl p-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/profile.jpg"
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 80vw, 360px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-10">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{section.skillTitle}</h2>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {profile.skills.map((skill) => (
            <li key={skill} className="chip px-4 py-1.5 text-xs">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="shell pb-12">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{section.experienceTitle}</h2>
        <ol className="mt-5 space-y-4">
          {profile.experience.map((item) => (
            <li key={`${item.title}-${item.company}`} className="surface surface-hover p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Briefcase className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">{item.title}</h3>
                    <p className="muted mt-1 text-sm">{item.company}</p>
                  </div>
                </div>
                <span className="chip shrink-0 self-start">{item.duration}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
