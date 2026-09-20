import type { Post } from "@/lib/types";

/**
 * Each note carries its own language. The interface still follows the
 * language toggle, but the body is never translated, so the text a reader
 * sees is always the text that was actually written.
 *
 * Newest first. The list order is what the blog page renders.
 */
export const posts: Post[] = [
  {
    slug: "catatan-operasional-data-center",
    lang: "id",
    date: "2026-09-20",
    title: "Tiga Kebiasaan Kecil yang Menyelamatkan Shift Malam di Data Center",
    excerpt:
      "Sebagian besar insiden yang saya tangani bukan kegagalan besar, melainkan hal kecil yang terlewat. Tiga kebiasaan ini yang paling sering menyelamatkan shift saya.",
    tags: ["Data Center", "Operasional", "Monitoring"],
    body: `Sebagian besar insiden yang saya tangani selama menjaga operasional data center bukan kegagalan besar yang dramatis. Justru hal kecil yang terlewat: satu alert yang sudah berbunyi sejak sore tapi tidak ada yang membaca, atau satu perubahan yang tidak dicatat.

## Membaca alert yang sudah ada sebelum shift dimulai

Lima belas menit pertama setiap shift saya pakai untuk membaca alert yang belum tertutup, bukan untuk menunggu alert baru. Banyak masalah besar sebenarnya sudah mengirim sinyal berjam jam sebelumnya.

## Mencatat setiap perubahan, sekecil apa pun

Perubahan yang tidak dicatat adalah perubahan yang tidak bisa dibatalkan dengan tenang saat jam dua pagi. Satu baris catatan berisi apa yang diubah, kapan, dan alasannya sudah cukup.

## Menguji jalur eskalasi saat keadaan tenang

Nomor kontak yang salah baru ketahuan salah ketika benar benar dibutuhkan. Saya memeriksanya secara berkala di saat tidak ada insiden, supaya jalurnya sudah pasti benar ketika keadaan sedang buruk.

Tiga hal ini tidak terlihat canggih, tetapi dampaknya jauh lebih besar daripada alat pemantauan baru mana pun yang pernah saya pasang.`,
  },
];
