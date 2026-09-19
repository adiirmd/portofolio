import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';
import { profile, site } from '@/lib/data';

export default function Hero() {
  return (
    <section className="shell grid items-center gap-12 pb-14 pt-12 sm:pt-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:pb-16 lg:pt-20">
      <div className="animate-fade-up">
        <span className="badge-accent">
          <Sparkles className="h-4 w-4" />
          {profile.role}
        </span>

        <h1 className="mt-6 text-[2.75rem] font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4rem]">
          <span className="block">{site.hero.greeting}</span>
          <span className="gradient-name mt-1 block pb-1">{profile.name}</span>
        </h1>

        <p className="muted mt-5 text-lg font-medium">
          {profile.role} &middot; {profile.location}
        </p>

        <p className="muted mt-5 max-w-2xl text-[17px] leading-[1.75]">{profile.bio}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link href={site.hero.primaryCta.href} className="btn-primary">
            {site.hero.primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href={site.hero.secondaryCta.href} className="btn-ghost">
            {site.hero.secondaryCta.label}
          </Link>
        </div>

        <SocialLinks className="mt-9" />
      </div>

      <div className="relative mx-auto w-full max-w-sm lg:max-w-[400px]">
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
    </section>
  );
}
