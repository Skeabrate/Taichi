"use client";

import { Facebook, Twitter, Copy, Check } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mt-6 border-t border-gray-200 pt-6">
      <h3 className="mb-2 text-xl font-bold text-gray-900">Udostępnij</h3>
      <p className="mb-3 text-base text-gray-600">
        Podziel się tym artykułem z innymi
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-3 text-gray-700 transition-colors hover:border-red-800 hover:bg-red-50 hover:text-red-800"
          title="Udostępnij na Facebooku"
          aria-label="Udostępnij na Facebooku"
        >
          <Facebook size={20} />
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-3 text-gray-700 transition-colors hover:border-red-800 hover:bg-red-50 hover:text-red-800"
          title="Udostępnij na X"
          aria-label="Udostępnij na X"
        >
          <Twitter size={20} />
        </a>
        <button
          onClick={handleCopy}
          className="flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-3 text-gray-700 transition-colors hover:border-red-800 hover:bg-red-50 hover:text-red-800"
          title={copied ? "Skopiowano!" : "Kopiuj link"}
          aria-label={copied ? "Skopiowano!" : "Kopiuj link"}
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </button>
      </div>
    </div>
  );
}
