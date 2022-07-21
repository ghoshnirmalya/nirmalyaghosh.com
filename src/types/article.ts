export default interface Article {
  id: string;
  title: string;
  publishedDate?: string;
  status?: ArticleStatus;
  cover?: string;
  content: string;
  url: string;
}

export enum ArticleStatus {
  Published = "Published",
  Unpublished = "Unpublished",
}
