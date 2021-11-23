import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import remarkExternalLinks from "remark-external-links";
import rehypeImgSize from "rehype-img-size";
import { Pluggable } from "unified";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const mdxOptions = {
  remarkPlugins: [remarkExternalLinks, remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    rehypeCodeTitles,
    rehypePrism,
    rehypeAutolinkHeadings,
    [
      rehypeImgSize,
      {
        dir: "public",
      },
    ],
  ] as Pluggable[],
  compilers: [],
};

export default mdxOptions;
