import dayjs from "dayjs";
import { ArticleStatus, IArticle } from "types/article";
import notionClient from "utils/notion-client";
import notionToMDClient from "utils/notion-to-md-client";
import localizedFormat from "dayjs/plugin/localizedFormat";
import slugify from "slugify";

dayjs.extend(localizedFormat);

const fetchSingleArticle = async (articleID?: string) => {
  if (!articleID) {
    throw new Error("Article ID is required");
  }

  const result = (await notionClient.pages.retrieve({
    page_id: articleID,
  })) as any;
  const mdblocks = await notionToMDClient.pageToMarkdown(articleID);
  const content = notionToMDClient.toMarkdownString(mdblocks);

  const data = {
    id: result.id,
    title: result.properties["Name"].title[0].plain_text,
    publishedDate: dayjs(
      result.properties["Published date"].date?.start
    ).format("LL"),
    status:
      result.properties["Status"].select?.name || ArticleStatus.Unpublished,
    slug: `${slugify(result.properties["Name"].title[0].plain_text, {
      lower: true,
    })}--${result.id}`,
    content,
    lastFetchedTime: new Date().getTime(),
  } as IArticle;

  return data;
};

export default fetchSingleArticle;
