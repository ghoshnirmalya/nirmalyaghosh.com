import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkCodeTitles from "remark-code-titles";
import remarkExternalLinks from "remark-external-links";
import remarkSlug from "remark-slug";
import remarkVscode from "gatsby-remark-vscode";

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
  rehypePlugins: [rehypeAutolinkHeadings],
  compilers: [],
};

export default mdxOptions;
