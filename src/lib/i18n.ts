export type Lang = "en" | "id";

export const languages: Lang[] = ["en", "id"];

/**
 * English is the fixed starting language for every visitor. This value is
 * never derived from the browser language, the request headers, the time
 * zone, or the visitor location. Switching away from it requires an explicit
 * click on the language button.
 */
export const defaultLang: Lang = "en";

const en = {
  htmlLang: "en",
  ogLocale: "en_US",
  label: "English",
  shortLabel: "EN",
  meta: {
    title: "Adi Romadhon | IT Infrastructure & Data Center Operator",
    description: "Portfolio of Adi Romadhon, an IT Infrastructure and Data Center Operator based in Jakarta, Indonesia. My focus is infrastructure, servers, networking, routing, and automation.",
    keywords: ["Adi Romadhon", "adiirmd", "Data Center Operator", "IT Infrastructure", "Networking", "Linux", "Portfolio", "Jakarta"],
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    primaryCta: "See My Projects",
    secondaryCta: "About Me",
  },
  sections: {
    featured: {
      eyebrow: "My Works",
      title: "Featured Projects",
      subtitle: "A few things I have built and keep improving in my spare time.",
      viewAll: "View all",
    },
    about: {
      eyebrow: "Get to know me",
      title: "About Me",
      detailTitle: "Details",
      skillTitle: "Skills",
      experienceTitle: "Experience",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "My Projects",
      subtitle: "Work I have built so far, from small operational automation to full web applications.",
    },
    blog: {
      eyebrow: "Writing",
      title: "Notes",
      subtitle: "Short notes on infrastructure, servers, networking, and the automation I build along the way.",
      empty: "No notes published yet.",
      readMore: "Read note",
      backToList: "All notes",
    },
    contact: {
      eyebrow: "Say hello",
      title: "Get in Touch",
      subtitle: "I am open to a chat, a collaboration, or a new role in infrastructure and technology.",
      ctaLabel: "Open the portal",
      ctaNote: "Every way to reach me sits on one single page.",
    },
  },
  labels: {
    name: "Name",
    location: "Location",
    email: "Email",
    role: "Role",
    liveDemo: "Live demo",
    sourceCode: "Source code",
    techStack: "Tech stack",
    detail: "See details",
    menu: "Menu",
    toggleTheme: "Change theme",
    toggleLanguage: "Change language",
    portal: "Portal",
    publishedOn: "Published",
    minuteRead: "min read",
  },
  profile: {
    role: "IT Infrastructure & Data Center Operator",
    location: "Jakarta, Indonesia",
    bio: "I work in IT with a focus on infrastructure, server administration, operating systems, networking, and routing. These days I look after data center operations, which means keeping services available and making sure every incident is handled quickly. Outside of work I enjoy web development and often build small automations to take the repetitive parts out of daily operations.",
    experience: [
      {
        title: "Data Center Operator",
        company: "PT. Jedi Global Teknologi (placed at Bank BTPN Syariah)",
        duration: "January 2026 until now",
      },
      {
        title: "IT Infrastructure",
        company: "PT. Inovasi Teknologi Makmur (placed at the Ministry of Youth and Sports)",
        duration: "May 2024 until December 2025",
      },
    ],
    skills: ["Linux", "Networking", "Routing", "Server Administration", "Next.js", "Node.js", "Telegram Bot API"],
  },
  projects: {
    financeTracker: {
      title: "Automated Finance Tracker",
      description:
        "A personal finance tracker that records everything on its own. Each transaction notification on my phone is forwarded to a webhook and written straight into Google Sheets. There is a web dashboard for manual edits, plus a Telegram bot that sends a daily recap at 23.58 and pings me every time my spending crosses another 50 thousand rupiah.",
    },
    webMusic: {
      title: "Web Streaming Music Player",
      description: "A streaming music player on the web that pulls its catalog from the YouTube Music API, wrapped in an interface that feels close to Spotify. It can download tracks and show lyrics that follow the song in real time.",
    },
  },
  notFound: {
    title: "This page does not exist",
    description: "The link may be broken or the page has been moved somewhere else.",
    action: "Back to home",
  },
  footer: {
    tagline: "",
    copyright: "All rights reserved.",
  },
};

export type Copy = typeof en;

const id: Copy = {
  htmlLang: "id",
  ogLocale: "id_ID",
  label: "Bahasa Indonesia",
  shortLabel: "ID",
  meta: {
    title: "Adi Romadhon | IT Infrastructure & Data Center Operator",
    description: "Portofolio Adi Romadhon, IT Infrastructure dan Data Center Operator yang berdomisili di Jakarta, Indonesia. Fokus saya pada infrastruktur, server, jaringan, routing, dan automasi.",
    keywords: ["Adi Romadhon", "adiirmd", "Data Center Operator", "IT Infrastructure", "Jaringan", "Linux", "Portofolio", "Jakarta"],
  },
  nav: {
    home: "Beranda",
    about: "Tentang",
    projects: "Project",
    blog: "Blog",
    contact: "Kontak",
  },
  hero: {
    greeting: "Halo, saya",
    primaryCta: "Lihat Project Saya",
    secondaryCta: "Tentang Saya",
  },
  sections: {
    featured: {
      eyebrow: "Karya Saya",
      title: "Project Pilihan",
      subtitle: "Beberapa hal yang saya bangun dan terus saya perbaiki di waktu luang.",
      viewAll: "Lihat semua",
    },
    about: {
      eyebrow: "Kenali Saya",
      title: "Tentang Saya",
      detailTitle: "Detail",
      skillTitle: "Keahlian",
      experienceTitle: "Pengalaman",
    },
    projects: {
      eyebrow: "Portofolio",
      title: "Project Saya",
      subtitle: "Pekerjaan yang sudah saya bangun, mulai dari automasi operasional yang sederhana sampai aplikasi web utuh.",
    },
    blog: {
      eyebrow: "Tulisan",
      title: "Catatan",
      subtitle: "Catatan singkat seputar infrastruktur, server, jaringan, dan automasi yang saya bangun di sepanjang jalan.",
      empty: "Belum ada catatan yang terbit.",
      readMore: "Baca catatan",
      backToList: "Semua catatan",
    },
    contact: {
      eyebrow: "Sapa Saya",
      title: "Hubungi Saya",
      subtitle: "Saya terbuka untuk berdiskusi, berkolaborasi, atau mengisi peran baru di bidang infrastruktur dan teknologi.",
      ctaLabel: "Buka portal",
      ctaNote: "Semua cara untuk menghubungi saya ada dalam satu halaman.",
    },
  },
  labels: {
    name: "Nama",
    location: "Lokasi",
    email: "Email",
    role: "Posisi",
    liveDemo: "Demo langsung",
    sourceCode: "Kode sumber",
    techStack: "Teknologi",
    detail: "Lihat detail",
    menu: "Menu",
    toggleTheme: "Ubah tema",
    toggleLanguage: "Ubah bahasa",
    portal: "Portal",
    publishedOn: "Terbit",
    minuteRead: "menit baca",
  },
  profile: {
    role: "IT Infrastructure & Data Center Operator",
    location: "Jakarta, Indonesia",
    bio: "Saya bekerja di bidang IT dengan fokus pada infrastruktur, administrasi server, sistem operasi, jaringan, dan routing. Saat ini saya menangani operasional data center, yang berarti menjaga layanan tetap tersedia dan memastikan setiap insiden tertangani dengan cepat. Di luar pekerjaan, saya menikmati web development dan sering membuat automasi kecil untuk memangkas pekerjaan operasional yang berulang.",
    experience: [
      {
        title: "Data Center Operator",
        company: "PT. Jedi Global Teknologi (penempatan di Bank BTPN Syariah)",
        duration: "Januari 2026 sampai sekarang",
      },
      {
        title: "IT Infrastructure",
        company: "PT. Inovasi Teknologi Makmur (penempatan di Kementerian Pemuda dan Olahraga)",
        duration: "Mei 2024 sampai Desember 2025",
      },
    ],
    skills: ["Linux", "Jaringan", "Routing", "Administrasi Server", "Next.js", "Node.js", "Telegram Bot API"],
  },
  projects: {
    financeTracker: {
      title: "Automated Finance Tracker",
      description:
        "Pencatat keuangan pribadi yang berjalan sendiri. Setiap notifikasi transaksi di ponsel saya diteruskan ke webhook lalu langsung ditulis ke Google Sheets. Ada dashboard web untuk menyunting data secara manual, ditambah bot Telegram yang mengirim rekap harian pukul 23.58 dan mengingatkan saya setiap pengeluaran menyentuh kelipatan 50 ribu rupiah.",
    },
    webMusic: {
      title: "Web Streaming Music Player",
      description:
        "Pemutar musik streaming berbasis web yang mengambil katalognya dari API YouTube Music, dengan tampilan yang terasa mirip Spotify. Aplikasi ini bisa mengunduh lagu dan menampilkan lirik yang mengikuti lagu secara real time.",
    },
  },
  notFound: {
    title: "Halaman ini tidak ada",
    description: "Tautannya mungkin salah atau halaman ini sudah dipindahkan ke tempat lain.",
    action: "Kembali ke beranda",
  },
  footer: {
    tagline: "",
    copyright: "Seluruh hak cipta dilindungi.",
  },
};

export const copy: Record<Lang, Copy> = { en, id };
export const defaultCopy = copy[defaultLang];

export type NavKey = keyof Copy["nav"];
export type ProjectKey = keyof Copy["projects"];
