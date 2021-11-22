---
title: What is Incremental Static Re-generation in Next.js
slug: what-is-incremental-static-re-generation-in-nextjs
description: Learn what Incremental Static Re-generation is and how to use it to build fast Next.js applications.
date: "2021-10-10T03:40:10.331Z"
lastmod: "2021-10-14T17:02:23.154Z"
draft: false
tags:
  - next.js
categories:
  - javascript
keywords:
  - Next.js
---

If you update the content of a page, you will again have to build and deploy your Next.js application for the new content to appear. This is be cause, once the HTML of the page is generated during the build time, the HTML content is not updated until the next build.

Next.js provides a functionality called Incremental Static Regeneration (or ISR) through which you can re-generate the HTML of your static pages withouth rebuilding your entire site.

## What is Incremental Static Regeneration?

[In a previous post](https://nirmalyaghosh.com/articles/getting-started-with-next.js), I had mentioned about [Incremental Static Regeneration](https://nirmalyaghosh.com/articles/getting-started-with-next.js#incremental-static-regeneration-isr). In this post, you will learn about ISR in more details.

In a Next.js application, you can use ISR to re-generate the HTML content on a per-page basis by setting the `revalidate` property inside your `getStaticProps` function.

Let's consider the following example of a Next.js page with the `getStaticProps` function:

```jsx {25} showLineNumbers
// Just a simple JSON file which has the `sections` key.
import sections from "../data.json";

export default function LandingPage({ sections }) {
  return (
    <div>
      {sections.map((section) => {
        return (
          <div key={section.id}>
            <h2>{section.heading}</h2>
            <p>{section.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      // This file was imported on line 2
      sections,
    },
    revalidate: 100,
  };
}
```

The `getStaticProps` function on line 19 is called during the build time. It is called only on the server side. If the `revalidate` key is returned from the `getStaticProps` function, then that function is called at most once after the time (in seconds) has passed.

<Callout type="info">

There is another example on [this
page](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration)
which also shows how the
[`getStaticPaths`](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)
function works inside ISR.

</Callout>

The re-generation of the page happens in the background. Based on the availability
of the new content, the cache is invalidated.

## Conclusion

Using ISR, we can use a static yet dynamic system of generating content and invalidating cache based on your requirements. When you are building a static blog using markdown files, this might not be very useful. But, when you are fetching data from a CMS and want to always render updated content on you application, you can use ISR.

You can of course use the SSR capabilities of Next.js. But, using ISR, you will generate pages which are static and can be cached. Using SSR, new data will always be fetched on the server.
