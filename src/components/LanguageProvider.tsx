"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { copy, defaultLang, type Copy, type Lang } from "@/lib/i18n";

/**
 * Language policy for this site.
 *
 * English is always the starting language. The site never inspects
 * navigator.language, the Accept-Language header, the time zone, or any
 * region signal. The only thing that can ever change the language is the
 * user pressing the language button, and the stored value below is written
 * from that click alone.
 */
const STORAGE_KEY = "lang-user-choice";

type LanguageValue = {
  lang: Lang;
  t: Copy;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageValue | null>(null);

function isLang(value: unknown): value is Lang {
  return value === "en" || value === "id";
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  useEffect(() => {
    try {
      // Only a previous click is honoured here. Anything else keeps English.
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLang(stored)) setLangState(stored);
    } catch {
      /* storage may be unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = copy[lang].htmlLang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable */
    }
  }, []);

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      t: copy[lang],
      setLang,
      toggle: () => setLang(lang === "en" ? "id" : "en"),
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n(): LanguageValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useI18n must be used inside LanguageProvider");
  return context;
}
