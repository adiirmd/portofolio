import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import { profile, site } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="glow-backdrop pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="grid-backdrop pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden />

      <div className="shell grid items-center gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-24">
        <div className="animate-fade-up">
          <span className="badge-accent">
            <Sparkles className="h-3.5 w-3.5" />
            {profile.role}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block">{site.hero.greeting}</span>
            <span className="gradient-name mt-1 block pb-1">{profile.name}</span>
          </h1>

          <p className="muted mt-4 text-base font-medium sm:text-lg">
            {profile.role} &middot; {profile.location}
          </p>

          <p className="muted mt-4 max-w-xl text-sm leading-relaxed sm:text-base">{profile.bio}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={site.hero.primaryCta.href} className="btn-primary">
              {site.hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={site.hero.secondaryCta.href} className="btn-ghost">
              {site.hero.secondaryCta.label}
            </Link>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div
            className="absolute -right-4 top-8 hidden h-full w-full rotate-6 rounded-3xl border border-accent/25 bg-accent/5 sm:block"
            aria-hidden
          />
          <div
            className="absolute -right-2 top-4 hidden h-full w-full rotate-3 rounded-3xl border border-accent/20 bg-accent/[0.03] sm:block"
            aria-hidden
          />
          <div className="surface relative overflow-hidden rounded-3xl p-2 animate-float">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/profile.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-top"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-2 rounded-2xl bg-gradient-to-t from-ink-950/60 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
