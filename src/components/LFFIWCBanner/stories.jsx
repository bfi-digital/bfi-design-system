import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { LFFIWCBanner } from "./index"

export default {
    title: "4 Components/All/Programme Banner",
    decorators: [withA11y]
}

export const LFFExample = () =>
    <LFFIWCBanner />


