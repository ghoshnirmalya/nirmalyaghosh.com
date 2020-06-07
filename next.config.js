const withSourceMaps = require("@zeit/next-source-maps")();
const readingTime = require("reading-time");
const mdxPrism = require("mdx-prism");
const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withSourceMaps(
  withMdxEnhanced({
    layoutPath: "./components/layouts/articles",
    defaultLayout: true,
    remarkPlugins: [
      require("remark-autolink-headings"),
      require("remark-slug"),
      require("remark-code-titles"),
    ],
    rehypePlugins: [mdxPrism],
    extendFrontMatter: {
      process: (mdxContent) => ({
        wordCount: mdxContent.split(/\s+/gu).length,
        readingTime: readingTime(mdxContent),
      }),
    },
  })({
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.node = {
          fs: "empty",
        };
      }

      return config;
    },
  })
);
