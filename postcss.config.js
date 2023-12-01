const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    require("@csstools/postcss-global-data")({
      files: [
        "node_modules/@rescui/typography/lib/mixins.pcss",
        "node_modules/@jetbrains/kotlin-web-site-ui/out/components/breakpoints/media.pcss",
        "./src/components/Header/media.pcss",
        "./src/styles/palette.css",
      ]
    }),
    require('postcss-mixins'),
    require('postcss-each'),
    postcssPresetEnv({
      stage: 3,
      preserve: true,
      features: {
        'custom-media-queries': true,
        'custom-properties': true,
        'custom-selectors': true,
        'nesting-rules': true
      }
    }),
  ],
};
