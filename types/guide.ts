import IFrontMatter from "types/frontMatter";

export default interface Guide {
  data: IFrontMatter;
  content?: string;
}
