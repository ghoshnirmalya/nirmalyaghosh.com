---
date: "2021-09-19T05:10:13.593Z"
title: Understand Component-Oriented Styling using Styletron
tags:
  - react.js
categories:
  - css
keywords:
  - Styletron
description: Learn how to style your React components using Styletron.
slug: understand-component-oriented-styling-styletron
lastmod: "2021-10-08T04:21:00.810Z"
draft: false
---

In this tutorial, we'll learn about the problems with styling [React](https://reactjs.org/) applications and how we can solve them using [Styletron](https://www.styletron.org/).

## Introduction

I've been using [React](https://reactjs.org/) for quite some time now. In that time, the one thing which I've felt is most difficult while creating React applications is **how to style them in a maintainable manner**. There are various ways in which we can styles applications:

- [Styled components](https://styled-components.com/)
- [Emotion](https://emotion.sh/docs/introduction)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Glamour](https://github.com/threepointone/glamor)
- [Fela](http://fela.js.org/)
- [Styletron](https://github.com/styletron/styletron)

All of these will generate classes based on how we write the styles for each class.

```jsx
const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

The above code will generate the following HTML:

```html
<div>
  <button class="sc-fzXfMz bXoZBN">Normal</button>
  <button class="sc-fzXfMz fLZIOt">Primary</button>
</div>
```

It will also generate the following buttons:

![Buttons using Styled Components](/images/content/understanding-component-oriented-styling-using-styletron/1.png)

The generate CSS will be:

```css
.bXoZBN {
  color: palevioletred;
  font-size: 1em;
  background: white;
  margin: 1em;
  padding: 0.25em 1em;
  border-width: 2px;
  border-style: solid;
  border-color: palevioletred;
  border-image: initial;
  border-radius: 3px;
}

.fLZIOt {
  color: white;
  font-size: 1em;
  background: palevioletred;
  margin: 1em;
  padding: 0.25em 1em;
  border-width: 2px;
  border-style: solid;
  border-color: palevioletred;
  border-image: initial;
  border-radius: 3px;
}
```

As we can see here that based on the styles, each component will generate a different class. This is very good when we want to create a component library or we want to create separate styles for everything in our application. The downside is that, as our application grows, the amount of styles also grows. In most cases, these styles are injected inline and are downloaded before the HTML is rendered on the page. Having a large amount of inline-styles will slow down the initial loading of your page. However, once the page is cached, the subsequent page loads will be faster.

What if the [CSS-in-JS](https://cssinjs.org/) adapter we're using could generate classes for each style definition and then re-use them across all our components. For example, if our adapter could generate a class like:

```css
.text-white {
  color: white;
}
```

Then, this could be re-used in our component to generate HTML like:

```html
<div>
  <button class="text-white bg-orange">Normal</button>
  <button class="text-white bg-red">Primary</button>
</div>
```

In this case, the amount of styles will be much lesser as the adapter isn't creating new styles for all the components. Instead, it's creating classes for each style definition and re-using them for all our components.

This is exactly what [Styletron](https://www.styletron.org/) does.

We can just code like:

```jsx
import { useStyletron } from "styletron-react";
export default () => {
  const [css] = useStyletron();
  return (
    <a
      href="/getting-started"
      className={css({
        fontSize: "20px",
        color: "red",
      })}
    >
      Start!
    </a>
  );
};
```

The above code will generate the following HTML:

```html
<html>
  <head>
    <style>
      .foo {
        font-size: 20px;
      }
      .bar {
        color: red;
      }
    </style>
  </head>
  <body>
    <a href="/getting-started" class="foo bar">Start!</a>
  </body>
</html>
```

It will also generate the following link:

![Link using Styletron](/images/content/understanding-component-oriented-styling-using-styletron/2.png)

## Features of Styletron

Styletron has a [host of features](https://www.styletron.org/concepts) like:

1. [Defining our own Media Queries And Pseudo Classes](https://www.styletron.org/concepts/#media-queries-and-pseudo-classes)
2. [Using CSS Selectors](https://www.styletron.org/concepts/#selectors)
3. [Using our own Fonts](https://www.styletron.org/concepts/#fonts)
4. [Using Keyframes](https://www.styletron.org/concepts/#keyframes)
5. [Vendor Prefixes are added by Styletron](https://www.styletron.org/concepts/#vendor-prefixes)
6. [Theming](https://www.styletron.org/react/#themes)
7. [Testing](https://www.styletron.org/react/#testing)
8. [Debugging](https://www.styletron.org/react/#debugging)

## Usages

We can use Styletron [with React](https://www.styletron.org/react/). It already has examples for using with the following:

1. [React](https://www.styletron.org/#with-react)
2. [Gatsby](https://www.styletron.org/#with-gatsby)
3. [Nextjs](https://www.styletron.org/#with-nextjs)

## Conclusion

In this article, we've learnt about Styletron and how it can help us reduce the amount of styles that we ship with our application. I hope that this article helps you in your future projects.
