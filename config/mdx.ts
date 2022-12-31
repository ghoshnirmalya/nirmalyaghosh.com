import rehypeCodeTitles from "rehype-code-titles";
import remarkExternalLinks from "remark-external-links";
import rehypeImgSize from "rehype-img-size";
import { Pluggable } from "unified";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";

const mdxOptions = {
  remarkPlugins: [remarkExternalLinks, remarkGfm, remarkUnwrapImages],
  rehypePlugins: [
    rehypeSlug,
    rehypeCodeTitles,
    rehypePrismPlus,
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
