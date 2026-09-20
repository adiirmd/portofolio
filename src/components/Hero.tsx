"use client";

import Link from "next/link";
import ProfilePhoto from "@/components/ProfilePhoto";
import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { profile } from "@/lib/data";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="shell grid items-center gap-12 pb-14 pt-12 sm:pt-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:pb-16 lg:pt-20">
      <div className="animate-fade-up">
        <span className="badge-accent">
          <Sparkles className="h-4 w-4" />
          {t.profile.role}
        </span>

        <h1 className="mt-6 text-[2.75rem] font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4rem]">
          <span className="block">{t.hero.greeting}</span>
          <span className="gradient-name mt-1 block pb-1">{profile.name}</span>
        </h1>

        <p className="muted mt-5 text-lg font-medium">
          {t.profile.role} &middot; {t.profile.location}
        </p>

        <p className="muted mt-5 max-w-2xl text-[17px] leading-[1.75]">{t.profile.bio}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link href="/projects" className="btn-primary">
            {t.hero.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/about" className="btn-ghost">
            {t.hero.secondaryCta}
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full max-w-sm lg:max-w-[400px]">
        <ProfilePhoto src={profile.photos.home} alt={profile.name} priority sizes="(max-width: 1024px) 90vw, 400px" />
      </div>
    </section>
  );
}
