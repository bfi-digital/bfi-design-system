import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ShowingTabs } from "./index"

export default {
    title: "All Components/Tabs",
    decorators: [withA11y]
}

export const primary = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <ShowingTabs/>
    </div>
