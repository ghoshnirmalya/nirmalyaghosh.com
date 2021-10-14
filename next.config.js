/**
 * @type {import('next').NextConfig}
 */

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
});
