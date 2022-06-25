---
date: 2021-09-19T05:09:11.274Z
title: Create a Package using React and Publish it to NPM
tags:
  - react.js
categories:
  - javascript
keywords:
  - React.js
description:
  This tutorial will explain how you can create a package from a React component
  and publish it to NPM.
slug: create-package-react-publish-npm
lastmod: 2022-05-01T11:11:52.587Z
draft: false
---

In this tutorial, we'll learn how we can create a package from a React component. We'll also learn how to publish it to [NPM](https://www.npmjs.com/) so that other developers can use our package.

## Introduction

We'd developed a Pagination component in one of our [previous posts](/articles/create-pagination-component-react-theme-ui). We'll be taking inspiration from that component and convert it into a NPM package.

> You'll need a [NPM](https://www.npmjs.com/) account before you can publish a package there. Before we get started, it's recommended to create an account on NPM. You can create [unlimited public packages](https://www.npmjs.com/products) on NPM.

## Bootstrapping a React Component Library

We'll be using [create-react-library](https://github.com/transitive-bullshit/create-react-library) to bootstrap our component library. I've used create-react-library to bootstrap one of my previous NPM package, [React Search Box](https://github.com/ghoshnirmalya/react-search-box). It has a bunch of [features](https://github.com/transitive-bullshit/create-react-library#features) and the Developer Experience is really good. It's really easy to get up and running using create-react-library.

We can bootstrap our project in two ways:

1. By installing create-react-library globally and then creating a new module

```bash
npm install -g create-react-library && create-react-library
```

2. By using [**npx**](https://npm.im/npx)

```bash
npx create-react-library
```

![Bootstrapping project using create-react-library](/images/content/create-a-npm-package-from-a-react-component/6.png)

Now, in one tab, we can run the following command to run rollup to watch our `src` directory and automatically recompile it into `dist` whenever we make any change:

```bash
cd reactjs-pagination-component && yarn start
```

In another tab, we can run the `example` [create-react-app](https://create-react-app.dev/) that's linked to the local version of our package:

```bash
cd reactjs-pagination-component/example && yarn start
```

Our example create-react-app application should be up and running on [http://localhost:3001/](http://localhost:3001/).

![Sample create-react-app application](/images/content/create-a-npm-package-from-a-react-component/7.png)

## Modifying our existing Pagination component to convert it to a re-usable package

In this step, we'll extract the logic necessary for our package and move the rest of the stuffs into the create-react-app application for demo purposes.

We need only the logic for our pagination component. Before that, we need to add the necessary dependencies.

```bash
yarn add @emotion/core
```

This will install [Emotion](https://emotion.sh/docs/introduction#react) which we'll be using to style our Pagination component. Our component should look like the following:

```js:src/index.js
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ReactPaginationComponent = ({
  onChange,
  currentPage,
  totalPages,
  color,
  isLoading
}) => {
  // The logic for generating pagination is taken from
  // https://gist.github.com/kottenator/9d936eb3e4e3c3e02598

  const pageBuffer = 3
  const startPage = currentPage - pageBuffer
  const endPage = currentPage + pageBuffer + 1
  const range = []
  const rangeWithDots = []
  let l

  for (let i = 1; i <= totalPages; i++) {
    if (i == 1 || i == totalPages || (i >= startPage && i < endPage)) {
      range.push(i)
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === pageBuffer) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(i)

    l = i
  }

  if (isLoading) {
    return false
  }

  return (
    <ul
      css={css`
        list-style-type: none;
        padding: 0;
        display: flex;
      `}
    >
      {rangeWithDots.map((pageNumber, index) => {
        return (
          <li
            key={index}
            css={css`
              :not(:last-child) {
                margin-right: 10px;
              }
            `}
          >
            <button
              data-page-number={pageNumber}
              onClick={() => onChange(pageNumber)}
              disabled={pageNumber === '...'}
              css={css`
                border: 1px solid ${color};
                border-radius: 2px;
                color: ${currentPage === pageNumber ? '#fff' : color};
                padding: 5px 10px;
                background-color: ${currentPage === pageNumber
                  ? color
                  : 'transparent'};
                font-size: inherit;

                :hover {
                  cursor: pointer;
                }

                :disabled {
                  border: none;
                  cursor: not-allowed;
                }
              `}
            >
              {pageNumber}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default ReactPaginationComponent
```

> The explanation for the above logic is already explained [here](/articles/create-pagination-component-react-theme-ui). You can refer to that tutorial to understand the logic used for creating the pagination component.

Now, we can import our component in our create-react-app application and render it on the browser:

```js:example/src/App.js
....

import ReactPaginationComponent from 'reactjs-pagination-component'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const handleChange = (pageNumber) => {
    // Logic for handling async calls
  }

  const listNode = () => {
    return (
      <ul>
        {data.map((datum, index) => {
          return <li key={index}>{datum.title}</li>
        })}
      </ul>
    )
  }

  const paginationNode = () => {
    if (isLoading) {
      return false
    }

    return (
      <div className='pagination-component'>
        <ReactPaginationComponent
          color='#333'
          isLoading={isLoading}
          onChange={handleChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    )
  }

  return (
    <div className='container'>
      {listNode()}
      {paginationNode()}
    </div>
  )
}

export default App
```

We should be able to view the demo of our application on [http://localhost:3000/](http://localhost:3000/):

![Demo of create-react-app application](/images/content/create-a-npm-package-from-a-react-component/8.png)

> You can refer this [Pull Request](https://github.com/ghoshnirmalya/react-pagination-box/pull/1) for all the changes.

## Adding NPM information to our local environment

First, we need to [add a registry user account](https://docs.npmjs.com/cli/adduser) on our local machine. On our terminal, we need to execute the following command:

```bash
npm adduser
```

The above command will create or verify a user named `<username>` in the specified registry, and save the credentials to the **.npmrc** file. More information regarding the above command can be obtained [from NPM docs](https://docs.npmjs.com/cli/adduser).

![NPM adduser](/images/content/create-a-npm-package-from-a-react-component/1.png)

We'll see a similar output on our terminal.

Now, if we type the command below, we should be able to view our NPM username:

```bash
npm whoami
```

![NPM whoami](/images/content/create-a-npm-package-from-a-react-component/2.png)

## Initializing NPM with our package

We can use the following command to create a **package.json** file which is necessary for publishing a package to NPM:

```bash
npm init
```

More information regarding the above command can be obtained [from NPM docs](https://docs.npmjs.com/cli/init).

> If you already have a **package.json** file with your project, you can skip the above step.

## Publishing our package to NPM

The final step would be publishing our package to NPM.

```bash
npm publish
```

The above command will publish our package to NPM. More information regarding the above command can be obtained [from NPM docs](https://docs.npmjs.com/cli/publish).

![NPM publish error](/images/content/create-a-npm-package-from-a-react-component/3.png)

It's possible that we might see the above error when we're trying to publish our package. This means that there is already a published package named **react-pagination-component** on NPM. So, we'll need to rename our package.

> You can search for packages in NPM using the [`npm search <package-name>`](https://docs.npmjs.com/cli-commands/search.html) command.

In this case, we can rename our package from **react-pagination-component** to **reactjs-pagination-component** in our **package.json** file:

```json:package.json
{
  "name": "reactjs-pagination-component",

....
```

Now, if we try to publish again, everything should work fine:

```bash
npm publish
```

The above command will generate an output similar to the following:

![NPM publish](/images/content/create-a-npm-package-from-a-react-component/4.png)

Now, we can see that our package [has been published to NPM](https://www.npmjs.com/package/react-pagination-box).

![NPM package page](/images/content/create-a-npm-package-from-a-react-component/5.png)

## Conclusion

In this tutorial, we learnt how we can convert an existing React component into a package and publish it to NPM. We'll be learning more about how to publish updates to our package and release them in a separate tutorial.
