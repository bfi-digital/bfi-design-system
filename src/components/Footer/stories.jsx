import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Footer } from "./index"

export default {
    title: "All Components/Footer",
    decorators: [withA11y]
}

export const normal = () =>
    <Footer />