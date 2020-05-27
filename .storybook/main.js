const path = require("path")

module.exports = {
  stories: ["../src/**/stories.(tsx|jsx)", "../src/**/*.stories.mdx"],
  addons: [
        "@storybook/addon-a11y",
        "@storybook/addon-docs",
        "@storybook/addon-viewport/register",
        "@storybook/addon-backgrounds/register",
        {
          name: "@storybook/addon-storysource",
          options: {
            rule: {
              test: [/stories\.jsx?$/],
            },
          },
        }
    ],

    webpackFinal: async config => {
        config.module.rules.push({
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve('awesome-typescript-loader'),
            },
          ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },

    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
      ],
    },
};

