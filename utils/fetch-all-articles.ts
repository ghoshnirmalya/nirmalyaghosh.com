import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import slugify from "slugify";
import { IArticle } from "types/article";
import notionClient from "utils/notion-client";

dayjs.extend(localizedFormat);

const pageID = "ea696c6d1c9f43f2bacb283f2da000dc";

const fetchAllArticles = async () => {
  const { results, has_more, next_cursor } = await notionClient.databases.query(
    {
      database_id: pageID,
    }
  );

  const articles = results.map((result: any) => {
    return {
      id: result.id,
      title: result.properties["Name"].title[0].plain_text,
      publishedDate: dayjs(
        result.properties["Published date"].date?.start
      ).format("LL"),
      status: result.properties["Status"].select?.name,
      slug: `${slugify(result.properties["Name"].title[0].plain_text, {
        lower: true,
      })}--${result.id}`,
    };
  }) as IArticle[];

  return articles;
};

export default fetchAllArticles;
