import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Landmark } from "./index"

export default {
    title: "4 Components/All/Landmark",
    decorators: [withA11y],
}

export const normal = () =>
    <Landmark>
        <section>Landmark content</section>
    </Landmark>
