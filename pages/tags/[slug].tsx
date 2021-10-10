import Page from "components/pages/tags/base";
import { getAllArticlesWhichBelongToCurrentSlug } from "lib/get-articles-data";
import { getAllTags } from "lib/get-tags-data";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Article from "types/article";

interface IProps {
  articles: Article[];
  currentTag: string;
}

const TagsListingPage: NextPage<IProps> = ({ articles, currentTag }) => {
  return <Page articles={articles} currentTag={currentTag} />;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  return {
    props: {
      articles: getAllArticlesWhichBelongToCurrentSlug(params, "tags"),
      currentTag: params?.slug,
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
