import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { SidebarStrandBanner } from "./index"
import strandExample, { strand2 } from "./data"

export default {
    title: "4 Components/All/SidebarStrandBanner",
    decorators: [withA11y]
}

export const Example = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <SidebarStrandBanner strand={strandExample} />
    </div>

export const Example2 = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <SidebarStrandBanner strand={strand2} />
    </div>
