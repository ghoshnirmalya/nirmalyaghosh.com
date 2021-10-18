import Page from "components/pages/tags/base";
import { getAllArticlesWhichBelongToCurrentSlug } from "lib/get-articles-data";
import { getAllTags } from "lib/get-tags-data";
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
  const articles = getAllArticlesWhichBelongToCurrentSlug(params, "tags");
  const currentTag = params?.slug as string;

  return <Page articles={articles} currentTag={currentTag} />;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  return {
    props: {
      params,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllTags().map((slug) => {
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
