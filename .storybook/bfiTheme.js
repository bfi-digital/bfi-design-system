import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'rgb(240, 197, 200)',
  colorSecondary: 'rgb(137, 93, 96)',

  // UI
  appBg: 'rgb(246, 246, 246)',
//   appContentBg: 'silver',
//   appBorderColor: 'grey',
//   appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
//   fontCode: 'monospace',

  // Text colors
  textColor: 'rgb(28, 28, 28)',
  textInverseColor: 'rgb(255,255,255)',
  linkColor: 'rgb(240, 197, 200)',

  // Toolbar default and active colors
//   barTextColor: 'silver',
//   barSelectedColor: 'black',
//   barBg: 'hotpink',

  // Form colors
//   inputBg: 'white',
//   inputBorder: 'silver',
//   inputTextColor: 'black',
//   inputBorderRadius: 4,

  brandTitle: 'British Film Institute',
  brandUrl: 'https://bfi.org.uk',
  // brandImage: 'https://placehold.it/350x150',
});