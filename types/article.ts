import { MDXRemoteSerializeResult } from "next-mdx-remote";
export interface IArticle {
  id: string;
  title: string;
  publishedDate?: string;
  status?: ArticleStatus;
  content: string;
  slug: string;
  markdown: MDXRemoteSerializeResult;
  lastFetchedTime: number;
}

export enum ArticleStatus {
  Published = "Published",
  Unpublished = "Unpublished",
}
