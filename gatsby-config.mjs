import rehypeSlug from 'rehype-slug';

export default {
  siteMetadata: {
    siteUrl: "https://kotlinfoundation.org/",
    title: "Kotlin Foundation – official site",
    description: `Kotlin Foundation – protect, promote and advance the development of the Kotlin programming language.`,
    author: `@kotlin`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "node_modules/@jetbrains/kotlin-web-site-ui/out/svg/kotlin_64.svg",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          rehypePlugins: [
            rehypeSlug,
          ],
        },
        gatsbyRemarkPlugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
