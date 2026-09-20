"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useI18n } from "@/components/LanguageProvider";
import { readingMinutes } from "@/lib/data";
import type { Post } from "@/lib/types";

export default function PostContent({ post }: { post: Post }) {
  const { t } = useI18n();
  const section = t.sections.blog;

  return (
    <article className="shell pb-20 pt-8 sm:pt-16">
      <Link href="/blog" className="muted inline-flex items-center gap-1.5 text-[15px] font-medium transition hover:text-accent">
        <ArrowLeft className="h-4 w-4" />
        {section.backToList}
      </Link>

      <div className="faint mt-8 flex flex-wrap items-center gap-2 text-[13px]">
        <span>{t.labels.publishedOn}</span>
        <time dateTime={post.date}>{post.date}</time>
        <span aria-hidden>&middot;</span>
        <span>
          {readingMinutes(post.body)} {t.labels.minuteRead}
        </span>
      </div>

      {/* Everything below is the written text, so it keeps its own language
          regardless of the interface toggle. */}
      <div lang={post.lang}>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl">{post.title}</h1>

        <ul className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li key={tag} className="chip chip-tech">
              {tag}
            </li>
          ))}
        </ul>

        <div className="prose-note mt-10 max-w-3xl">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
