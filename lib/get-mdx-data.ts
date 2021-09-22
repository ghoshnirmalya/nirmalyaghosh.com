import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkCodeTitles from "remark-code-titles";
import remarkExternalLinks from "remark-external-links";
import remarkSlug from "remark-slug";
import shiki from "shiki";
import remarkShiki from "@stefanprobst/remark-shiki";
import rehypeRaw from "rehype-raw";

const getMdxData = async (content: string) => {
  const highlighter = await shiki.getHighlighter({ theme: "github-dark" });

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkSlug,
        remarkCodeTitles,
        remarkExternalLinks,
        [remarkShiki, { highlighter }],
      ],
      rehypePlugins: [rehypeAutolinkHeadings, rehypeRaw],
      compilers: [],
    },
    scope: {},
  });

  return mdxSource;
};

export default getMdxData;
