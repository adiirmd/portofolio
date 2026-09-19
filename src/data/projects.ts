import financeTracker from '@/assets/finance-tracker.jpg';
import webMusic from '@/assets/web-music.jpg';

import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    title: 'Automated Finance Tracker',
    description: 'Sistem pencatatan keuangan pribadi yang berjalan otomatis. Setiap notifikasi transaksi pada ponsel diteruskan ke webhook lalu ditulis langsung ke Google Sheets. Dilengkapi dashboard web untuk penyuntingan manual serta bot Telegram yang mengirim rekap harian pukul 23.58 dan peringatan setiap pengeluaran mencapai kelipatan 50 ribu sebagai alat kontrol finansial.',
    tech: [
      'Node.js',
      'Webhooks',
      'Google Sheets API',
      'Telegram Bot API',
    ],
    image: financeTracker,
    link: 'https://finance.adiirmd.my.id',
    github: 'https://github.com/adiirmd/FinanceTracker',
  },
  {
    title: 'Web Streaming Music Player',
    description: 'Aplikasi web pemutar musik streaming yang mengambil data dari API YouTube Music dengan antarmuka menyerupai Spotify. Menyediakan berbagai fitur seperti pengunduhan lagu dan penayangan lirik secara real time.',
    tech: [
      'Next.js',
      'Tailwind CSS',
      'YouTube Music API',
    ],
    image: webMusic,
    link: 'https://music.adiirmd.my.id',
    github: 'https://github.com/adiirmd/arMusic',
  },
];
