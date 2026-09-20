import Image, { type StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export default function ProfilePhoto({ src, alt, priority = false, sizes }: Props) {
  return (
    <div className="relative">
      {/* A single thin accent outline adds depth, replacing the stacked cards. */}
      <div className="pointer-events-none absolute inset-0 hidden translate-x-5 translate-y-5 rounded-[28px] border border-accent/25 sm:block" aria-hidden />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-[0_30px_80px_-40px_rgba(2,6,23,0.85)]">
        {/* The backdrop lives in CSS rather than in the image file, so one cutout
            photo works in both themes. */}
        <div className="photo-panel absolute inset-0" aria-hidden />

        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="photo-subject object-contain object-bottom" />

        {/* The hairline follows the theme tokens, so it adapts in light mode. */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px]" style={{ boxShadow: "inset 0 0 0 1px rgb(var(--card-border) / var(--card-border-alpha))" }} aria-hidden />
      </div>
    </div>
  );
}
