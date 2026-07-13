import { isNewMachine } from "@/lib/content/badges";

export default function NewBadge({ releaseDate }: { releaseDate?: string }) {
  if (!isNewMachine(releaseDate)) return null;
  return (
    <span className="new-badge" aria-label="導入から3ヶ月以内の新台">
      NEW
    </span>
  );
}
