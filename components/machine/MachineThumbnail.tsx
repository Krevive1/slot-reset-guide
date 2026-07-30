import Image from "next/image";

export default function MachineThumbnail({
  heroImage,
  name,
}: {
  heroImage?: string;
  name: string;
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
        sizes="(max-width: 720px) 100vw, 320px"
        quality={65}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
