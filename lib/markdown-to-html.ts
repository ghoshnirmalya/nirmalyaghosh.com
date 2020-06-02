import remark from "remark";
import html from "remark-html";
import highlight from "remark-highlight.js";

const markdownToHtml = async (markdown) => {
  const result = await remark().use(highlight).use(html).process(markdown);

  return result.toString();
};

export default markdownToHtml;
