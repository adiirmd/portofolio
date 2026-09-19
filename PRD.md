# Product Requirements Document (PRD): Web Portfolio Adi Romadhon
 
## 1. Ringkasan
Web portofolio statis untuk Adi Romadhon, seorang IT Infra & Data Center Operator. Web ini harus dioptimasi maksimal untuk SEO (Meta tags, sitemap, JSON-LD) agar gampang masuk AI Overview Google. UI menggunakan dark mode dan harus persis seperti gambar referensi yang dilampirkan.
 
## 2. Tech Stack
* Framework: Next.js 15 (App Router)
* Styling: Tailwind CSS v3
* Bahasa: TypeScript
* Ikon: lucide-react (jangan pakai file gambar untuk ikon sosmed)
* Deployment: Vercel (Mode Static / SSG dengan `output: 'export'`)
 
## 3. Struktur Halaman
* **Home**: Hero section, foto profil, dan highlight project.
* **About**: Detail background kerja (DCO di BTPN Syariah, mantan IT Infra Kemenpora) dan ketertarikan di jaringan, OS, server, serta cyber security.
* **Projects**: List project asli (Finance Tracker & Web Streaming Music).
 
## 4. Aturan Konten (Penting)
Jangan ada teks yang di hardcode di komponen UI. Semua data diri, pengalaman kerja, skill, dan detail portofolio wajib diambil dari file JSON yang ada di folder `src/data/`.
