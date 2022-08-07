module.exports = {
  // glob pattern matches: story|prefixed.story|stories|prefixed.stories .jsx|.tsx|.mdx
  stories: ["../src/**/*stor{y,ies}.{[jt]s,md}x"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-controls",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    "storybook-addon-designs",
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
