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
 * Newest first, since that is what a reader looks for. Names and issuers are
 * proper nouns, so they stay out of the translation files and live here.
 */
export const certifications: Certification[] = [
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
