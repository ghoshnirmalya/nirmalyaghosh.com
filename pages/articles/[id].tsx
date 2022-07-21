import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ArticleStatus, IArticle } from "types/article";
import fetchAllArticles from "utils/fetch-all-articles";
import fetchSingleArticle from "utils/fetch-single-article";

interface IomeProps {
  article: IArticle;
  markdown: MDXRemoteSerializeResult;
}

const Home: NextPage<IomeProps> = ({ article, markdown }) => {
  return (
    <article className="p-4 max-w-2xl mx-auto prose prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-a:no-underline prose-img:rounded-md prose-pre:border prose-pre:text-sm prose-pre:leading-6 prose-code:font-normal">
      <h1>{article.title}</h1>
      <MDXRemote {...markdown} />
    </article>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const article = await fetchSingleArticle(ctx.params?.id as string);
  const markdown = await serialize(article.content);

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
