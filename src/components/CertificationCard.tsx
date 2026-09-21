"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import type { Certification } from "@/lib/types";

type Props = {
  certification: Certification;
  onOpen: () => void;
};

/** "2026-09" becomes "September 2026" or "September 2026", following the
 *  interface language rather than the visitor locale. */
function formatMonth(value: string, lang: string) {
  const [year, month] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString(lang, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function CertificationCard({ certification, onOpen }: Props) {
  const { t, lang } = useI18n();

  const dates: string[] = [];
  if (certification.issued) dates.push(`${t.labels.issued} ${formatMonth(certification.issued, lang)}`);
  if (certification.expires) dates.push(`${t.labels.validUntil} ${formatMonth(certification.expires, lang)}`);

  return (
    <article className="surface surface-hover group flex h-full flex-col overflow-hidden">
      <button
        type="button"
        onClick={onOpen}
        className="relative block w-full"
        aria-label={`${t.labels.viewCertificate}: ${certification.name}`}
      >
        {/* Certificates arrive in every shape, from portrait to square to wide
            landscape, so they are contained on a panel instead of cropped. */}
        <div className="photo-panel relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={certification.image}
            alt={certification.name}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 340px"
            className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <span className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-ink-950/60 text-white opacity-0 transition group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-base font-bold leading-snug">{certification.name}</h2>
        <p className="muted mt-1.5 text-[15px] font-normal">{certification.issuer}</p>
        {dates.length > 0 ? <p className="faint mt-2 text-[13px]">{dates.join(" · ")}</p> : null}
      </div>
    </article>
  );
}
