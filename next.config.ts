import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "downloads.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "videos.ctfassets.net",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path+",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
