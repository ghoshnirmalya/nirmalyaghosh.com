import { Article } from "contentlayer/generated";
import Page from "components/pages/categories/base";
import { getAllArticlesWhichBelongToCurrentSlug } from "lib/get-articles-data";
import { getAllCategories } from "lib/get-categories-data";
import pick from "lodash/pick";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface IProps {
  articles: Article[];
  currentCategory: string;
}

const TagsListingPage: NextPage<IProps> = ({ articles, currentCategory }) => {
  return <Page articles={articles} currentCategory={currentCategory} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllCategories().map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articles = getAllArticlesWhichBelongToCurrentSlug(
    params,
    "categories"
  ).map((articles) => pick(articles, ["date", "description", "title", "slug"]));

  return {
    props: {
      articles,
      currentCategory: params?.slug,
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default TagsListingPage;
