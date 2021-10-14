import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkVscode from "gatsby-remark-vscode";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeImgSize from "rehype-img-size";
import remarkCodeTitles from "remark-code-titles";
import remarkExternalLinks from "remark-external-links";
import remarkSlug from "remark-slug";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    lastmod: { type: "date", required: true },
    draft: { type: "boolean", required: true },
  },
}));

export const Guide = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `guides/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    lastmod: { type: "date", required: true },
    draft: { type: "boolean", required: true },
    coverImage: { type: "string" },
    githubLink: { type: "string" },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Article, Guide],
  mdx: {
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
    ],
  },
});
