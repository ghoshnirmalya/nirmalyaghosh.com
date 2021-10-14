export default interface FrontMatter {
  coverImage?: string;
  categories: string[];
  date: string;
  description: string;
  tags: string[];
  title: string;
  githubLink?: string;
  demoLink?: string;
  slug: string;
  lastmod: string;
}
