import { serialize } from "next-mdx-remote/serialize";

const getMdxData = async (content: string) => {
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        require("remark-code-titles"),
        require("remark-toc"),
        require("remark-external-links"),
      ],
      rehypePlugins: [
        require("rehype-autolink-headings"),
        require("mdx-prism"),
      ],
      compilers: [],
    },
    scope: {},
  });

  return mdxSource;
};

export default getMdxData;
