import Articles from "components/Articles";
import Projects from "components/Projects";
import Publications from "components/Publications";
import siteConfig from "configs/site";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import projects from "public/data/projects.json";
import publications from "public/data/publications.json";
import { ArticleStatus, IArticle } from "types/article";
import IProject from "types/project";
import IPublication from "types/publication";
import fetchAllArticles from "utils/fetch-all-articles";

interface IProps {
  articles: IArticle[];
  projects: IProject[];
  publications: IPublication[];
}

const IndexPage: NextPage<IProps> = ({ articles, projects, publications }) => {
  return (
    <>
      <NextSeo
        title={siteConfig.details.title}
        description={siteConfig.details.description}
        canonical={siteConfig.details.url}
        openGraph={{
          url: siteConfig.details.url,
          title: siteConfig.details.title,
          description: siteConfig.details.description,
          images: [
            {
              url: siteConfig.assets.avatar,
              alt: siteConfig.details.title,
              type: "image/jpeg",
            },
          ],
          siteName: siteConfig.details.title,
        }}
        twitter={{
          handle: siteConfig.socialLinks.twitter,
          cardType: "summary_large_image",
        }}
      />

      <div className="space-y-24">
        <Projects projects={projects} />
        <Articles articles={articles} />
        <Publications publications={publications} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchAllArticles();
  const publishedArticles = articles.filter(
    (article: IArticle) => article.status === ArticleStatus.Published
  );

  return {
    props: {
      articles: publishedArticles,
      projects,
      publications,
    },
    revalidate: 60,
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default IndexPage;
