import Articles from "components/Articles";
import Projects from "components/Projects";
import Publications from "components/Publications";
import siteConfig from "configs/site";
import { GetStaticProps, NextPage } from "next";
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
      <Head>
        <title>{siteConfig.details.title}</title>

        <link rel="icon" type="image/x-icon" href={siteConfig.assets.favicon} />
        <link rel="canonical" href={siteConfig.details.url} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={siteConfig.details.title} />
        <meta name="description" content={siteConfig.details.description} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content={siteConfig.details.title} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.details.url} />
        <meta property="og:title" content={siteConfig.details.title} />
        <meta
          property="og:description"
          content={siteConfig.details.description}
        />
        <meta property="og:image" content={siteConfig.assets.avatar} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteConfig.details.url} />
        <meta property="twitter:title" content={siteConfig.details.title} />
        <meta
          property="twitter:description"
          content={siteConfig.details.description}
        />
        <meta property="twitter:image" content={siteConfig.assets.avatar} />
      </Head>

      <div className="space-y-16">
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
