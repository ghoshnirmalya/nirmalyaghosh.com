// @ts-ignore

const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const pages = await globby(["pages/**/*{.tsx,.mdx}", "!pages/_*.tsx"]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("pages", "")
                  .replace("/index", "")
                  .replace(".tsx", "")
                  .replace(".mdx", "");
                const route = path === "/index" ? "" : path;
                return `
                        <url>
                            <loc>${`https://nirmalyaghosh.com${route}`}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    parser: "html",
  });

  fs.writeFileSync("public/sitemap.xml", formatted);
})();
