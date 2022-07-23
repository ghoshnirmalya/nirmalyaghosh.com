import rehypeShiki from "@stefanprobst/rehype-shiki";
import siteConfig from "configs/site";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import * as shiki from "shiki";
import slugify from "slugify";
import { ArticleStatus, IArticle } from "types/article";
import fetchAllArticles from "utils/fetch-all-articles";
import fetchSingleArticle from "utils/fetch-single-article";

interface IProps {
  article: IArticle;
  markdown: MDXRemoteSerializeResult;
}

const DraftArticlesShowPage: NextPage<IProps> = ({ article, markdown }) => {
  return (
    <>
      <Head>
        <title>[DRAFT] {article.title}</title>

        <link rel="icon" type="image/x-icon" href={siteConfig.assets.favicon} />
        <link
          rel="canonical"
          href={`${siteConfig.details.url}/articles/${article.slug}`}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content={`${article.title} - ${siteConfig.details.title}`}
        />
        <meta name="description" content={article.title} />
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content={siteConfig.details.title} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteConfig.details.url}/articles/${article.slug}`}
        />
        <meta
          property="og:title"
          content={`${article.title} - ${siteConfig.details.title}`}
        />
        <meta property="og:description" content={article.title} />
        <meta property="og:image" content={siteConfig.assets.avatar} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${siteConfig.details.url}/articles/${article.slug}`}
        />
        <meta
          property="twitter:title"
          content={`${article.title} - ${siteConfig.details.title}`}
        />
        <meta property="twitter:description" content={article.title} />
        <meta property="twitter:image" content={siteConfig.assets.avatar} />
      </Head>

      <article className="p-4 max-w-2xl mx-auto prose prose-img:rounded-md prose-pre:border prose-pre:text-sm prose-pre:leading-6 prose-code:font-normal prose-pre:rounded-md prose-pre:border-gray-100 prose-pre:shadow-lg prose-pre:shadow-gray-100 prose-a:text-gray-500 prose-a:font-normal prose-a:border-b prose-a:border-gray-300 prose-a:no-underline hover:prose-a:text-black hover:prose-a:border-black prose-headings:mb-4 prose-headings:font-semibold prose-a:transition-colors prose-a:ease-in-out prose-a:duration-500 prose-img:aspect-video">
        <h1 className="font-semibold">{article?.title}</h1>
        {!!markdown && <MDXRemote {...markdown} />}
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = (ctx.params.slug as string).split("--")[1];

  const article = await fetchSingleArticle(slug);

  if (!article || article?.status !== ArticleStatus.Unpublished) {
    return {
      notFound: true,
    };
  }

  const markdown = await serialize(article.content, {
    mdxOptions: {
      rehypePlugins: [
        [
          rehypeShiki,
          {
            highlighter: await shiki.getHighlighter({
              theme: await shiki.loadTheme(
                path.join(process.cwd(), "configs/github-light.json")
              ),
            }),
          },
        ],
      ],
    },
  });

  return {
    props: {
      article,
      markdown,
    },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetchAllArticles();
  const draftArticles = articles.filter(
    (article: IArticle) => article.status === ArticleStatus.Unpublished
  );
  const draftArticlesSlugs = draftArticles.map(
    (article) =>
      `${slugify(article.title, {
        lower: true,
      })}--${article.id}`
  );
  const paths = draftArticlesSlugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default DraftArticlesShowPage;
