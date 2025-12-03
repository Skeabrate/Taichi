"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS, Document } from "@contentful/rich-text-types";
import { ReactNode } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface RichTextRendererProps {
  document: Document;
  className?: string;
  links?: {
    assets?: {
      block?: Array<{
        sys: { id: string };
        url?: string | null;
        title?: string | null;
        description?: string | null;
        contentType?: string | null;
        width?: number | null;
        height?: number | null;
      } | null>;
    };
  };
  onHeadingsExtracted?: (headings: Array<{ id: string; text: string }>) => void;
  useCheckCircleIcons?: boolean;
  blogPostStyle?: boolean;
}

/**
 * Generate a URL-friendly ID from heading text
 */
function generateId(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Extract text content from a node recursively
 */
function extractText(node: any): string {
  if (typeof node === "string") {
    return node;
  }
  if (node?.nodeType === "text") {
    return node.value || "";
  }
  if (node?.content && Array.isArray(node.content)) {
    return node.content.map(extractText).join("");
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }
  return "";
}

export function RichTextRenderer({
  document,
  className,
  links,
  onHeadingsExtracted,
  useCheckCircleIcons = false,
  blogPostStyle = false,
}: RichTextRendererProps) {
  // Create a map of asset IDs to asset data for quick lookup
  const assetMap = new Map<string, any>();
  if (links?.assets?.block) {
    links.assets.block.forEach((asset) => {
      if (asset?.sys?.id) {
        assetMap.set(asset.sys.id, asset);
      }
    });
  }

  // Extract headings for TOC
  if (onHeadingsExtracted && document?.content) {
    const headings: Array<{ id: string; text: string }> = [];
    document.content.forEach((node) => {
      if (node.nodeType === BLOCKS.HEADING_2) {
        const text = extractText(node);
        if (text) {
          const id = generateId(text);
          headings.push({ id, text });
        }
      }
    });
    onHeadingsExtracted(headings);
  }

  const options = {
    renderMark: {
      [MARKS.ITALIC]: (text: ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: ReactNode) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node: any, children: ReactNode) => {
        const text = extractText(node);
        const id = text ? generateId(text) : "";
        return (
          <h2 id={id} className="scroll-mt-2">
            <a
              href={`#${id}`}
              className="text-gray-900 no-underline hover:underline"
            >
              {children}
            </a>
          </h2>
        );
      },
      [BLOCKS.HEADING_3]: (node: any, children: ReactNode) =>
        blogPostStyle ? (
          <h3 className="mb-4">{children}</h3>
        ) : (
          <h3 className="font-eagle-lake mb-4 text-xl font-bold text-red-800 sm:text-2xl">
            {children}
          </h3>
        ),
      [BLOCKS.HEADING_4]: (node: any, children: ReactNode) => (
        <h4 className="text-foreground mb-4 text-base font-semibold sm:text-lg">
          {children}
        </h4>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: ReactNode) => (
        <ul
          className={`mb-4 space-y-2 ${
            useCheckCircleIcons ? "ml-0 list-none" : "ml-6 list-disc"
          }`}
        >
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: ReactNode) => (
        <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: ReactNode) =>
        useCheckCircleIcons ? (
          <li className="mb-2.5 flex items-start gap-3">
            <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
            <div className="flex-1 [&>p]:!m-0 [&>p]:leading-relaxed">
              {children}
            </div>
          </li>
        ) : (
          <li className="pl-2 [&>p]:mb-0">{children}</li>
        ),
      [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode) => (
        <p className="mb-4 leading-relaxed">{children}</p>
      ),
      [INLINES.HYPERLINK]: (node: any, children: ReactNode) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        // Try to get asset from links first, then fall back to node.data.target
        const assetId = node.data.target?.sys?.id;
        const assetFromLinks = assetId ? assetMap.get(assetId) : null;

        const assetData = assetFromLinks || node.data.target?.fields || {};
        const { url, title, description, width, height, contentType } =
          assetData;

        if (!url) return null;

        // Check if it's a video file
        const isVideo =
          contentType?.startsWith("video/") ||
          url.match(/\.(mov|mp4|webm|ogg|avi|wmv|flv|mkv)$/i);

        if (isVideo) {
          return (
            <div className="my-4 w-full">
              <video
                src={url}
                controls
                className="w-full rounded"
                style={{
                  maxWidth: width ? `${width}px` : "100%",
                  height: height ? `${height}px` : "auto",
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          );
        }

        // Render as image for other file types
        // Calculate dimensions maintaining aspect ratio with max height of 500px
        const maxHeight = 500;
        let imageWidth = width || 800;
        let imageHeight = height || 600;

        if (imageHeight > maxHeight) {
          const ratio = maxHeight / imageHeight;
          imageHeight = maxHeight;
          imageWidth = Math.round(imageWidth * ratio);
        }

        return (
          <div className="my-4 flex w-full">
            <Image
              src={url}
              alt={title || description || ""}
              width={imageWidth}
              height={imageHeight}
              className="max-h-[700px] w-full rounded object-contain object-left"
            />
          </div>
        );
      },
    },
  };

  return (
    <div className={className}>
      {documentToReactComponents(document, options)}
    </div>
  );
}
