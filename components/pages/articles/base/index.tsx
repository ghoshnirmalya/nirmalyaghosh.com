import { Box } from "@chakra-ui/react";
import { Article } from "contentlayer/generated";
import dynamic from "next/dynamic";
import { FC } from "react";
import Publication from "types/publication";

const Articles = dynamic(
  () => import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);

interface Props {
  articles: Article[];
  publications: Publication[];
}

const Page: FC<Props> = ({ articles = [], publications = [] }) => {
  const allArticlesAndPublications = [
    ...articles,
    ...publications,
  ] as (Article & Publication)[];

  const sortedAllArticlesAndPublications: (Article & Publication)[] =
    allArticlesAndPublications.sort(
      (a: Article & Publication, b: Article & Publication) => {
        return Number(new Date(b.date)) - Number(new Date(a.date));
      }
    );

  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <Articles
        articles={sortedAllArticlesAndPublications}
        hideViewAllLinksNode
      />
    </Box>
  );
};

export default Page;
