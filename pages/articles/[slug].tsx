import { Article } from "contentlayer/generated";
import Page from "components/pages/articles/[slug]";
import {
  getAllArticles,
  getCurrentArticle,
  getNextArticles,
} from "lib/get-articles-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import pick from "lodash/pick";

interface IProps {
  currentArticle: Article;
  nextArticles: Article[];
}

const ArticlesSlugPage: NextPage<IProps> = ({
  currentArticle,
  nextArticles,
}) => {
  return <Page article={currentArticle} nextArticles={nextArticles} />;
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
  const currentArticle = getCurrentArticle(params);
  const nextArticles = getNextArticles(params).map((articles) =>
    pick(articles, ["date", "description", "title", "slug"])
  );

  return {
    props: {
      currentArticle,
      nextArticles,
    },
  };
};

export default ArticlesSlugPage;
