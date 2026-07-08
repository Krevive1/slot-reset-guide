"use client";

import { useState } from "react";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      className: "share-x",
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: "share-facebook",
    },
    {
      label: "はてブ",
      href: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
      className: "share-hatebu",
    },
    {
      label: "Pocket",
      href: `https://getpocket.com/save?url=${encodedUrl}&title=${encodedTitle}`,
      className: "share-pocket",
    },
    {
      label: "LINE",
      href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
      className: "share-line",
    },
  ];

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — button simply won't confirm.
    }
  }

  return (
    <div className="share-buttons">
      <p className="share-buttons-title">シェアする</p>
      <div className="share-buttons-grid">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`share-button ${link.className}`}
          >
            {link.label}
          </a>
        ))}
        <button type="button" className="share-button share-copy" onClick={handleCopy}>
          {copied ? "コピーしました" : "リンクをコピー"}
        </button>
      </div>
    </div>
  );
}
