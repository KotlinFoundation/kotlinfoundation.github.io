module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-css-variables")({ preserve: true }),
    require("@csstools/postcss-global-data")({
      files: [
        "node_modules/@jetbrains/kotlin-web-site-ui/out/components/breakpoints/media.pcss",
      ]
    }),
    require("postcss-custom-media"),
  ],
};
