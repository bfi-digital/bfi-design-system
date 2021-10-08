import * as React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { Checkbox } from "./index";

export default {
  title: "4 Components/All/Checkbox",
  decorators: [withA11y],
};

export const normal = () => (
  <div style={{ padding: "20px" }}>
    <Checkbox
      id="123"
      name="Check"
      label="Subscribe to this"
      value=""
    ></Checkbox>
  </div>
);
