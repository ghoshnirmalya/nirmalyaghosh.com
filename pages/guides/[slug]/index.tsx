import Page from "components/pages/guides/[slug]";
import fs from "fs";
import matter from "gray-matter";
import getMdxData from "lib/get-mdx-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import path from "path";

const Callout = dynamic(
  import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Jumbotron = dynamic(
  import(/* webpackChunkName: "Jumbotron" */ "components/mdx/jumbotron")
);

const Link = dynamic(
  import(/* webpackChunkName: "Link" */ "components/mdx/link")
);

const Image = dynamic(
  import(/* webpackChunkName: "Image" */ "components/mdx/image")
);

const root = process.cwd();
const components = { Callout, Jumbotron, Link, Image };
interface IProps {
  mdxSource: any;
  frontMatter: any;
  guides: any;
  slug: string;
}

const GuidesSlugPage: NextPage<IProps> = ({
  guides,
  mdxSource,
  frontMatter,
  slug,
}) => {
  return (
    <Page
      content={<MDXRemote {...mdxSource} components={components} />}
      frontMatter={frontMatter}
      guides={guides}
      slug={slug}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: fs.readdirSync(path.join(root, "data", "guides")).map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const guidesRoot = path.join(root, "data", "guides", `${params.slug}`);
  const guides = fs.readdirSync(guidesRoot).map((p) => {
    const content = fs.readFileSync(path.join(guidesRoot, p), "utf8");

    return {
      slug: p.replace(/\.mdx/, ""),
      content,
      frontMatter: matter(content).data,
    };
  });

  const source = fs.readFileSync(
    path.join(root, "data", "guides", `${params.slug}`, "01-index.mdx"),
    "utf8"
  );
  const { data, content } = matter(source);

  return {
    props: {
      guides,
      mdxSource: await getMdxData(content),
      frontMatter: data,
      slug: params.slug,
    },
  };
};

export default GuidesSlugPage;

export const config = {
  unstable_runtimeJS: false,
};
