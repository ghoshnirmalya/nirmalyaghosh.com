// @ts-ignore

const fs = require("fs");
const globby = require("globby");

(async () => {
  const pages = await globby(["pages/**/*{.tsx,.mdx}", "!pages/_*.tsx"]);
  const sitemap = `
    <rss version="2.0">
      <channel>
        <title>CO2.Storage</title>
        <link>https://green.filecoin.io</link>
        <description>Decentralized data storage utility for Environmental Assets</description>
        <language>en</language>
        ${pages
          .map((page) => {
            const path = page
              .replace("pages", "")
              .replace("/index", "")
              .replace(".tsx", "")
              .replace(".mdx", "");
            const route = path === "/index" ? "" : path;
            return `
              <item>
                <link>
                  ${`https://CO2.Storage${route}`}
                </link>
              </item>
            `;
          })
          .join("")}
      </channel>
    </rss>
  `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
})();
