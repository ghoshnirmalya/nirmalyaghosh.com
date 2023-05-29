import { Article } from "contentlayer/generated";
import Page from "components/pages/articles/base";
import { getAllArticles } from "lib/get-articles-data";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import publications from "public/data/publications.json";
import pick from "lodash/pick";
import { NextSeo } from "next-seo";
import siteConfig from "config/site";

interface IProps {
  articles: Article[];
}

const ArticlesIndexPage: NextPage<IProps> = ({ articles }) => {
  return (
    <>
      <NextSeo
        title={siteConfig.details.title}
        description={siteConfig.details.description}
        openGraph={{
          url: `${siteConfig.details.url}/articles`,
          title: `${siteConfig.details.title}`,
          site_name: siteConfig.details.title,
          type: "article",
          locale: "en_IE",
        }}
      />
      <Page articles={articles} publications={publications} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = getAllArticles().map((articles) =>
    pick(articles, ["date", "description", "title", "slug"])
  );

  return {
    props: {
      articles,
    },
  };
};

export default ArticlesIndexPage;
