import * as React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { FormCard } from "./index";

export default {
  title: "4 Components/All/FormCard",
  decorators: [withA11y],
};

export const normal = () => (
  <div style={{ padding: "20px" }}>
    <FormCard
      badge="Weekly"
      heading="What are your interests?"
      description="The best classic and new cinema, TV, live events and Q&amp;As at the home of cinema in London"
    ></FormCard>
  </div>
);
