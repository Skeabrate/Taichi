import { revalidatePath } from "next/cache";
import { REVALIDATE_SECRET } from "@/lib/envs";
import { verifyWebhookSignature } from "@hygraph/utils";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("gcms-signature");

  if (
    !verifyWebhookSignature({
      body: JSON.parse(body),
      signature: signature || "",
      secret: REVALIDATE_SECRET || "",
    })
  ) {
    console.error("Webhook signature verification failed");
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const payload = JSON.parse(body);
    const contentType = payload?.data?.__typename as "MainPage" | "BlogPost";

    const revalidatedPaths: string[] = [];

    if (contentType === "MainPage") {
      revalidatePath("/", "page");
      revalidatedPaths.push("/");
    } else if (contentType === "BlogPost") {
      const slug = payload?.data?.slug;
      revalidatePath("/blog", "page");
      revalidatePath("/blog/page", "page");
      revalidatePath(`/blog/${slug}`, "page");
      revalidatedPaths.push("/blog", "/blog/page", `/blog/${slug}`);
    }

    revalidatePath("/sitemap.xml", "page");
    revalidatePath("/robots.txt", "page");
    revalidatedPaths.push("/sitemap.xml", "/robots.txt");

    return new Response(
      JSON.stringify({
        revalidated: true,
        contentType: contentType,
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
