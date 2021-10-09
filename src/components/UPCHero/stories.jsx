import * as React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { UPCHero } from "./index";
import { UPCHeroPreferences } from "./preferences";
import { UPCHeroConfirm } from "./confirm";

export default {
  title: "4 Components/All/UPCHero",
  decorators: [withA11y],
};

export const normal = () => (
  <div>
    <UPCHero
      heading="seanhol1984 let’s get you set up"
      text="Tell us what you are interested in, and we will only send you emails based on your choices. You can change this at any time."
    ></UPCHero>
  </div>
);

export const preferences = () => (
  <div>
    <UPCHeroPreferences
      heading="seanhol1984 let’s get you set up"
      text="Tell us what you are interested in, and we will only send you emails based on your choices. You can change this at any time."
    ></UPCHeroPreferences>
  </div>
);

export const confirm = () => {
  const description = (
    <>
      <p>
        For security, we need to confirm you are the owner of the account you
        want to make changes to.
      </p>
      <p>
        We will send you a link via email which you can visit to update them.
      </p>
    </>
  );

  return (
    <div>
      <UPCHeroConfirm
        heading="Change my email preferences"
        text={description}
      ></UPCHeroConfirm>
    </div>
  );
};
