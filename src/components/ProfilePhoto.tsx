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
      <div
        className="photo-frame relative aspect-[4/5] w-full overflow-hidden rounded-[28px]"
        style={{ boxShadow: "0 30px 80px -40px rgba(2, 6, 23, 0.85), var(--photo-halo)" }}
      >
        {/* The backdrop lives in CSS rather than in the image file, so one cutout
            photo works in both themes. */}
        <div className="photo-panel absolute inset-0" aria-hidden />

        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="photo-subject object-contain object-bottom" />
      </div>
    </div>
  );
}
