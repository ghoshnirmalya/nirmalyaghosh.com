import Page from "components/pages/about/base";
import siteConfig from "config/site";

export const metadata = {
  openGraph: {
    url: `${siteConfig.details.url}/about`,
  },
};

export default async function AboutPage() {
  return <Page />;
}
