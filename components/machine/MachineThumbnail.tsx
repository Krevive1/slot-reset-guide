import Image from "next/image";

export default function MachineThumbnail({
  heroImage,
  name,
  sizes = "(max-width: 720px) calc(100vw - 64px), 216px",
  quality = 65,
}: {
  heroImage?: string;
  name: string;
  sizes?: string;
  quality?: number;
}) {
  if (!heroImage) {
    return (
      <div className="thumbnail thumbnail-placeholder" aria-hidden="true">
        <span>{name}</span>
      </div>
    );
  }
  return (
    <div className="thumbnail">
      <Image
        src={heroImage}
        alt={name}
        fill
        sizes={sizes}
        quality={quality}
        // Article thumbnails are pre-shrunk (640px webp, ~70KB): serve directly and
        // avoid the Vercel image-optimization quota (402 -> broken thumbnails).
        unoptimized={heroImage.startsWith("/images/articles/")}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
