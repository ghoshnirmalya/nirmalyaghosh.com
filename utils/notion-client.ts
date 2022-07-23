import { Client, LogLevel } from "@notionhq/client";

const notionClient = new Client({
  auth: process.env.NOTION_API_KEY,
  timeoutMs: 60_000 * 60,
});

export default notionClient;
