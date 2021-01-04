import IFrontMatter from "types/frontMatter";

export default interface Doc {
  id: number;
  slug: string;
  frontMatter: IFrontMatter;
}
