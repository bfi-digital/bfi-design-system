import { addons } from "@storybook/addons"
import { themes } from "@storybook/theming"
import { create } from "@storybook/theming/create"

addons.setConfig({
  theme: create({
    base: 'light',
    // colorPrimary: 'hotpink',
    // colorSecondary: 'deepskyblue',
    // UI
    // Typography
    // fontBase: '"Open Sans", sans-serif',
    // fontCode: 'monospace',
    // Text colors
    // textColor: 'black',
    // textInverseColor: 'rgba(255,255,255,0.9)',
    // Toolbar default and active colors
    // barTextColor: 'silver',
    // barSelectedColor: 'black',
    // barBg: 'hotpink',
    // Form colors
    // inputBg: 'white',
    // inputBorder: 'silver',
    // inputTextColor: 'black',
    // inputBorderRadius: 4,
    brandTitle: 'British Film Institute',
    brandUrl: 'https://bfi.org.uk',
    // brandImage: 'https://placehold.it/350x150',
  }),
})

