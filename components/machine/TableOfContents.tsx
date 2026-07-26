import { Machine } from "@/lib/content/schema";
import { getAvailableTocSections, TOC_IDS } from "@/lib/content/toc";

// Plain <nav>/<a> anchor links only -- no JS-driven scrolling, no client
// component. Works with JS disabled, supports direct #hash access, and back
// button navigation for free because it's just normal browser anchor
// behavior. Smooth-scroll and reduced-motion handling live in globals.css.
export default function TableOfContents({ machine }: { machine: Machine }) {
  const sections = getAvailableTocSections(machine);
  if (sections.length === 0) return null;

  return (
    <nav className="machine-toc" aria-label="このページの目次">
      <p className="machine-toc-heading">このページの目次</p>
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={
              section.priority === "primary"
                ? "machine-toc-item machine-toc-item--primary"
                : "machine-toc-item"
            }
          >
            <a
              href={`#${section.id}`}
              className={
                section.id === TOC_IDS.quitTiming
                  ? "machine-toc-link machine-toc-link--quit"
                  : "machine-toc-link"
              }
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
