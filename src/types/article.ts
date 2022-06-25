export default interface Article {
  frontmatter: {
    title: string;
    description: string;
    date: string;
    slug: string;
    tags: string[];
    lastmod: string;
    categories: string[];
    keywords: string[];
    draft: boolean;
  };
}
