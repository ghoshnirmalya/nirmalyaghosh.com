---
date: "2021-09-19T05:10:02.469Z"
title: Use Mirage.js to jumpstart your frontend development
tags:
  - api
categories:
  - javascript
keywords:
  - Mirage.js
description: Learn how to build front-end applications without any back-end APIs using Mirage.
slug: mirage-js-jumpstart-frontend-development
lastmod: "2021-10-08T04:19:46.322Z"
draft: false
---

In this article, we'll learn about how to build a front-end application without back-end APIs using [Mirage](https://miragejs.com/).

## Introduction

As a front-end developer, I've faced multiple issues while integrating front-end applications with back-end APIs. Most of the time, the issue that I've faced was that the back-end isn't ready yet and as a result, I had to either wait for it to be completed or work with static mock data. The problem with working with static mock data is that we won't be able to create, update or delete any data as it isn't persistent data. We can only read data from a sample `.json` file and import it to test our front-end application. As a result, we'll never be sure if our application is working as expected until and unless the whole back-end is ready.

Recently, I came across [Mirage](https://miragejs.com/) which is an API mocking library that lets us build, test and share a complete working JavaScript application without having to rely on any backend services. Unlike other mocking libraries, Mirage makes it easy to recreate dynamic scenarios, the kind that are typically only possible when using a real production server.

Let's learn more about how this tool works in details.

## Getting started with Mirage

Let's create a new application from scratch:

```bash
mkdir mirage-mock-api && cd mirage-mock-api
```

Now, let's install Mirage in our application:

```bash
yarn add --dev miragejs
```

Next, we'll create a route to get a list of dog breeds. Let's create a new file called `server.js` inside `src` directory:

```js:src/server.js

const Mirage = require("miragejs");

function makeServer({ environment = "development" } = {}) {
  let server = new Mirage.Server({
    environment,

    models: {
      dog: Mirage.Model,
    },

    seeds(server) {
      server.create("dog", { name: "Labrador Retrievers" });
      server.create("dog", { name: "German Shepherds" });
    },

    routes() {
      this.namespace = "api";

      this.get("/dogs", (schema) => {
        return schema.dogs.all();
      });
    },
  });

  return server;
}

module.exports = {
  makeServer,
};
```

## Adding Mirage to our front-end application

Let's create a [React](https://reactjs.org/) application using [Create React App](https://create-react-app.dev/):

```bash
npx create-react-app mirage-react-app && cd mirage-react-app
```

Now, let's import the Mirage app that we just created:

```js:src/index.js

import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "mirage-mock-api/src/server";

import App from "./App";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

ReactDOM.render(<App />, document.getElementById("root"));
```

Also, let's test our Mirage API:

```js:src/App.js

import React, { useState, useEffect } from "react";

export default function App() {
  let [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("/api/dogs")
      .then((res) => res.json())
      .then((json) => {
        setDogs(json.dogs);
      });
  }, []);

  return (
    <ul data-testid="dogs">
      {dogs.map((dog) => (
        <li key={dog.id} data-testid={`dog-${dog.id}`}>
          {dog.name}
        </li>
      ))}
    </ul>
  );
}
```

Now, if we visit [http://localhost:3000](http://localhost:3000/), we'll see the Mirage API:

![Mirage API](/images/content/using-mirage-js-to-jumpstart-your-frontend-development/1.png)

## Features of Mirage

1. [Database](https://miragejs.com/docs/main-concepts/database)
2. [Models](https://miragejs.com/docs/main-concepts/models)
3. [Relationships](https://miragejs.com/docs/main-concepts/relationships)
4. [Factories](https://miragejs.com/docs/main-concepts/factories)
5. [Fixtures](https://miragejs.com/docs/main-concepts/fixtures)
6. [Serializers](https://miragejs.com/docs/main-concepts/serializers)

## References

The front-end application is available [here](https://github.com/ghoshnirmalya/tutorial-blogs/tree/master/apps/mirage-mock-api) and the back-end application is available [here](https://github.com/ghoshnirmalya/tutorial-blogs/tree/master/apps/mirage-react-app).

## Conclusion

In this article, we've learnt about Mirage and how it can help us develop front-end applications even when the back-end part isn't ready! I hope that this article helps you in your future projects.
