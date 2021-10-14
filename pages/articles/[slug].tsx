import Page from "components/pages/articles/[slug]";
import {
  getAllArticles,
  getCurrentArticle,
  getNextArticles,
} from "lib/get-articles-data";
import getMdxData from "lib/get-mdx-data";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Article from "types/article";
import frontMatter from "types/frontMatter";

const Callout = dynamic(
  import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Image = dynamic(
  import(/* webpackChunkName: "Image" */ "components/mdx/image")
);

const components = { Callout, img: Image };

interface IProps {
  mdxSource: {
    code: string;
    frontmatter: {
      [key: string]: any;
    };
  };
  frontMatter: frontMatter;
  source: string;
  nextArticles: Article[];
}

const ArticlesSlugPage: NextPage<IProps> = ({
  mdxSource,
  frontMatter,
  source,
  nextArticles,
}) => {
  const MDXContent = useMemo(
    () => getMDXComponent(mdxSource.code),
    [mdxSource.code]
  );

  return (
    <Page
      content={<MDXContent components={components} />}
      frontMatter={frontMatter}
      source={source}
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
          slug: article.data.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, content } = getCurrentArticle(params);
  const nextArticles = getNextArticles(params);

  return {
    props: {
      mdxSource: await getMdxData(content),
      frontMatter: data,
      source: content,
      nextArticles,
    },
  };
};

export default ArticlesSlugPage;
