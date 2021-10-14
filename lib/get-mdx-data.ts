import mdxOptions from "config/mdx";
import { serialize } from "next-mdx-remote/serialize";

const getMdxData = async (content: string) => {
  const mdxSource = await serialize(content, {
    mdxOptions,
    scope: {},
  });

  return mdxSource;
};

export default getMdxData;
