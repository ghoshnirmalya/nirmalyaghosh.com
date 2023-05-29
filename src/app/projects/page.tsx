import Page from "components/pages/projects/base";

import siteConfig from "config/site";

export const metadata = {
  openGraph: {
    url: `${siteConfig.details.url}/projects`,
  },
};

export default async function ProjectsIndexPage() {
  return <Page />;
}
