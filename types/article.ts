export default interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: {
    text: string;
  };
  wordCount: string;
  __resourcePath: string;
}
