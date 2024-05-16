import { withContentlayer } from "next-contentlayer2";

import("./src/env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/guides/:path*",
        destination: "/articles/:path*",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
