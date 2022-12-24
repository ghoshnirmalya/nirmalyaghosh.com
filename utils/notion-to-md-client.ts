import { NotionToMarkdown } from "notion-to-md";
import notionClient from "utils/notion-client";

const notionToMDClient = new NotionToMarkdown({
  notionClient: notionClient,
});

export default notionToMDClient;
