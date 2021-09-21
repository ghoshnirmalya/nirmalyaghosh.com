import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkCodeTitles from "remark-code-titles";
import remarkExternalLinks from "remark-external-links";
import remarkSlug from "remark-slug";
import MDXPrism from "mdx-prism";

const getMdxData = async (content: string) => {
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkSlug, remarkCodeTitles, remarkExternalLinks],
      rehypePlugins: [rehypeAutolinkHeadings, MDXPrism],
      compilers: [],
    },
    scope: {},
  });

  return mdxSource;
};

export default getMdxData;
