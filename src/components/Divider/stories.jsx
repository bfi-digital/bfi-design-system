import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Divider } from "./index"

export default {
    title: "4 Components/All/Divider",
    decorators: [withA11y]
}

export const normal = () =>
    <Divider />