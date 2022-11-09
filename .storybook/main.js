module.exports = {
  // glob pattern matches: story|prefixed.story|stories|prefixed.stories .jsx|.tsx|.mdx
  stories: ["../src/**/*stor{y,ies}.{[jt]s,md}x"],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "storybook-addon-designs",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          test: [/stories\.jsx?$/]
        }
      }
    }
  ],
  features: {
    previewMdx2: true
  }
}
