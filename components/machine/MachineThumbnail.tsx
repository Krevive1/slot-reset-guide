import Image from "next/image";

export default function MachineThumbnail({
  heroImage,
  name,
  sizes = "(max-width: 720px) calc(100vw - 64px), 216px",
}: {
  heroImage?: string;
  name: string;
  sizes?: string;
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
        quality={65}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
