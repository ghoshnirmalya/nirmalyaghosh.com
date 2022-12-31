import { Article } from "contentlayer/generated";
import Page from "components/pages/tags/base";
import { getAllArticlesWhichBelongToCurrentSlug } from "lib/get-articles-data";
import { getAllTags } from "lib/get-tags-data";
import pick from "lodash/pick";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";

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
  const articles = getAllArticlesWhichBelongToCurrentSlug(params, "tags").map(
    (articles) => pick(articles, ["date", "description", "title", "slug"])
  );

  return {
    props: {
      articles,
      currentTag: params?.slug as string,
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
