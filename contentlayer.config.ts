import mdxOptions from "./config/mdx";
import {
  defineDocumentType,
  makeSource,
  defineNestedType,
  NestedType,
} from "contentlayer/source-files";

export const Category: NestedType<"Category"> = defineNestedType(() => ({
  name: "Category",
  fields: {
    category: { type: "list", of: Category },
  },
}));

export const Tag: NestedType<"Tag"> = defineNestedType(() => ({
  name: "Tag",
  fields: {
    tag: { type: "list", of: Tag },
  },
}));

export const Keyword: NestedType<"Keyword"> = defineNestedType(() => ({
  name: "Keyword",
  fields: {
    keyword: { type: "list", of: Keyword },
  },
}));

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
    categories: { type: "list", of: Category, required: true },
    tags: { type: "list", of: Tag, required: true },
    keywords: { type: "list", of: Keyword, required: true },
  },
}));

export const Guide = defineDocumentType(() => ({
  name: "Guide",
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
    categories: { type: "list", of: Category, required: true },
    tags: { type: "list", of: Tag, required: true },
    keywords: { type: "list", of: Keyword, required: true },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Article, Guide],
  mdx: mdxOptions,
});
