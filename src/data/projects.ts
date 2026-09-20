import financeTracker from "@/assets/finance-tracker.png";
import webMusic from "@/assets/web-music.png";

import type { ProjectAsset } from "@/lib/types";

export const projects: ProjectAsset[] = [
  {
    id: "financeTracker",
    tech: ["Node.js", "Webhooks", "Google Sheets API", "Telegram Bot API"],
    image: financeTracker,
    link: "https://finance.adiirmd.id",
    github: "https://github.com/adiirmd/FinanceTracker",
  },
  {
    id: "webMusic",
    tech: ["Next.js", "Tailwind CSS", "YouTube Music API"],
    image: webMusic,
    link: "https://music.adiirmd.id",
    github: "https://github.com/adiirmd/arMusic",
  },
];
