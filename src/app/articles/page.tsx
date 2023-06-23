import Page from "components/pages/articles/base";

import siteConfig from "config/site";

export const metadata = {
  openGraph: {
    url: `${siteConfig.details.url}/articles`,
  },
};

export default async function ArticlesIndexPage() {
  return <Page />;
}
