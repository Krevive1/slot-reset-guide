import { Machine } from "@/lib/content/schema";

// Optional per-machine editorial blocks. Machines without originalView render
// nothing and the page looks exactly as before.
export default function OriginalView({ blocks }: { blocks?: Machine["originalView"] }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <section aria-labelledby="original-view-heading">
      <h2 id="original-view-heading">編集部の見方</h2>
      {blocks.map((block) => (
        <div key={block.heading}>
          <h3>{block.heading}</h3>
          <p>{block.body}</p>
        </div>
      ))}
    </section>
  );
}
