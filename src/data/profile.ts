import photoHome from "@/assets/photo-home.jpg";
import photoAbout from "@/assets/photo-about.jpg";

import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Adi Romadhon",
  role: "IT Infrastructure & Data Center Operator",
  location: "Jakarta, Indonesia",
  bio: "Saya seorang praktisi IT yang berfokus pada infrastruktur, administrasi server, sistem operasi, serta jaringan dan routing. Saat ini saya menangani operasional infrastruktur data center, memastikan ketersediaan layanan tetap terjaga dan setiap insiden tertangani dengan cepat. Di luar itu saya menaruh minat besar pada web development dan terbiasa merancang automasi untuk menyederhanakan pekerjaan operasional yang berulang.",
  experience: [
    {
      title: "Data Center Operator",
      company: "PT. Jedi Global Teknologi (Placement: Bank BTPN Syariah)",
      duration: "Januari 2026 - Sekarang",
    },
    {
      title: "IT Infrastructure",
      company: "PT. Inovasi Teknologi Makmur (Placement: Kementerian Pemuda dan Olahraga)",
      duration: "Mei 2024 - Desember 2025",
    },
  ],
  skills: ["Linux", "Networking", "Routing", "Server Administration", "Next.js", "Node.js", "Telegram Bot API"],
  socials: {
    portal: "https://link.adiirmd.my.id",
    github: "https://github.com/adiirmd",
    linkedin: "https://www.linkedin.com/in/adi-romadhon-a925062b7/",
    email: "adiromadhon0@gmail.com",
  },
  photos: {
    home: photoHome,
    about: photoAbout,
  },
};
