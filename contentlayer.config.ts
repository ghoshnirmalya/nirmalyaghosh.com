import { defineDocumentType, makeSource } from "contentlayer/source-files";
import mdxOptions from "./config/mdx";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/*.mdx`,
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    lastmod: { type: "date", required: true },
    draft: { type: "boolean", required: true },
    categories: { type: "json", required: false },
    tags: { type: "json", required: false },
    keywords: { type: "json", required: false },
  },
}));

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `guides/*.mdx`,
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    lastmod: { type: "date", required: true },
    draft: { type: "boolean", required: true },
    coverImage: { type: "string" },
    githubLink: { type: "string" },
    categories: { type: "json", required: false },
    tags: { type: "json", required: false },
    keywords: { type: "json", required: false },
  },
}));

export const Concept = defineDocumentType(() => ({
  name: "Concept",
  filePathPattern: `concepts/*.mdx`,
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    lastmod: { type: "date", required: true },
    draft: { type: "boolean", required: true },
    coverImage: { type: "string" },
    githubLink: { type: "string" },
    categories: { type: "json", required: false },
    tags: { type: "json", required: false },
    keywords: { type: "json", required: false },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Article, Guide, Concept],
  mdx: mdxOptions,
});
