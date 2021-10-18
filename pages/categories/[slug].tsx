import Page from "components/pages/categories/base";
import { getAllArticlesWhichBelongToCurrentSlug } from "lib/get-articles-data";
import { getAllCategories } from "lib/get-categories-data";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";

interface IProps {
  params: ParsedUrlQuery;
}

const TagsListingPage: NextPage<IProps> = ({ params }) => {
  const articles = getAllArticlesWhichBelongToCurrentSlug(params, "categories");
  const currentCategory = params?.slug as string;

  return <Page articles={articles} currentCategory={currentCategory} />;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  return {
    props: {
      params,
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
