---
date: 2021-09-19T05:10:23.013Z
title: Integrate TailwindCSS with Next.js
tags:
  - react.js
  - next.js
  - tailwind
categories:
  - javascript
keywords:
  - Next.js
  - TailwindCSS
description:
  Learn how to use TailwindCSS with Next.js to build maintainable front-end
  applications.
slug: integrate-tailwindcss-js
lastmod: 2022-05-01T11:31:07.296Z
draft: false
---

In this tutorial, we'll learn how to integrate [TailwindCSS](https://tailwindcss.com/) with [Next.js](https://nextjs.org/).

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework which provides Server-Side Rendering out of box. It's a very popular Node.js framework with [over 43k stars on Github](https://github.com/zeit/next.js). It provides a [several features](https://nextjs.org/#features) like [Server-Side rendering](https://nextjs.org/features/server-side-rendering), [Static Exporting](https://nextjs.org/features/static-exporting), [CSS-in-JS](https://nextjs.org/features/css-in-js), etc.

I've worked with Next.js for more than a year and I liked the overall Developer Experience. It's pretty easy to create new pages, add new plugin, routing, etc. On top of all these, they've a lot of [starter templates (or examples)](https://github.com/zeit/next.js/tree/canary/examples/).

Deploying Next.js applications to production using [Zeit](https://zeit.co/) is also [pretty simple](https://zeit.co/solutions/nextjs).

## What is TailwindCSS?

I've already covered about [TailwindCSS](https://tailwindcss.com/) in one of my [previous posts](/articles/tailwindcss). In short, TailwindCSS is a utility-first CSS framework which aims to provide us with a set of utlity classes (like flex, block, inline-block, etc.). In addition to that, it also provides us utility classes to create CSS grids, responsive designs as well as style hover, focus and active pseudo-classes.

## Getting started

Let's start by [bootstrapping a Next.js application](https://github.com/zeit/next.js#setup). To do so, we need to run the following command:

```bash
npx create-next-app
```

If everything works fine, you should get an output like the following:

![Fig 1: Bootstrapping a Next.js application](/images/content/integrating-tailwindcss-with-next-js/1.png)

Once the installation is complete, we'll get a new `frontend` directory as that's the name we gave while creating the application. Let's go inside the `frontend` and start the server:

```bash
cd frontend && yarn dev
```

Now,if we visit [http://localhost:3000](http://localhost:3000/), we'll see the following page:

![Fig 2: Sample Next.js application](/images/content/integrating-tailwindcss-with-next-js/2.png)

## Installing TailwindCSS

I've written about how to integrate TailwindCSS with React in one of my [previous posts](/articles/tailwindcss). The process of integrating TailwindCSS with Next.js will be a similar one.

First, we need to install TailwindCSS:

```bash
yarn add tailwindcss
```

If you prefer npm, you can run the following command instead of the above one:

```bash
npm install tailwindcss
```

Next, we need to use the @tailwind directive to inject Tailwind's base, components, and utilities styles into our CSS. To do that we need to create a new file at `public/assets/styles/vendors.css` add the following code to it:

```scss:public/assets/styles/vendors.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Next, we need to add the `build:style` script to our `package.json` file:

```json:package.json {5}
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "build:style": "tailwind build public/assets/styles/vendors.css -o public/assets/styles/tailwind.css"
},
```

Now, the `build:style` command will generate a new `public/assets/styles/tailwind.css` file whenever we run it:

![Fig 3: Generating new tailwind.css file](/images/content/integrating-tailwindcss-with-next-js/3.png)

Next, we need to add the generated file to our `pages/index.js` file:

```js {4}
import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import "../public/assets/styles/tailwind.css";
```

However, if we visit [http://localhost:3000](http://localhost:3000/), we'll get the following error:

![Fig 4: Error while compiling css files on Next.js](/images/content/integrating-tailwindcss-with-next-js/4.png)

This happens because Next.js doesn't know how to process this file as there is no [Webpack loader](https://webpack.js.org/concepts#loaders) installed in our application which can help in processing the `.css` file. To resolve this issue, we'll have to install the [next-css](https://github.com/zeit/next-plugins/tree/master/packages/next-css) plugin:

```bash
yarn add @zeit/next-css
```

Next, we need to configure Next.js to use that loader. To do that, we need to create a [next.config.js](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config) in the root of our project and add the following code to it:

```js
const withCSS = require("@zeit/next-css");

module.exports = withCSS({});
```

That's all we need to do to make TailwindCSS work with Next.js. To verify whether TailwindCSS is working or not, we can add a TailwindCSS class. We can add the `bg-blue-900 py-8` class to our `pages/index.js` file:

```js {8}
const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div className="hero bg-blue-100 py-8">
      <h1 className="title">Welcome to Next.js!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
```

Now, if we restart our server and visit [http://localhost:3000](http://localhost:3000/), we'll see that TailwindCSS is working as expected:

![Fig 5: Integrating TailwindCSS with Next.js](/images/content/integrating-tailwindcss-with-next-js/5.png)

If you want to know more about configuring Tailwind, you can read it [here](/articles/tailwindcss).

## Conclusion

In this tutorial, we've learnt how to use TailwindCSS with a Next.js application. In the future, we'll build a [ProductHunt](https://www.producthunt.com/) clone using [React](https://reactjs.org/) and [GraphQL](https://graphql.org/).

I hope that this tutorial helps you in your future projects.
