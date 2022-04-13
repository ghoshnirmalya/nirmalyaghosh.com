/**
 * @type {import('next').NextConfig}
 */

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
      });
    }

    return config;
  },
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
