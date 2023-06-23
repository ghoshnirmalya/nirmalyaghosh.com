const { withContentlayer } = require("next-contentlayer");

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

module.exports = withContentlayer(nextConfig);
