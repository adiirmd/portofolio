"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useI18n } from "@/components/LanguageProvider";
import { posts, readingMinutes } from "@/lib/data";

export default function BlogContent() {
  const { t } = useI18n();
  const section = t.sections.blog;

  return (
    <>
      <PageHeader eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />

      <section className="shell pb-20">
        {posts.length === 0 ? (
          <p className="muted text-[17px]">{section.empty}</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="surface surface-hover group flex h-full flex-col p-6">
                  <div className="faint flex flex-wrap items-center gap-2 text-xs">
                    <time dateTime={post.date}>{post.date}</time>
                    <span aria-hidden>&middot;</span>
                    <span>
                      {readingMinutes(post.body)} {t.labels.minuteRead}
                    </span>
                    <span aria-hidden>&middot;</span>
                    <span className="uppercase">{post.lang}</span>
                  </div>

                  {/* The body language is fixed per note, so the title carries
                      its own lang even when the interface is set to the other. */}
                  <h2 lang={post.lang} className="mt-3 text-lg font-semibold leading-snug">
                    {post.title}
                  </h2>

                  <p lang={post.lang} className="muted mt-3 text-[15px] leading-[1.7]">
                    {post.excerpt}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <li key={tag} className="chip chip-tech">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <span className="divider-top mt-auto flex items-center gap-1.5 pt-6 text-[15px] font-medium text-accent">
                    {section.readMore}
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
