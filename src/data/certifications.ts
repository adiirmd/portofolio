import aseanAiCareer from "@/assets/certs/asean-ai-career.webp";
import ciscoNetworkingBasics from "@/assets/certs/cisco-networking-basics.webp";
import dlinkCna from "@/assets/certs/dlink-cna.webp";
import mikrotikMtcna from "@/assets/certs/mikrotik-mtcna.webp";
import redhatRhsa1 from "@/assets/certs/redhat-rhsa1.webp";
import rtlCllmsp from "@/assets/certs/rtl-cllmsp.webp";
import tplinkOcnaRouting from "@/assets/certs/tplink-ocna-routing.webp";
import tplinkOcnaWireless from "@/assets/certs/tplink-ocna-wireless.webp";

import type { Certification } from "@/lib/types";

/**
 * Names and issuers are proper nouns, so they stay out of the translation
 * files and live here. Write new entries anywhere in this list, the order on
 * the page is derived below.
 */
const entries: Certification[] = [
  {
    id: "asean-ai-career",
    name: "AI Career Readiness Training",
    issuer: "ASEAN Foundation",
    issued: "2026-09",
    image: aseanAiCareer,
  },
  {
    id: "redhat-rhsa1",
    name: "Red Hat System Administration I",
    issuer: "Red Hat Academy",
    issued: "2026-06",
    image: redhatRhsa1,
  },
  {
    id: "rtl-cllmsp",
    name: "Certified LLM Security Professional (CLLMSP)",
    issuer: "Red Team Leaders",
    issued: "2026-06",
    image: rtlCllmsp,
  },
  {
    id: "cisco-networking-basics",
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    issued: "2026-03",
    image: ciscoNetworkingBasics,
  },
  {
    id: "tplink-ocna-routing",
    name: "Omada Certified Network Administrator (OCNA) Routing & Switching",
    issuer: "TP-Link",
    issued: "2025-07",
    expires: "2028-07",
    image: tplinkOcnaRouting,
  },
  {
    id: "dlink-cna",
    name: "D-Link Certified Network Associate",
    issuer: "D-Link",
    issued: "2025-04",
    expires: "2027-04",
    image: dlinkCna,
  },
  {
    id: "tplink-ocna-wireless",
    name: "Omada Certified Network Administrator (OCNA) Wireless",
    issuer: "TP-Link",
    issued: "2025-02",
    expires: "2028-02",
    image: tplinkOcnaWireless,
  },
  {
    id: "mikrotik-mtcna",
    name: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    issued: "2024-09",
    expires: "2027-09",
    image: mikrotikMtcna,
  },
];

/**
 * Newest first, derived from the issue date instead of the order written
 * above, so adding a certificate cannot put the list out of sequence. The
 * "YYYY-MM" form sorts chronologically as plain text. An entry without an
 * issue date falls to the bottom, and Array.prototype.sort is stable, so
 * entries sharing the same month keep the order written above.
 */
export const certifications: Certification[] = [...entries].sort((a, b) =>
  (b.issued ?? "").localeCompare(a.issued ?? ""),
);
