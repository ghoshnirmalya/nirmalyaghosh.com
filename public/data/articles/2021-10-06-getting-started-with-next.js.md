---
title: Getting started with Next.js
slug: getting-started-with-next.js
description: Learn why you should Next.js for your front-end applications.
date: "2021-10-05T19:27:01.000Z"
lastmod: "2022-01-22T16:48:29.997Z"
draft: false
tags:
  - next.js
categories:
  - javascript
keywords:
  - Next.js
  - Getting started
---

When you want to build an application using [React.js](https://reactjs.org/), there are too many options - [Create React App](https://create-react-app.dev/), [Redwood](https://redwoodjs.com/), [Vite](https://vitejs.dev/) and many more.

## Introduction

Each of them have thier unique use-cases. For example, Redwood is a full-stack framework built on top of React.js and [Prisma](https://www.prisma.io/). So, if you are building a full-stack application, you can use that.

If you want to build only a client-side application, you can consider using Create React App. However, I feel that if you want to have the best developer experience while building front-end applications using React.js, you should consider using [Next.js](https://nextjs.org/).

## Why Next.js

Next.js is a framework built on top of the React.js library and provides the best development experience with a host of features like [SSR and SSG](https://nextjs.org/docs/basic-features/data-fetching), [Image optimization](https://nextjs.org/docs/basic-features/image-optimization), [support for TypeScript](https://nextjs.org/docs/basic-features/typescript), [i18n](https://nextjs.org/docs/advanced-features/i18n-routing) and many more.

Next.js has been around for a long time but gained popularity in the recent years. I have been using Next.js for more than two years. Almost any front-end application that I build now, I use Next.js and I think that you should too. Next.js comes with the best development experience that I have come across.

Let's discuss some of these features in more details and how they make Next.js stand apart from the rest of the options.

### SSR and SSG

Next.js comes with two forms of [pre-rendering](https://nextjs.org/docs/basic-features/pages#pre-rendering):

- **Server Side Rendering (SSR):** In this case, the HTML for a page is generated everytime the client requests for it.
- **Static Site Rendering (SSG):** In this acse, the HTML for a page is generated at build time and will be reused when a client requests for it. No regeneration of HTML happens in this case. SSG was introduced in [version 9.3](https://nextjs.org/blog/next-9-3).

### Image Optimization

Next.js ships with an [Image component](https://nextjs.org/docs/api-reference/next/image) which does a bunch of performance optimizations for your application. Your Next.js application will have good [Web Vitals](https://web.dev/vitals/) if it uses the image component. The image component is built for the following things:

- Improve the performance of your application.
- Reduce [Cumulative Layout Shift](https://web.dev/cls/).
- Lazy load images with optional blurred placeholder.
- Support for resizing of images.

### Incremental Static Regeneration (ISR)

With [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration), you can pre-render your pages using SSG but update those pages after a fixed amount of time. ISR gives the option to re-generate pages which have been generated during the build time.

### File-system based Routing

In a Next.js application, any file inside the pages directory is available as a route. This enhances the development experience of any application. In a typical React.js application, you will have to configure and define your routes in a separate file. However, in Next.js, creating a new route is as easy as adding a new file inside the **pages** directory.

### API Routes

Using [API routes](https://nextjs.org/docs/api-routes/introduction), it's possible to connect to a database and create up a back-end application which can generate the data necessary for your front-end. When a new file is added in the folder **pages/api**, it is mapped to **/api/\*** and is treated as an API endpoint and not as a page.

## Learning Next.js

The best way to learn Next.js is via [Next.js Learn](https://nextjs.org/learn). If you go through the course once, you will be able to understand what Next.js offers. You can also check out the [documentation](https://nextjs.org/docs) for further details.

## Conclusion

The fastest way of creating a new Next.js application is downloading a suitable example application from [the examples directory](https://github.com/vercel/next.js/tree/canary/examples). You can also bootstrap a new Next.js application using their [CLI](https://nextjs.org/docs/getting-started).

I feel that Next.js is improving with every release and they are now investing in [Rust-based tooling](https://nextjs.org/blog/next-11-1#adopting-rust-based-swc). I'm pretty excited about what innovations Next.js will bring in the JavaScript eco-system.
