"use client";

import { useI18n } from "@/components/LanguageProvider";
import { profile } from "@/lib/data";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="section-divider">
      <div className="shell py-4">
        <p className="faint text-center text-[11px]">
          © {new Date().getFullYear()} {profile.name}. {t.footer.copyright}
        </p>
        <p className="faint mt-0.5 text-center text-[9px]">{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
