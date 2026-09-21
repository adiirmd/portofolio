"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import type { Certification } from "@/lib/types";

type Props = {
  certification: Certification;
  onClose: () => void;
};

export default function CertificateLightbox({ certification, onClose }: Props) {
  const { t } = useI18n();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Escape closes, and Tab is trapped inside the dialog so keyboard focus
  // cannot wander back to the page behind the overlay.
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>("button, [href]");
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    // The page behind must not scroll while the overlay is open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onKeyDown]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={certification.name}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-sm" aria-hidden />

      <div
        ref={panelRef}
        className="relative flex max-h-full w-full max-w-4xl flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <button ref={closeRef} type="button" onClick={onClose} className="icon-btn ml-auto mb-3 bg-ink-950/60" aria-label={t.labels.close}>
          <X className="h-[18px] w-[18px]" />
        </button>

        <div className="surface overflow-hidden rounded-2xl bg-white p-3 dark:bg-white">
          <Image
            src={certification.image}
            alt={certification.name}
            sizes="(max-width: 896px) 92vw, 896px"
            className="h-auto max-h-[75vh] w-full object-contain"
          />
        </div>

        <p className="mt-3 text-center text-sm text-white/80">{certification.name}</p>
      </div>
    </div>
  );
}
