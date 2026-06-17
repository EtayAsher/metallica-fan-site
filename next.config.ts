import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/metallica-fan-site",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "guitar.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "static.wikia.nocookie.net" },
      { protocol: "https", hostname: "townsquare.media" },
      { protocol: "https", hostname: "i.scdn.co" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "media.pitchfork.com" },
      { protocol: "https", hostname: "cdn.media.amplience.net" },
    ],
  },
};

export default nextConfig;
