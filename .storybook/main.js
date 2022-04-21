const path = require("path")

module.exports = {
  stories: ["../src/**/stories.@(tsx|jsx)", "../src/**/*.stories.mdx"],
  addons: [
        "@storybook/addon-a11y",
        "@storybook/addon-docs",
        "@storybook/addon-viewport",
        "@storybook/addon-backgrounds",
        {
          name: "@storybook/addon-storysource",
          options: {
            rule: {
              test: [/stories\.jsx?$/],
            },
          },
        }
    ]
};
