module.exports = {
  siteMetadata: {
    siteUrl: "https://kotlinfoundation.org/",
    title: "Kotlin Foundation – official site",
    description: `Kotlin Foundation – protect, promote and advance the development of the Kotlin programming language.`,
    author: `@kotlin`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "GOOGLE_TRACK_ID",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "node_modules/@jetbrains/kotlin-web-site-ui/dist/svg/kotlin_64.svg",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [ '.md', '.mdx' ],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout/MarkdownLayout.tsx")
        },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs/`,
      },
      __key: "docs",
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/docs/`,
      },
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
