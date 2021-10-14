import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkCodeTitles from "remark-code-titles";
import remarkExternalLinks from "remark-external-links";
import remarkSlug from "remark-slug";
import remarkVscode from "gatsby-remark-vscode";
import rehypeImgSize from "rehype-img-size";
import { Pluggable } from "unified";

const mdxOptions = {
  remarkPlugins: [
    remarkSlug,
    remarkCodeTitles,
    remarkExternalLinks,
    [
      remarkVscode.remarkPlugin,
      {
        theme: "Tomorrow Night Blue",
      },
    ],
  ],
  rehypePlugins: [
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
