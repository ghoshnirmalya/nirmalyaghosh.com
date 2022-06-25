---
date: "2021-09-19T05:10:43.594Z"
title: Automate the Backend stuffs with Strapi and Docker
tags:
  - strapi
  - cms
description: Learn how to get started with Strapi which is an Open Source Headless CMS using Docker.
slug: automate-backend-stuffs-strapi-docker
lastmod: "2021-10-08T04:16:21.269Z"
categories:
  - docker
keywords:
  - Docker
  - Strapi
draft: false
---

In this tutorial, we'll learn about the problems (related to saving our data) that we face while developing front-end applications. We'll explore an open source headless CMS, [Strapi](https://strapi.io/). We'll also learn about how to install and get started with Strapi using [Docker](https://www.docker.com/).

One of the aspects that always tend to be a blocker to me while developing front-end applications is the need for a ways to save the data from the front-end. In the past, I've use [Firebase](https://firebase.google.com/) for saving my data to the database. However, it becomes difficult to manage this as Firebase has strict [data types](https://firebase.google.com/docs/firestore/manage-data/data-types) as well as issues with [scaling](https://itnext.io/lessons-from-a-long-week-with-firebase-b433ce8ee49e), [pricing](https://crisp.chat/blog/why-you-should-never-use-firebase-realtime-database/), etc. For small apps and projects, Firebase works perfectly fine. However, for bigger apps, it presents its own set of problems. For those who don't know, Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.

As a result, I was trying to find an alternate tool which would take care of the back-end. Recently, I came across [Strapi](https://strapi.io/) which is an open source Headless CMS. It's very easy to [get started with Strapi](https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start.html). Also, it has a nice set of plugins in their [marketplace](https://strapi.io/marketplace).

> I'll also write about [Hasura](https://hasura.io/) which connects to our databases & microservices and instantly gives us a production-ready GraphQL API. It's another tool that I found which takes care of the back-end.

## Getting started with Strapi

We'll be using the [Docker version of Strapi](https://github.com/strapi/strapi-docker). This will help us manage the database inside a containerized environment. In case our database gets corrupted, we can remove the container and re-build it again. There are many other advantages of using Docker. Instructions for installing Docker can be obtained from the [Docker documentation](https://docs.docker.com/v17.09/engine/installation/). Once the Docker installation is complete, we can proceed towards installing Strapi. We'll be using Postgres as our database. But, we can also use [SQLite](https://strapi.io/documentation/3.0.0-beta.x/guides/databases.html#sqlite-installation), [MongoDB](https://strapi.io/documentation/3.0.0-beta.x/guides/databases.html#mongodb-installation), MySQL and MariaDB. Example applications using these databases are present in the [Strapi Docker repository](https://github.com/strapi/strapi-docker/tree/master/examples).

## Installing Strapi

First, we need to create a directory named `backend` and then download the [docker-compose.yml](https://github.com/strapi/strapi-docker/blob/master/examples/postgresql/docker-compose.yml) file from the [strapi-docker repository](https://github.com/strapi/strapi-docker). Now, we need to start Docker. Once Docker is up and running, we can go inside the `backend` directory and run our Strapi container:

```bash
cd backend && docker-compose up
```

This will pull **postgres** and **strapi/strapi** images from [Docker Hub](https://hub.docker.com/). So, it might take some time for this operation to complete. Once, everything is done, we'll get the following output:

![Message shown on completing Strapi installation](/images/content/automate-backend-stuffs-with-strapi-and-docker/1.png)

## Creating our first administrator profile

We can now visit [http://localhost:1337/admin](http://localhost:1337/admin) to create our first administrator. On visiting that url, we'll get the following form:

![Form for creating an administrator](/images/content/automate-backend-stuffs-with-strapi-and-docker/2.png)

Once we fill up the form with the required details, we'll be inside the admin panel of Strapi:

![Strapi admin panel](/images/content/automate-backend-stuffs-with-strapi-and-docker/3.png)

Once we're here, it means that our Strapi installation went perfectly fine and everytime Strapi asks us for login credentials, we can login to the admin panel using the credentials we provided while creating the administrator.

## Adding a new content-type

By default, we should have three content-types: **Permission**, **Role** and **User**.

![Default content-types](/images/content/automate-backend-stuffs-with-strapi-and-docker/4.png)

Now, we want to add a **Product** content-type. To do so, we need to click on the

**Create new content-type** link. In the **Display Name** field, we can type **Product**:

![Adding a new content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/5.png)

Then, we can click on **Continue** to add fields for that content-type:

![Adding fields for a new content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/6.png)

We'll add a new **Text** field and call it **name** and select **Short text** as its **type**:

![Adding Name text field for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/7.png)

We'll add another **Text** field and call it **url** and select **Short text** as its **type**:

![Adding URL text field for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/8.png)

We'll add another **Text** field and call it **description** and select **Long text** as its **type**:

![Adding Description text field for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/9.png)

We'll add a **Media** field and call it **image** and select **Single media** as its **type**:

![Adding Image media field for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/10.png)

We can now click on the **Finish** button and then, we need to click on the **Save** button to save our new content-type.

![Saving our Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/11.png)

When we click on the **Save** button, the Strapi server will automatically restart:

![Restarting the Strapi server](/images/content/automate-backend-stuffs-with-strapi-and-docker/12.png)

Once the server restarts completely, we can see our new Product content-type on the sidebar:

![Viewing the entries for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/13.png)

The Product content-type won't have any entries at the moment as we haven't added any entry yet! We can click on **Add New Product** button to add a new entry to the Product content-type:

![Adding a new entry for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/14.png)

We can add the details of our product and then click on the **Save** button to save the entry:

![All entries for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/15.png)

## Viewing entries of a content-type

Strapi generates [routes](https://strapi.io/documentation/3.0.0-beta.x/concepts/routing.html#concept) for our content-types automatically. But, if we visit [http://localhost:1337/products](http://localhost:1337/products), we'd get a **403** response. This happens as our permission isn't set up for that content-type. To resolve this issue, we need to visit **Roles & Permissions** tab and click on the **Public** role:

![Add Public role for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/16.png)

In the Public role tab, we need to find **Product** inside the **Permissions** tab. We need to allow all operations on the Product content-type. We can do so by selecting all the operations (count, create, delete, find, findone and update) or by clicking on **Select All** checkbox.

![Update permissions for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/17.png)

Next, we need to click on the **Save** button on the top right. Now, if we visit [http://localhost:1337/products](http://localhost:1337/products), we'd get a proper response:

![Entries for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/18.png)

## Creating a new entry for a content-type

Based on the permission we've set for the Product content-type, We can also create new entries using the API. We'll be using the [Postman](https://www.getpostman.com/) tool to create a new Product entry.

We just need to do a **POST** request to [http://localhost:1337/products](http://localhost:1337/products) endpoint with the following request body:

![Creating a new entry for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/19.png)

We would get the following response once the entry is created:

![Response for creating an entry for Product content-type](/images/content/automate-backend-stuffs-with-strapi-and-docker/20.png)

## Conclusion

We've leveraged Strapi, a Headless CMS to design the APIs for our back-end application. In the subsequest tutorials, we'd utlize these APIs to build front-end applications.

I hope that this tutorial helps you in your future projects.
