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
import { NextSeo } from "next-seo";
import siteConfig from "config/site";
import { useRouter } from "next/router";

interface IProps {
  articles: Article[];
  currentTag: string;
}

const TagsListingPage: NextPage<IProps> = ({ articles, currentTag }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={`${currentTag}`}
        description={currentTag}
        openGraph={{
          url: `${siteConfig.details.url}/tags/${router.query.slug}`,
          title: `${currentTag}`,
          site_name: siteConfig.details.title,
          type: "article",
          locale: "en_IE",
        }}
      />
      <Page articles={articles} currentTag={currentTag} />
    </>
  );
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
