const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    require("@csstools/postcss-global-data")({
      files: [
        "node_modules/@jetbrains/kotlin-web-site-ui/out/components/breakpoints/media.pcss",
      ]
    }),
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
