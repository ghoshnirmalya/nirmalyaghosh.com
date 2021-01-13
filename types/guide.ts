import IFrontMatter from "types/frontMatter";

export default interface Guide {
  id: number;
  slug: string;
  frontMatter: IFrontMatter;
}
