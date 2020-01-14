import { addons } from "@storybook/addons"
import { create } from "@storybook/theming/create"

addons.setConfig({
  theme: create({
    base: "dark",
  
    brandTitle: 'British Film Institute',
    brandUrl: 'https://bfi.org.uk',
  //   brandImage: 'https://placehold.it/350x150',
  }),
})