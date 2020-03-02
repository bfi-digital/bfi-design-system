import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { SidebarPageLinks } from "./index"
import four, { three } from "./data"

export default {
    title: "All Components/SidebarPageLinks",
    decorators: [withA11y]
}

export const Example = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <SidebarPageLinks links={four} blockTitle="Related pages" />
    </div>

export const ExampleWithoutTitle = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <SidebarPageLinks links={three} />
    </div>