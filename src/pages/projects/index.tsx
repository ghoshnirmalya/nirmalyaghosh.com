import Page from "components/pages/projects/base";
import { getAllProjects } from "lib/get-projects-data";
import { NextPage } from "next";
import Head from "next/head";
import { NextSeo } from "next-seo";
import siteConfig from "config/site";

const ProjectsIndexPage: NextPage = () => {
  const projects = getAllProjects();

  return (
    <>
      <NextSeo
        title={siteConfig.details.title}
        description={siteConfig.details.description}
        openGraph={{
          url: `${siteConfig.details.url}/projects`,
          title: `${siteConfig.details.title}`,
          site_name: siteConfig.details.title,
          type: "article",
          locale: "en_IE",
        }}
      />
      <Page projects={projects} />
    </>
  );
};

export default ProjectsIndexPage;
