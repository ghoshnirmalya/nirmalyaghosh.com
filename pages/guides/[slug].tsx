import Page from "components/pages/guides/[slug]";
import { getAllGuides, getCurrentGuide } from "lib/get-guides.data";
import getMdxData from "lib/get-mdx-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";

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

const components = { Callout, Jumbotron, Link, Image };

interface IProps {
  mdxSource: any;
  frontMatter: any;
  source: string;
}

const GuidesSlugPage: NextPage<IProps> = ({
  mdxSource,
  frontMatter,
  source,
}) => {
  return (
    <Page
      content={<MDXRemote {...mdxSource} components={components} />}
      frontMatter={frontMatter}
      source={source}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllGuides().map((guide) => {
      return {
        params: {
          slug: guide.data.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, content } = getCurrentGuide(params.slug as string);

  return {
    props: {
      mdxSource: await getMdxData(content),
      frontMatter: data,
      source: content,
    },
  };
};

export default GuidesSlugPage;
