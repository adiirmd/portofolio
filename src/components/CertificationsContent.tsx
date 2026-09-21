"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import CertificationCard from "@/components/CertificationCard";
import CertificateLightbox from "@/components/CertificateLightbox";
import { useI18n } from "@/components/LanguageProvider";
import { certifications } from "@/lib/data";

export default function CertificationsContent() {
  const { t } = useI18n();
  const section = t.sections.certifications;
  const [openId, setOpenId] = useState<string | null>(null);

  const active = certifications.find((item) => item.id === openId) ?? null;

  return (
    <>
      <PageHeader eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />

      <section className="shell pb-20">
        {certifications.length === 0 ? (
          <p className="muted text-[17px]">{section.empty}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
                onOpen={() => setOpenId(certification.id)}
              />
            ))}
          </div>
        )}
      </section>

      {active ? <CertificateLightbox certification={active} onClose={() => setOpenId(null)} /> : null}
    </>
  );
}
