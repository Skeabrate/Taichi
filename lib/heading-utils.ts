/**
 * Generate a URL-friendly ID from heading text, preserving Polish characters
 */
export function generateId(text: string): string {
  return (
    text
      .toLowerCase()
      .trim()
      // Keep Polish characters (ą, ć, ę, ł, ń, ó, ś, ź, ż), alphanumeric, spaces, and hyphens
      .replace(/[^a-ząćęłńóśźż0-9\s-]/gi, "")
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, "")
  ); // Remove leading/trailing hyphens
}

/**
 * Extract text content from a node recursively
 */
export function extractText(node: any): string {
  if (typeof node === "string") {
    return node;
  }
  // Hygraph text nodes have a direct 'text' property
  if (node?.text !== undefined) {
    return node.text;
  }
  // React element from RichText renderer - check props.content
  if (node?.props?.content && Array.isArray(node.props.content)) {
    return node.props.content.map(extractText).join("");
  }
  // React children
  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }
  // React element props
  if (node?.props?.children) {
    return extractText(node.props.children);
  }
  // Hygraph children array
  if (node?.children && Array.isArray(node.children)) {
    return node.children.map(extractText).join("");
  }
  return "";
}

export interface HeadingItemType {
  id: string;
  text: string;
}

/**
 * Extract h2 headings from a Hygraph rich text document
 */
export function extractHeadings(content: any): HeadingItemType[] {
  const headings: HeadingItemType[] = [];

  if (!content) {
    return headings;
  }

  // The content is already an object with children array
  const children = content.children;
  if (!Array.isArray(children)) {
    return headings;
  }

  children.forEach((node: any) => {
    // Hygraph uses 'heading-two' for h2 elements
    if (node.type === "heading-two") {
      const text = extractText(node);
      if (text) {
        const id = generateId(text);
        headings.push({ id, text });
      }
    }
  });

  return headings;
}
