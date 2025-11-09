import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS, Document } from "@contentful/rich-text-types";
import { ReactNode } from "react";
import Image from "next/image";

interface RichTextRendererProps {
  document: Document;
  className?: string;
}

export function RichTextRenderer({
  document,
  className,
}: RichTextRendererProps) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: ReactNode) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.HEADING_3]: (node: any, children: ReactNode) => (
        <h3 className="mb-4 text-2xl font-bold">{children}</h3>
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
        const { url, title, description, width, height, contentType } =
          node.data.target.fields || {};
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
        return (
          <div className="my-4 w-full">
            <Image
              src={url}
              alt={title || description || ""}
              width={width || 800}
              height={height || 600}
              className="w-full rounded"
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
