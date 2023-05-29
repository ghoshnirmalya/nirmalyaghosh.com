import Page from "components/pages/guides/base";

import siteConfig from "config/site";

export const metadata = {
  openGraph: {
    url: `${siteConfig.details.url}/guides`,
  },
};

export default async function GuidesIndexPage() {
  return <Page />;
}
