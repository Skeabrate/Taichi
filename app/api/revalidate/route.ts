import { revalidatePath } from "next/cache";
import { REVALIDATE_SECRET } from "@/lib/envs";

export async function POST(request: Request) {
  const secret = request.headers.get("authorization");

  if (secret !== REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const payload = await request.json();
    const contentTypeId =
      payload?.sys?.contentType?.sys?.id || payload?.contentType?.sys?.id;

    if (!contentTypeId) {
      return new Response("Invalid payload: missing contentType", {
        status: 400,
      });
    }

    const revalidatedPaths: string[] = [];

    // Handle mainPage content type
    if (contentTypeId === "mainPage" || contentTypeId === "classesSchedule") {
      revalidatePath("/", "page");
      revalidatedPaths.push("/");
    }
    // Handle blog content type
    else if (contentTypeId === "blog") {
      revalidatePath("/blog", "page");
      revalidatePath("/blog/page", "page");
      revalidatedPaths.push("/blog", "/blog/page");
    }
    // Handle blogPost content type
    else if (contentTypeId === "blogPost") {
      // Revalidate blog listing pages
      revalidatePath("/blog", "page");
      revalidatePath("/blog/page", "page");
      revalidatedPaths.push("/blog", "/blog/page");

      const slug =
        payload?.fields?.slug?.["en-US"] ||
        payload?.fields?.slug ||
        payload?.slug;

      if (slug) {
        revalidatePath(`/blog/${slug}`, "page");
        revalidatedPaths.push(`/blog/${slug}`);
      }
    }

    // Always revalidate sitemap and robots
    revalidatePath("/sitemap.xml", "page");
    revalidatePath("/robots.txt", "page");
    revalidatedPaths.push("/sitemap.xml", "/robots.txt");

    return new Response(
      JSON.stringify({
        revalidated: true,
        contentType: contentTypeId,
        paths: revalidatedPaths,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Revalidation error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to revalidate",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
