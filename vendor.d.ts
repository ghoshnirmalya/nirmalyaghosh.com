import IArticle from "types/article";

declare module "remark-slug";
declare module "remark-code-titles";
declare module "rehype-autolink-headings";
declare module "next-mdx-enhanced";
declare module "mdx-prism";

declare module "*.mdx" {
  export const frontMatter: IArticle[];
}
