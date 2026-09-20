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
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />

        {/* Subtle gradient at the bottom so the photo blends into the page background. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" aria-hidden />

        {/* The hairline follows the theme tokens, so it adapts in light mode. */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px]" style={{ boxShadow: "inset 0 0 0 1px rgb(var(--enhanced-border) / 0.3)" }} aria-hidden />
      </div>
    </div>
  );
}
