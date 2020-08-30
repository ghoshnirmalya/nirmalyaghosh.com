export default interface Doc {
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
