import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Legend } from "./index"

export default {
    title: "4 Components/All/Legend",
    decorators: [withA11y]
}

export const normal = () =>
    <div style={{padding: "20px"}}>
        <Legend title="Watch and Discover"></Legend>
    </div>