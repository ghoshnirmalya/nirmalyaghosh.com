import rehypeShiki from "@stefanprobst/rehype-shiki";
import { Image } from "components/Markdown";
import type { GetServerSideProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import path from "path";
import remarkUnwrapImages from "remark-unwrap-images";
import * as shiki from "shiki";
import { ArticleStatus, IArticle } from "types/article";
import fetchSingleArticle from "utils/fetch-single-article";
import rehypeUploadImages from "utils/rehype-upload-images";
import AvatarImage from "/public/images/common/avatar.png";
import NextImage from "next/image";

interface IProps {
  article: IArticle;
}

const ArticlesShowPage: NextPage<IProps> = ({ article }) => {
  return (
    <>
      <NextSeo title={article.title} noindex nofollow />̦
      <article className="hover:prose-a:border-blackdark:hover:prose-a:border-white prose mx-auto w-full max-w-2xl py-4 prose-headings:mb-4 prose-headings:font-semibold prose-a:border-b prose-a:border-gray-300 prose-a:font-normal prose-a:text-gray-600 prose-a:no-underline  prose-a:transition-colors prose-a:duration-500 prose-a:ease-in-out hover:prose-a:text-black prose-code:font-normal prose-pre:rounded-md prose-pre:border prose-pre:border-gray-100 prose-pre:text-sm prose-pre:leading-6 prose-img:rounded-md dark:prose-invert dark:prose-a:text-gray-400 dark:hover:prose-a:text-white dark:prose-pre:border-gray-900 dark:prose-pre:shadow-gray-900">
        <h1 className="font-semibold">{article?.title}</h1>

        <div className="-mt-8 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <NextImage
              src="/images/common/avatar.png"
              alt="Nirmalya Ghosh"
              width={24}
              height={24}
              className="overflow-hidden rounded-full"
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
          <p className="text-sm text-gray-500">Draft</p>
        </div>

        {!!article.markdown && (
          <MDXRemote
            {...article.markdown}
            components={{
              img: ({ alt, src, width = 640, height }) => {
                return (
                  <Image src={src} alt={alt} width={width} height={height} />
                );
              },
            }}
          />
        )}
      </article>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = (ctx.params.slug as string).split("--")[1];

  const article = await fetchSingleArticle(slug);

  const { id, title, lastFetchedTime, content, status } = article;

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
      },
    },
  };
};

export default ArticlesShowPage;
