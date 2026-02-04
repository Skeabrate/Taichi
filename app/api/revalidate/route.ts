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
      revalidatePath("/");
      revalidatedPaths.push("/");
    } else if (contentType === "BlogPost") {
      const slug = payload?.data?.slug;
      revalidatePath("/blog");
      revalidatePath("/blog/page/[pageNumber]");
      revalidatePath(`/blog/${slug}`);
      revalidatedPaths.push(
        "/blog",
        "/blog/page/[pageNumber]",
        `/blog/${slug}`,
      );
    }

    revalidatePath("/sitemap.xml", "page");
    revalidatePath("/robots.txt", "page");
    revalidatedPaths.push("/sitemap.xml", "/robots.txt");

    return new Response(null, { status: 200 });
  } catch (error) {
    console.error("Revalidation error:", error);
    return new Response(null, { status: 500 });
  }
}
