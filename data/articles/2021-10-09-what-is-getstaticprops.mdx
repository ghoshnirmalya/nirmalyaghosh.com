---
title: What is getStaticProps in Next.js
slug: what-is-getstaticprops
description: Learn what getStaticProps does in Next.js and how you can use it to create fast sites.
date: "2021-10-08T20:26:32.886Z"
lastmod: "2021-10-09T10:30:03.206Z"
draft: false
tags:
  - next.js
categories:
  - javascript
keywords:
  - Next.js
  - getStaticProps
---

[Next.js](https://nextjs.org/) offers three ways of fetching data from an API:

- **[Server Side Rendering (SSR)](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering):** Useful when you want to fetch data from the server everytime a page loads. The server sends the generated HTML to the client.
- **[Static Site Generation (SSG)](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation):** Useful when you want to generate the HTML when the site builds. This can increase the build time but ensures that no data fetching happens when a page loads.
- **[Incremental Static Re-generation (ISR)](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration):** Similar to SSG but you can re-generate the HTML of pages after an interval without needing to rebuild the entire site.

In this article, you will know more about [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) which is way in which we can generate static pages for our site (using both SSG and ISR).

## Introduction

If your page exports an `async` function named `getStaticProps`, Next.js will pre-render this page at build time using the props that are returned by the `getStaticProps` function.

```jsx
const Page = ({ articles }) => {
  // ArticlesList is a React component which renders the list of articles.
  return <ArticlesList articles={articles} />;
};

export default Page;

export const getStaticProps = async () => {
  return {
    props: {
      articles: [
        {
          title: "Article one",
          body: "This is the body of article one",
        },
        {
          title: "Article two",
          body: "This is the body of article two",
        },
      ],
    },
  };
};
```

The TypeScript version of the above will be:

```tsx {13}
import { GetStaticProps, NextPage } from "next";

interface IProps {
  articles: { title: string; body: string }[];
}

const Page: NextPage<IProps> = ({ articles }) => {
  return <ArticlesList articles={articles} />;
};

export default Page;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      articles: [
        {
          title: "Article one",
          body: "This is the body of article one",
        },
        {
          title: "Article two",
          body: "This is the body of article two",
        },
      ],
    },
  };
};
```

## The context parameter

You can also access the `context` parameter:

```jsx
export const getStaticProps = async (context) => {
  return {
    props: {
      // Your props.
    },
  };
};
```

### Contents of the context parameter

The `context` parameters consists of the following keys:

| Name of key     | Description                                                                                                                         | Example                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `params`        | Parameters for the route                                                                                                            | `{ id: "article-slug"}` |
| `preview`       | Depends on the [preview mode](https://nextjs.org/docs/advanced-features/preview-mode)                                               | `true` or `undefined`   |
| `previewData`   | Data set by [`setPreviewData`](https://nextjs.org/docs/advanced-features/preview-mode#step-1-create-and-access-a-preview-api-route) | `en-US`                 |
| `locale`        | Current locale of your [internationalized Next.js application](https://nextjs.org/docs/advanced-features/i18n-routing)              | `en-US`                 |
| `locales`       | All the locales of your [internationalized Next.js application](https://nextjs.org/docs/advanced-features/i18n-routing)             | `en-US` or `fr`         |
| `defaultLocale` | Default locale of your [internationalized Next.js application](https://nextjs.org/docs/advanced-features/i18n-routing)              | `en-US`                 |

## Return value of getStaticProps

The `getStaticProps` function should return an object with:

| Name         | Description                                   | Optional | Type                                          |
| ------------ | --------------------------------------------- | -------- | --------------------------------------------- |
| `props`      | Whatever is passed will be props to the page  | ✅       | Serializable object                           |
| `revalidate` | Time after which re-generation of page occurs | ✅       | Time (seconds)                                |
| `notFound`   | Allows the page to return a 404 status        | ✅       | Boolean                                       |
| `redirect`   | Redirect to external or internal resources    | ✅       | `{ destination: string, permanent: boolean }` |

## Use-cases for getStaticProps

- Data for the page is available at build time via local files or from a headless CMS.
- Data is generic and doesn't depend on th user.
- Widely used for blogs and websites where the content doesn't change often.
