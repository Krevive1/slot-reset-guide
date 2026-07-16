"use client";

import { usePathname } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

type AffiliateLinkProps = {
  href: string;
  className: string;
  provider: string;
  productName: string;
  ctaLabel: string;
  children: React.ReactNode;
};

// Fires a GA4 "affiliate_click" event on click, then lets the anchor's
// default navigation proceed unmodified (no preventDefault, no waiting on
// the event call). sendGAEvent is a no-op with a console.warn when GA
// hasn't loaded (local dev, GA-less environments, ad blockers) rather than
// throwing, so the link always still opens.
export default function AffiliateLink({
  href,
  className,
  provider,
  productName,
  ctaLabel,
  children,
}: AffiliateLinkProps) {
  const pathname = usePathname();

  const handleClick = () => {
    try {
      let destinationHost = "";
      try {
        destinationHost = new URL(href).hostname;
      } catch {
        destinationHost = "";
      }
      sendGAEvent("event", "affiliate_click", {
        affiliate_provider: provider,
        product_name: productName,
        cta_label: ctaLabel,
        page_path: pathname,
        destination_host: destinationHost,
      });
    } catch {
      // Never let analytics failures (ad blockers, GA not loaded) block navigation.
    }
  };

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
