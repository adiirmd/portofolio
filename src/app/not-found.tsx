"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <section className="shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="gradient-name text-6xl font-bold sm:text-7xl">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{t.notFound.title}</h1>
      <p className="muted mt-3 max-w-md text-sm sm:text-base">{t.notFound.description}</p>
      <Link href="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" />
        {t.notFound.action}
      </Link>
    </section>
  );
}
