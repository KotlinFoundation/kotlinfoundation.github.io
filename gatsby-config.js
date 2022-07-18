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
        extensions: [ '.md' ],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout/index.tsx")
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
