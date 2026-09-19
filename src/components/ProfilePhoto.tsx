import Image, { type StaticImageData } from 'next/image';

type Props = {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export default function ProfilePhoto({ src, alt, priority = false, sizes }: Props) {
  return (
    <div className="relative">
      {/* Satu garis aksen tipis sebagai kedalaman, menggantikan kartu bertumpuk. */}
      <div
        className="pointer-events-none absolute inset-0 hidden translate-x-5 translate-y-5 rounded-[28px] border border-accent/25 sm:block"
        aria-hidden
      />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-[0_30px_80px_-40px_rgba(2,6,23,0.85)]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />

        {/* Gradien tipis di dasar foto supaya menyatu dengan latar halaman. */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent"
          aria-hidden
        />

        {/* Hairline mengikuti token tema, jadi ikut berubah di mode terang. */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[28px]"
          style={{ boxShadow: 'inset 0 0 0 1px rgb(var(--border) / calc(var(--border-alpha) + 0.06))' }}
          aria-hidden
        />
      </div>
    </div>
  );
}
