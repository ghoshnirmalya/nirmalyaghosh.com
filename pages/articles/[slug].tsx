import Page from "components/pages/articles/[slug]";
import {
  getAllArticles,
  getCurrentArticle,
  getNextArticles,
} from "lib/get-articles-data";
import getMdxData from "lib/get-mdx-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { ParsedUrlQuery } from "querystring";

const Callout = dynamic(
  () => import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Image = dynamic(
  () => import(/* webpackChunkName: "Image" */ "components/mdx/image")
);

const components = { Callout, img: Image };

interface IProps {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  params: ParsedUrlQuery;
}

const ArticlesSlugPage: NextPage<IProps> = ({ mdxSource, params }) => {
  const nextArticles = getNextArticles(params);
  const currentArticle = getCurrentArticle(params);

  return (
    <Page
      content={<MDXRemote {...mdxSource} components={components} lazy />}
      article={currentArticle}
      nextArticles={nextArticles}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllArticles().map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { body } = getCurrentArticle(params);

  return {
    props: {
      mdxSource: await getMdxData(body.raw),
      params,
    },
  };
};

export default ArticlesSlugPage;
