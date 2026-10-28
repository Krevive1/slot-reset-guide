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
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
