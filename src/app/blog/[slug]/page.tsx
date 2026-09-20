import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import PostContent from "@/components/PostContent";
import { defaultCopy, posts, postBySlug, profile } from "@/lib/data";
import { breadcrumbSchema, postSchema } from "@/lib/schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [profile.name],
      locale: post.lang === "id" ? "id_ID" : "en_US",
    },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = postBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <JsonLd data={postSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: defaultCopy.nav.home, href: "/" },
          { name: defaultCopy.sections.blog.title, href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ])}
      />
      <PostContent post={post} />
    </>
  );
}
