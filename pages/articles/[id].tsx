import { MDXImage } from "components/Markdown";
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
    <div>
      {article?.title}
      Published on {article?.publishedDate}
      {!!markdown && (
        <MDXRemote
          {...markdown}
          components={{
            img: ({ src, alt }) => {
              return <MDXImage src={src} alt={alt} />;
            },
          }}
        />
      )}
    </div>
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

export default Home;
