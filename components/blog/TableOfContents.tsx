"use client";

import { SocialShare } from "./SocialShare";

interface TableOfContentsItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  headings: TableOfContentsItem[];
  shareUrl?: string;
  shareTitle?: string;
}

export function TableOfContents({
  headings,
  shareUrl,
  shareTitle,
}: TableOfContentsProps) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-0 hidden max-h-[90vh] overflow-y-auto pt-8 md:block">
      <div className="rounded-lg border-2 border-gray-200 bg-white p-6">
        <h3 className="mb-5 text-xl font-bold text-gray-900">Spis treści</h3>
        <nav>
          <ol className="space-y-2">
            {headings.map((heading, index) => (
              <li key={heading.id} className="flex gap-3">
                <span className="shrink-0 font-semibold text-gray-400">
                  {index + 1}.
                </span>
                <a
                  href={`#${heading.id}`}
                  className="block text-base text-gray-600 transition-colors hover:text-red-800"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        {shareUrl && shareTitle && (
          <SocialShare url={shareUrl} title={shareTitle} />
        )}
      </div>
    </div>
  );
}
