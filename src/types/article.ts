export default interface Article {
  frontmatter: {
    title: string;
    description: string;
    pubDate: string;
    draft: boolean;
  };
  url: string;
}
