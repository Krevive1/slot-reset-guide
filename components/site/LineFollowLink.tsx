"use client";

import { usePathname } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

type LineFollowLinkProps = {
  href: string;
  className: string;
  ctaLabel: string;
  children: React.ReactNode;
};

// Fires a GA4 "line_follow_click" event on click, then lets the anchor's
// default navigation proceed unmodified. Mirrors AffiliateLink.tsx's pattern:
// sendGAEvent never blocks navigation even if GA hasn't loaded.
export default function LineFollowLink({ href, className, ctaLabel, children }: LineFollowLinkProps) {
  const pathname = usePathname();

  const handleClick = () => {
    try {
      sendGAEvent("event", "line_follow_click", {
        cta_label: ctaLabel,
        page_path: pathname,
      });
    } catch {
      // Never let analytics failures (ad blockers, GA not loaded) block navigation.
    }
  };

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      {children}
    </a>
  );
}
