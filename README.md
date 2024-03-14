## Table of Content

- [How to Make Changes on a Page](#how-to-make-changes-on-a-page)
- [How to Add a Page](#how-to-make-changes-on-a-page)
- [Define Page Metadata](#define-page-metadata)
- [How to Add a news post](#how-to-add-a-news-post)
- [Define Post metadata and images](#define-post-metadata-and-images)
- [Deploy Changes](#deploy-changes)
- [How to Run the Site Locally](#how-to-run-the-site-locally)
- [Set up Your Development Environment](#set-up-your-development-environment)
- [How to Deal with MDX](#how-to-deal-with-mdx-files)

## How to Make Changes on a Page
Basically, pages are written with Markdown markup. You can find all pages in the "src/pages" directory.
To make changes on these pages, you need to know the [Markdown](https://commonmark.org/help/) syntax.
Feel free to edit a page right on GitHub in case of minor changes.

However, some pages, such as the Index, the Structure, and the FAQ page,
have a unique layout that cannot be described only as a Markdown file.
For these, an extended version of the Markdown is used - MDX.
MDX allows you to use JSX in a markdown content. You can find more details in the [MDX documentation](https://mdxjs.com/).

#### Images requirements
Please use images with a minimum width of 1440 pixels.

### FAQ Editing
- find the `faq.md` page in the pages folder (`src/pages`);
- Write a question using the `Question` tag as a wrapper;
- Write an answer using the `Answer` tag as a wrapper;
- Pay attention:
  - the question and the answer tags should be inside the `FAQ` tag that is already in the file;
  - indent one line before and after the markdown text inside the answer tag to get the markdown istead of plain text. More details are [here](#how-to-deal-with-mdx-files).

### Structure Editing
- find the `structure.md` page in the pages folder (`src/pages`);
- each department of organization described as a React Component that receives members and description as following:
  ```jsx
  <Department name="A name of department" members={[{name: "a person name", company: "a company name"}]}>
  
  A department description 
  
  </Department>
  ```
- Add a person's photo to the `src/images/persons` directory as a png file.
  Use the person's name as the file's name. Then it will be wired automatically to the person's view on the page.
- More details how to write a MDX file are [here](#how-to-deal-with-mdx-files).

## How to Add a Page
To add a page, follow these steps:
- Add a "md" file in the pages folder (src/pages). The name of the file will be used as URL path to the page.
  For example, "docs/title-for-your-page.md"
- Define the page title at the beginning of the file, using metadata format. See the [Define Page Metadata](#define-page-metadata) for more details.    
- Write page content using Markdown markup.

## Define Page Metadata
When you create a Markdown file, you need to provide additional data to configure the page.
Be sure to specify the title, other parameters are optional:
```yaml
---
title: "A page title"
layout: "narrow" or "regular"  "wide"
contactUs: true
---
```

This block will be parsed as YAML.
The params are:
- `title` a string value that will be used in the title meta tag of the page, required;
- `layout` a string value that defines content width. "narrow" by default;
- `contactUs` includes a block of the same name on the page;

## How to Add a news post

### Create page
To add a post, follow these steps:
- Add an "{post_dir}/index.md" file in the news folder ([`src/pages/news`](src/pages/news)).
  The `post_dir` of the file will be used as URL path to the page.
  For example, "news/first-silver-members/index.md"
- Define the page title, date and additional data at the beginning of the file, using metadata format.
  See the [Define Post Metadata](#define-post-metadata-and-images) for more details.
- Write page content using Markdown markup.
- _Optional_. Add cover and social images for post.

### Define Post metadata and images
When you create a post markdown file, you need to provide additional data to configure the page.
Be sure to specify the title, other parameters are optional:
```yaml
---
title: "Post news title"
date: 2023-04-13 00:05
---
```

This block will be parsed as YAML. The params are:
- `title` a string value that will be used in the title of the page. **required**;
- `date` a string value in ISO format (2023-01-31 00:05), that will be used as the publication date. **required**;
- `coverImage` - a string relative path value to custom image on [news](https://kotlinfoundation.org/news/) page.
- `socialImage` - a string relative path value to custom image for socials.

[See example](src/pages/news/first-silver-members/)

## Deploy Changes
In order to publish your changes, it is enough that they are included in the master branch on GitHub.
A GitHub Action monitors the changes, and when new commits appear in the master branch, builds the site.
On the [Actions page](https://github.com/KotlinFoundation/kotlinfoundation.github.io/actions/workflows/pages/pages-build-deployment), you can find out the status of the deploy execution.

## How to Run the Site Locally
In case of major changes, it is convenient to build the site locally to make sure that your changes look as you expected.
To do so, please follow the next steps.

### Set up Your Development Environment
- [Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [Node.js](https://nodejs.dev/learn/how-to-install-nodejs) (v14.15 or newer)

### Check Out The Repository
- [Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### Run the Site
In the project's root folder run the following commands:
```shell
npm ci
npm run start
```
Then open http://localhost:8082/ in a browser.
Make changes in a page in `src/pages`.
Saved changes will live reload in the browser.

## How to Deal with MDX
MDX lets you write JSX inside a markdown file.
Just create a React component inside the `components` directory, register it in the Markdown component, located it `src/components/Markdown` folder.
Then you can call the component in a mdx file.
Try not to complicate MDX files with components, and encapsulate logic inside components itself.
To pass a Markdown as a content of React Component, it is necessary to indent one line before and after the markdown text:
```md
regular *markdown*

<YouComponent>

A markdown text that will passed inside the YouComponent \{ text inside curly brackets \}

</YouComponent>
```
