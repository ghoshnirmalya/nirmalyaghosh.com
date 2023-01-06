/**
 * @type {import('next').NextConfig}
 */

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/concepts/:slug",
        destination: "/articles/:slug",
        permanent: true,
      },
    ];
  },
});
