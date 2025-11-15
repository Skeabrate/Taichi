import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS, Document } from "@contentful/rich-text-types";
import { ReactNode } from "react";
import Image from "next/image";

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
}

export function RichTextRenderer({
  document,
  className,
  links,
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
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => (
        <strong className="font-eagle-lake">{text}</strong>
      ),
      [MARKS.ITALIC]: (text: ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: ReactNode) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.HEADING_3]: (node: any, children: ReactNode) => (
        <h3 className="font-eagle-lake mb-4 text-2xl font-bold text-red-800">
          {children}
        </h3>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: ReactNode) => (
        <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: ReactNode) => (
        <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: ReactNode) => (
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
              className="max-h-[500px] w-auto rounded"
              style={{ maxHeight: "500px", objectFit: "contain" }}
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
