"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { copy } from "@/lib/i18n";

export default function LanguageToggle() {
  const { lang, t, toggle } = useI18n();
  const next = lang === "en" ? "id" : "en";

  return (
    <button type="button" onClick={toggle} className="icon-btn w-auto gap-1.5 px-3 text-[13px] font-semibold" aria-label={`${t.labels.toggleLanguage}: ${copy[next].label}`} title={copy[next].label}>
      <Languages className="h-[18px] w-[18px]" />
      <span>{t.shortLabel}</span>
    </button>
  );
}
