import Page from "components/pages/articles/[slug]";
import { getAllArticles, getCurrentArticle } from "lib/get-articles-data";
import getMdxData from "lib/get-mdx-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";

const Callout = dynamic(
  import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Image = dynamic(
  import(/* webpackChunkName: "Image" */ "components/mdx/image")
);

const components = { Callout, img: Image };

interface IProps {
  mdxSource: any;
  frontMatter: any;
}

const ArticlesSlugPage: NextPage<IProps> = ({ mdxSource, frontMatter }) => {
  return (
    <Page
      content={<MDXRemote {...mdxSource} components={components} />}
      frontMatter={frontMatter}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllArticles().map((article) => {
      return {
        params: {
          slug: article.data.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, content } = getCurrentArticle(params.slug as string);

  return {
    props: {
      mdxSource: await getMdxData(content),
      frontMatter: data,
    },
  };
};

export default ArticlesSlugPage;

export const config = {
  unstable_runtimeJS: false,
};
