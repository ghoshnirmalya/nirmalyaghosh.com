import rehypeShiki from "@stefanprobst/rehype-shiki";
import siteConfig from "configs/site";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import rehypeExternalImgSize from "rehype-external-img-size";
import remarkUnwrapImages from "remark-unwrap-images";
import * as shiki from "shiki";
import slugify from "slugify";
import { ArticleStatus, IArticle } from "types/article";
import fetchAllArticles from "utils/fetch-all-articles";
import fetchSingleArticle from "utils/fetch-single-article";
import rehypeDownloadImages from "utils/rehype-download-images";

interface IProps {
  article: IArticle;
}

const DraftArticlesShowPage: NextPage<IProps> = ({ article }) => {
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

      <article className="hover:prose-a:border-blackdark:hover:prose-a:border-white prose mx-auto w-full max-w-2xl p-4 prose-headings:mb-4 prose-headings:font-semibold prose-a:border-b prose-a:border-gray-300 prose-a:font-normal prose-a:text-gray-600 prose-a:no-underline prose-a:transition-colors prose-a:duration-500 prose-a:ease-in-out hover:prose-a:text-black prose-code:font-normal prose-pre:rounded-md prose-pre:border prose-pre:border-gray-100 prose-pre:text-sm prose-pre:leading-6 prose-img:rounded-md dark:prose-invert dark:prose-a:text-gray-400 dark:hover:prose-a:text-white dark:prose-pre:border-gray-900">
        <h1 className="font-semibold">{article?.title}</h1>

        <div className="-mt-8 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/common/avatar.png"
              className="h-6 w-6"
              alt="Nirmalya Ghosh"
            />
            <a
              href="https://twitter.com/NirmalyaGhosh_"
              target="_blank"
              className="border-none text-sm"
              rel="noreferrer"
            >
              Nirmalya Ghosh
            </a>
          </div>
          <span className="text-sm text-gray-500">/</span>
          <p className="text-sm text-gray-500">{article.publishedDate}</p>
        </div>

        {!!article.markdown && <MDXRemote {...article.markdown} />}
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = (ctx.params.slug as string).split("--")[1];

  const article = await fetchSingleArticle(slug);

  const { id, title, lastFetchedTime, content, status, publishedDate } =
    article;

  if (!article || status !== ArticleStatus.Unpublished) {
    return {
      notFound: true,
    };
  }

  const markdown = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        [
          rehypeShiki,
          {
            highlighter: await shiki.getHighlighter({
              theme: await shiki.loadTheme(
                path.join(
                  process.cwd(),
                  "configs/shiki/themes/github-dark-dimmed.json"
                )
              ),
              paths: {
                languages: path.join(process.cwd(), "configs/shiki/languages/"),
              },
            }),
          },
        ],
        rehypeExternalImgSize,
        rehypeDownloadImages,
      ],
      remarkPlugins: [remarkUnwrapImages],
    },
  });

  return {
    props: {
      article: {
        id,
        title,
        slug,
        lastFetchedTime,
        markdown,
        publishedDate,
      },
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
