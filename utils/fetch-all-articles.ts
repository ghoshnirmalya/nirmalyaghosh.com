import dayjs from "dayjs";
import { ArticleStatus, IArticle } from "types/article";
import notionClient from "utils/notion-client";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const pageID = "ea696c6d1c9f43f2bacb283f2da000dc";

const fetchAllArticles = async () => {
  const { results, has_more, next_cursor } = await notionClient.databases.query(
    {
      database_id: pageID,
    }
  );

  const data = results.map((result: any) => {
    return {
      id: result.id,
      title: result.properties["Name"].title[0].plain_text,
      publishedDate: dayjs(
        result.properties["Published date"].date?.start
      ).format("LL"),
      status: result.properties["Status"].select?.name,
      cover: result?.cover?.external.url || "",
    };
  }) as IArticle[];

  const articles = data.filter(
    (article: IArticle) => article.status === ArticleStatus.Published
  );

  return articles;
};

export default fetchAllArticles;
