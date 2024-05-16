import { defineDocumentType, makeSource } from "contentlayer2/source-files";

import mdxOptions from "./src/config/mdx";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/*.mdx`,
  contentType: "mdx",
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

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Article],
  mdx: mdxOptions,
});
