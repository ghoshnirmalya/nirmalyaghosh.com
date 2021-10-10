import Page from "components/pages/categories/base";
import { getAllArticlesWhichBelongToCurrentSlug } from "lib/get-articles-data";
import { getAllCategories } from "lib/get-categories-data";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Article from "types/article";

interface IProps {
  articles: Article[];
  currentCategory: string;
}

const TagsListingPage: NextPage<IProps> = ({ articles, currentCategory }) => {
  return <Page articles={articles} currentCategory={currentCategory} />;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  return {
    props: {
      articles: getAllArticlesWhichBelongToCurrentSlug(params, "categories"),
      currentCategory: params?.slug,
    },
  };
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

export default TagsListingPage;
