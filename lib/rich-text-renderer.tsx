"use client";

import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { generateId, extractText } from "./heading-utils";

interface RichTextRendererProps {
  content: any; // Hygraph raw JSON
  references?: any[]; // Asset references
  className?: string;
  useCheckCircleIcons?: boolean;
  blogPostStyle?: boolean;
}

export function RichTextRenderer({
  content,
  references,
  className,
  useCheckCircleIcons = false,
  blogPostStyle = false,
}: RichTextRendererProps) {
  if (!content) return null;

  return (
    <div className={className}>
      <RichText
        content={content}
        references={references}
        renderers={{
          h2: ({ children }) => {
            const text = extractText(children);
            const id = text ? generateId(text) : "";
            return (
              <h2 id={id} className="scroll-mt-24">
                {blogPostStyle ? (
                  <a
                    href={`#${id}`}
                    className="text-gray-900 no-underline hover:underline"
                  >
                    {children}
                  </a>
                ) : (
                  children
                )}
              </h2>
            );
          },
          h3: ({ children }) =>
            blogPostStyle ? (
              <h3 className="mb-4">{children}</h3>
            ) : (
              <h3 className="font-eagle-lake mb-4 text-xl font-bold text-red-800 sm:text-2xl">
                {children}
              </h3>
            ),
          h4: ({ children }) => (
            <h4 className="text-foreground mb-4 text-base font-semibold sm:text-lg">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul
              className={`mb-4 space-y-2 ${
                useCheckCircleIcons ? "ml-0 list-none" : "ml-6 list-disc"
              }`}
            >
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
          ),
          li: ({ children }) =>
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
          a: ({ children, href, openInNewTab }) => (
            <a
              href={href}
              target={openInNewTab ? "_blank" : undefined}
              rel={openInNewTab ? "noopener noreferrer" : undefined}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {children}
            </a>
          ),
          img: ({ src, altText, width, height }) => {
            if (!src) return null;

            // Check if it's a video file
            const isVideo = src.match(/\.(mov|mp4|webm|ogg|avi|wmv|flv|mkv)$/i);

            if (isVideo) {
              return (
                <div className="my-4 w-full">
                  <video
                    src={src}
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
                  src={src}
                  alt={altText || ""}
                  width={imageWidth}
                  height={imageHeight}
                  className="max-h-[700px] w-full rounded object-contain object-left"
                />
              </div>
            );
          },
          bold: ({ children }) => <strong>{children}</strong>,
          italic: ({ children }) => <em>{children}</em>,
          underline: ({ children }) => <u>{children}</u>,
        }}
      />
    </div>
  );
}
