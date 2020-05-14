import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'rgb(120, 61, 246)',
  colorSecondary: 'rgb(49, 15, 122)',

  // UI
  appBg: 'rgb(246, 246, 246)',
//   appContentBg: 'silver',
//   appBorderColor: 'grey',
//   appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
//   fontCode: 'monospace',

  // Text colors
  textColor: 'rgb(0, 0, 0)',
  textInverseColor: 'rgb(255,255,255)',
  linkColor: 'rgb(255, 34, 200)',

  // Toolbar default and active colors
//   barTextColor: 'silver',
//   barSelectedColor: 'black',
//   barBg: 'hotpink',

  // Form colors
//   inputBg: 'white',
//   inputBorder: 'silver',
//   inputTextColor: 'black',
//   inputBorderRadius: 4,

  brandTitle: 'BFI Design System',
  brandUrl: 'https://bfi.org.uk',
  // brandImage: 'https://placehold.it/350x150',
});


import addons from '@storybook/addons'
import { STORY_RENDERED } from '@storybook/core-events'

addons.register('TitleAddon', api => {
  const cunstomTitle = 'BFI Design System'; // Define your customTitle title
  let interval = null;
  const setTitle = () => {
    clearTimeout(interval);
    let storyData = null;
    try {
        storyData = api.getCurrentStoryData(); // Some time get error
    } catch(e) {}
    let title;
    if (!storyData) {
        title = cunstomTitle;
    } else {
        title = `${storyData.kind} - ${storyData.name} ⋅ ${cunstomTitle}`
    }
    if (document.title !== title) { // As few dom operations as possible
        document.title = title;
    }
    interval = setTimeout(setTitle, 100);
  };
  setTitle();
  api.on(STORY_RENDERED, story => {
    setTitle();
  })
});