import Page from "components/pages/guides/[slug]";
import { getAllGuides, getCurrentGuide } from "lib/get-guides.data";
import getMdxData from "lib/get-mdx-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { ParsedUrlQuery } from "querystring";

const Callout = dynamic(
  () => import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Jumbotron = dynamic(
  () => import(/* webpackChunkName: "Jumbotron" */ "components/mdx/jumbotron")
);

const Link = dynamic(
  () => import(/* webpackChunkName: "Link" */ "components/mdx/link")
);

const Image = dynamic(
  () => import(/* webpackChunkName: "Image" */ "components/mdx/image")
);

const components = { Callout, Jumbotron, Link, Image };

interface IProps {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  params: ParsedUrlQuery;
}

const GuidesSlugPage: NextPage<IProps> = ({ mdxSource, params }) => {
  const currentGuide = getCurrentGuide(params);

  return (
    <Page
      content={<MDXRemote {...mdxSource} components={components} lazy />}
      guide={currentGuide}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllGuides().map((guide) => {
      return {
        params: {
          slug: guide.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { body } = getCurrentGuide(params);

  return {
    props: {
      mdxSource: await getMdxData(body as unknown as string),
      params,
    },
  };
};

export default GuidesSlugPage;
