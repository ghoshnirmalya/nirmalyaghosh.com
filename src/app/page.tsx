"use client";

import Page from "components/pages/index/base/index";
import { getAllArticles } from "lib/get-articles-data";
import sortBy from "lodash/sortBy";
import projects from "public/data/projects.json";

export default async function IndexPage() {
  return (
    <Page
      articles={sortBy(getAllArticles(), ["date"]).reverse().slice(0, 5)}
      projects={projects.slice(0, 5)}
    />
  );
}
