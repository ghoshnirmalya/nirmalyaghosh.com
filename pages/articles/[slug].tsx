import { Article } from "contentlayer/generated";
import Page from "components/pages/articles/[slug]";
import {
  getAllArticles,
  getCurrentArticle,
  getNextArticles,
} from "lib/get-articles-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import pick from "lodash/pick";
import { NextSeo } from "next-seo";
import siteConfig from "config/site";
import { useRouter } from "next/router";

interface IProps {
  currentArticle: Article;
  nextArticles: Article[];
}

const ArticlesSlugPage: NextPage<IProps> = ({
  currentArticle,
  nextArticles,
}) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={`${currentArticle.title}`}
        description={currentArticle.description}
        openGraph={{
          url: `${siteConfig.details.url}/articles/${router.query.slug}`,
          title: `${currentArticle.title}`,
          description: currentArticle.description,
          images: [
            {
              url: `https://cover-images.vercel.app/api?postTitle=${currentArticle.title}&postDescription=${currentArticle.description}&backgroundColor=1a202c&foregroundColor=fff&authorAvatar=${siteConfig.assets.favicon}&authorName=${siteConfig.details.title}`,
              width: 1200,
              height: 675,
              alt: currentArticle.title,
            },
          ],
          site_name: siteConfig.details.title,
          type: "article",
          locale: "en_IE",
        }}
      />
      <Page article={currentArticle} nextArticles={nextArticles} />
    </>
  );
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
