---
title: How can you use the Next.js Image component
slug: how-can-you-use-the-nextjs-image-component
description: Learn how you can use the Next.js Image component to improve the performance of your application.
date: "2021-10-07T20:06:58.657Z"
lastmod: "2021-10-08T20:20:47.524Z"
draft: false
tags:
  - next.js
categories:
  - javascript
keywords:
  - Next.js
  - Image component
---

Imagine you are building an application which consists of rendering a lot of images. There is a very good chance that your website won't have a good [Lighthouse](https://developers.google.com/web/tools/lighthouse) score because your application's performance will suffer.

## Introduction

Images have a huge impact on the [Largest Contentful Paint](https://web.dev/lcp/) of any application. When an application loads, it requests various assets like JavaScript, images, stylesheets from the server. When the downloading of these files are complete, these assets gets injected in the web page. Until the time an image downloads, its space (height and width) isn't reserved by the webpage unless the height and width attributes of an image as passed explicitly.

Images are generally heavier compared to JavaScript and stylesheet files. Mobile devices have limited resources. So, loading lesser resolution images in mobile devices might be performant. You can also use modern image formats like [WebP](https://developers.google.com/speed/webp).

You might also want to load images only when they appear in the viewport. This technique is also known as lazy loading.

Handling all these things on your own might become tricky and difficult to maintain. You can resolve all these issues using the Next.js [Image component](https://nextjs.org/docs/api-reference/next/image).

## How to use the Image component?

To use the image component, first you will have to import it:

```js
import Image from "next/image";
```

Now, for local images, you can simply import and use the image:

```js {6-8}
import Image from "next/image";
import backgroundImage from from "../images/background.png"

const SomeComponent = () => {
  return (
    <Image
      src={backgroundImage}
      alt="Background image"
    />
  )
}
```

You can also add blur placeholder to the image using the `placeholder` prop:

```js {3}
<Image
  src={backgroundImage}
  placeholder="blur"
  // other props
/>
```

When you are using the Image component for remote images, you will have to provide the `height` and `width` props:

```js
<Image
  src="https://website.com/images/background.png"
  alt="Background image"
  height={200}
  width={400}
/>
```

You can also pass a [blurDataURL](https://nextjs.org/docs/api-reference/next/image#blurdataurl) if you want to use a blurred placeholder for the image.

For remote images, you will also have to update your `next.config.js` file to include the domain from which you are using the image:

```js:next.config.js {2-4}
module.exports = {
  images: {
    domains: ["website.com"],
  },
};
```

## Considerations

One more important thing to note here is that it might not be always possible to know the height and width of the image. In those case, you can set the `layout` prop to `fill`.

Using the `fill` value for the `layout` prop ensures that the wrapping element supplies the styles for the image:

```js {6-13}
import Image from "next/image";
import backgroundImage from from "../images/background.png"

const SomeComponent = () => {
  return (
    <div style={{ position: "relative", width: "400px", height: "200px" }}>
      <Image
        src={backgroundImage}
        alt="Background image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
```

[You can also use `intrinsic`, `fixed` and `responsive` values for the `layout` prop](https://nextjs.org/docs/api-reference/next/image#layout).

## Conclusion

There are many more options that the Image component provides. Check out the [documentation](https://nextjs.org/docs/api-reference/next/image) to know more about them.
