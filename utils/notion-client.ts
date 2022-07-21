import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notionClient = new Client({
  auth: "secret_aY5vOqDDl891S87X4t26b7uFM8cOI7QPce2WITWhnBB",
});

export default notionClient;
