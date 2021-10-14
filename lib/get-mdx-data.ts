import { bundleMDX } from "mdx-bundler";

const getMdxData = async (content: string) => {
  const mdxSource = await bundleMDX(content);

  return mdxSource;
};

export default getMdxData;
