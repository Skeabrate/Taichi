"use client";

import { Facebook, Twitter, Link as LinkIcon } from "lucide-react";
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

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-muted/30 border-border rounded-lg border p-6">
      <h3 className="text-foreground font-heading mb-2 text-lg font-semibold">
        Udostępnij
      </h3>
      <p className="text-muted-foreground mb-4 text-sm">
        Podziel się tym artykułem z innymi
      </p>
      <div className="flex items-center gap-3">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary/10 hover:bg-primary text-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:text-white"
          aria-label="Udostępnij na Facebooku"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary/10 hover:bg-primary text-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:text-white"
          aria-label="Udostępnij na X"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <button
          onClick={handleCopyLink}
          className="bg-primary/10 hover:bg-primary text-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:text-white"
          aria-label="Kopiuj link"
        >
          <LinkIcon className="h-5 w-5" />
        </button>
        {copied && (
          <span className="text-primary animate-fade-in text-sm">
            Skopiowano!
          </span>
        )}
      </div>
    </div>
  );
}
