import type { Document } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";

export interface TableOfContentsItem {
  id: string;
  text: string;
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

/**
 * Extract h2 headings from a Contentful rich text document
 */
export function extractHeadings(document: Document): TableOfContentsItem[] {
  const headings: TableOfContentsItem[] = [];

  if (!document?.content) {
    return headings;
  }

  document.content.forEach((node) => {
    if (node.nodeType === BLOCKS.HEADING_2) {
      const text = extractText(node);
      if (text) {
        const id = generateId(text);
        headings.push({ id, text });
      }
    }
  });

  return headings;
}
