"use client";

import { useEffect, useState } from "react";
import { SocialShare } from "./SocialShare";
import { HeadingItemType } from "@/lib/heading-utils";

interface TableOfContentsProps {
  headings: HeadingItemType[];
  shareUrl?: string;
  shareTitle?: string;
}

export function TableOfContents({
  headings,
  shareUrl,
  shareTitle,
}: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" },
    );

    headings.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Table of Contents */}
      <div className="bg-muted/30 border-border rounded-lg border p-6">
        <h3 className="text-foreground font-heading mb-4 text-lg font-semibold">
          Spis treści
        </h3>
        <nav>
          <ol className="space-y-2">
            {headings.map((item, index) => (
              <li key={item.id} className="flex items-start gap-2">
                <span
                  className={`min-w-[20px] text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {index + 1}.
                </span>
                <a
                  href={`#${item.id}`}
                  className={`hover:text-primary cursor-pointer text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-primary border-primary -ml-2 border-l-2 pl-2 font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* Share section */}
      {shareUrl && shareTitle && (
        <SocialShare url={shareUrl} title={shareTitle} />
      )}
    </div>
  );
}
