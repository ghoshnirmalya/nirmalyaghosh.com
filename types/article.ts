import IFrontMatter from "types/frontMatter";

export default interface Article {
  id: number;
  slug: string;
  frontMatter: IFrontMatter;
}
