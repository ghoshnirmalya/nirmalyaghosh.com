import IFrontMatter from "types/frontMatter";

export default interface Article {
  data: IFrontMatter;
  content?: string;
}
