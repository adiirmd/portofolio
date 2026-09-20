"use client";

import { Briefcase, Mail, MapPin, User } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ProfilePhoto from "@/components/ProfilePhoto";
import { useI18n } from "@/components/LanguageProvider";
import { profile } from "@/lib/data";

export default function AboutContent() {
  const { t } = useI18n();
  const section = t.sections.about;

  const details = [
    { icon: User, label: t.labels.name, value: profile.name },
    { icon: Briefcase, label: t.labels.role, value: t.profile.role },
    { icon: MapPin, label: t.labels.location, value: t.profile.location },
    {
      icon: Mail,
      label: t.labels.email,
      value: profile.socials.email,
      href: `mailto:${profile.socials.email}`,
    },
  ];

  return (
    <>
      <PageHeader eyebrow={section.eyebrow} title={section.title} subtitle={t.profile.bio} />

      <section className="section-divider shell grid gap-10 pb-14 pt-16 lg:grid-cols-[1fr_340px] lg:items-start lg:gap-14">
        <div>
          <h2 className="sr-only">{section.detailTitle}</h2>
          <dl className="grid gap-3 sm:grid-cols-2">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="surface flex items-center gap-3.5 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <dt className="faint text-xs uppercase tracking-wide">{label}</dt>
                  <dd className="mt-0.5 break-words text-[15px] font-medium">
                    {href ? (
                      <a href={href} className="transition hover:text-accent">
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

          <h2 className="mt-12 text-2xl font-bold tracking-tight">{section.skillTitle}</h2>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {t.profile.skills.map((skill) => (
              <li key={skill} className="chip px-4 py-2 text-[13px]">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-xs lg:sticky lg:top-28 lg:max-w-none">
          <ProfilePhoto src={profile.photos.about} alt={profile.name} sizes="(max-width: 1024px) 80vw, 340px" />
        </div>
      </section>

      <section className="section-divider shell pb-16 pt-16">
        <h2 className="text-2xl font-bold tracking-tight">{section.experienceTitle}</h2>
        <ol className="mt-6 space-y-4">
          {t.profile.experience.map((item) => (
            <li key={`${item.title}-${item.company}`} className="surface surface-hover p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="muted mt-1.5 text-[15px]">{item.company}</p>
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
