import { MetadataRoute } from "next";
import { NEXT_PUBLIC_SITE_URL } from "@/lib/envs";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = NEXT_PUBLIC_SITE_URL || "https://taichi-world.pl";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
