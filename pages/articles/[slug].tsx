import rehypeShiki from "@stefanprobst/rehype-shiki";
import siteConfig from "configs/site";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ArticleJsonLd, NextSeo } from "next-seo";
import path from "path";
import remarkUnwrapImages from "remark-unwrap-images";
import * as shiki from "shiki";
import slugify from "slugify";
import { ArticleStatus, IArticle } from "types/article";
import fetchAllArticles from "utils/fetch-all-articles";
import fetchSingleArticle from "utils/fetch-single-article";
import rehypeUploadImages from "utils/rehype-upload-images";

interface IProps {
  article: IArticle;
}

const ArticlesShowPage: NextPage<IProps> = ({ article }) => {
  return (
    <>
      <NextSeo
        title={article.title}
        description={article.title}
        canonical={`${siteConfig.details.url}/articles/${article.slug}`}
        openGraph={{
          url: `${siteConfig.details.url}/articles/${article.slug}`,
          title: article.title,
          description: article.title,
          siteName: siteConfig.details.title,
        }}
        twitter={{
          handle: siteConfig.socialLinks.twitter,
          cardType: "summary_large_image",
        }}
      />
      <ArticleJsonLd
        url={`${siteConfig.details.url}/articles/${article.slug}`}
        title={article.title}
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        datePublished={article.publishedDate}
        dateModified={article.publishedDate}
        authorName={[
          {
            name: siteConfig.details.title,
            url: siteConfig.details.url,
          },
        ]}
        publisherName={siteConfig.details.title}
        description={article.title}
        isAccessibleForFree={true}
      />
      <article className="hover:prose-a:border-blackdark:hover:prose-a:border-white prose mx-auto w-full max-w-2xl py-4 prose-headings:mb-4 prose-headings:font-semibold prose-a:border-b prose-a:border-gray-300 prose-a:font-normal prose-a:text-gray-600 prose-a:no-underline  prose-a:transition-colors prose-a:duration-500 prose-a:ease-in-out hover:prose-a:text-black prose-code:font-normal prose-pre:rounded-md prose-pre:border prose-pre:border-gray-100 prose-pre:text-sm prose-pre:leading-6 prose-img:rounded-md dark:prose-invert dark:prose-a:text-gray-400 dark:hover:prose-a:text-white dark:prose-pre:border-gray-900 dark:prose-pre:shadow-gray-900">
        <h1 className="font-semibold">{article?.title}</h1>

        <div className="-mt-8 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
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

  if (!article || status !== ArticleStatus.Published) {
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
                  "configs/shiki/themes/github-dark.json"
                )
              ),
              paths: {
                languages: path.join(process.cwd(), "configs/shiki/languages/"),
              },
            }),
          },
        ],
        () => rehypeUploadImages(article.slug),
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
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetchAllArticles();
  const publishedArticles = articles.filter(
    (article: IArticle) => article.status === ArticleStatus.Published
  );
  const publishedArticlesSlugs = publishedArticles.map(
    (article) =>
      `${slugify(article.title, {
        lower: true,
      })}--${article.id}`
  );
  const paths = publishedArticlesSlugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default ArticlesShowPage;
