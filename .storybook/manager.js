import { addons } from "@storybook/addons"
import { themes } from "@storybook/theming"
import { create } from "@storybook/theming/create"

import bfiTheme from './bfiTheme';

addons.setConfig({
  theme: bfiTheme,
});