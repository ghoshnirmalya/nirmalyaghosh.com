import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeImgSize from "rehype-img-size";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkExternalLinks from "remark-external-links";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import { Pluggable } from "unified";

const mdxOptions = {
  remarkPlugins: [remarkExternalLinks, remarkGfm, remarkUnwrapImages],
  rehypePlugins: [
    rehypeSlug,
    rehypeCodeTitles,
    rehypePrismPlus,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
      },
    ],
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
