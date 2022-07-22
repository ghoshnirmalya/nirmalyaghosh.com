import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ArticleStatus, IArticle } from "types/article";
import fetchAllArticles from "utils/fetch-all-articles";
import fetchSingleArticle from "utils/fetch-single-article";
import rehypeShiki from "@stefanprobst/rehype-shiki";
import * as shiki from "shiki";

interface IProps {
  article: IArticle;
  markdown: MDXRemoteSerializeResult;
}

const Home: NextPage<IProps> = ({ article, markdown }) => {
  return (
    <article className="p-4 max-w-2xl mx-auto prose prose-img:rounded-md prose-pre:border prose-pre:text-sm prose-pre:leading-6 prose-code:font-normal prose-pre:rounded-md prose-pre:border-gray-100 prose-pre:shadow-lg prose-pre:shadow-gray-100 prose-a:text-gray-500 prose-a:font-normal prose-a:border-b prose-a:border-gray-300 prose-a:no-underline hover:prose-a:text-black hover:prose-a:border-black prose-headings:mb-4 prose-headings:font-semibold">
      <h1 className="font-semibold">{article?.title}</h1>
      {!!markdown && <MDXRemote {...markdown} />}
    </article>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const article = await fetchSingleArticle(ctx.params?.id as string);

  if (!article || article?.status !== ArticleStatus.Published) {
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
              theme: "github-light",
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
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetchAllArticles();
  const publishedArticles = articles.filter(
    (article: IArticle) => article.status === ArticleStatus.Published
  );
  const publishedArticlesIDs = publishedArticles.map((article) => article.id);
  const paths = publishedArticlesIDs.map((id) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default Home;
