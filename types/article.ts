import { MDXRemoteSerializeResult } from "next-mdx-remote";
export interface IArticle {
  id: string;
  title: string;
  publishedDate?: string;
  status?: ArticleStatus;
  cover?: string;
  content: string;
  markdown: MDXRemoteSerializeResult;
}

export enum ArticleStatus {
  Published = "Published",
  Unpublished = "Unpublished",
}
