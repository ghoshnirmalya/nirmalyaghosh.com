import { Article } from "contentlayer/generated";
import Page from "components/pages/categories/base";
import { getAllArticlesWhichBelongToCurrentSlug } from "lib/get-articles-data";
import { getAllCategories } from "lib/get-categories-data";
import pick from "lodash/pick";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import siteConfig from "config/site";
import { useRouter } from "next/router";

interface IProps {
  articles: Article[];
  currentCategory: string;
}

const CategoriesListingPage: NextPage<IProps> = ({
  articles,
  currentCategory,
}) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={siteConfig.details.title}
        description={siteConfig.details.description}
        openGraph={{
          url: `${siteConfig.details.url}/categories/${router.query.slug}`,
          title: `${siteConfig.details.title}`,
          site_name: siteConfig.details.title,
          type: "article",
          locale: "en_IE",
        }}
      />
      <Page articles={articles} currentCategory={currentCategory} />
    </>
  );
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

export default CategoriesListingPage;
