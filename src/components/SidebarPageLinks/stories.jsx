import * as React from "react"
import { SidebarPageLinks } from "./index"
import four, { three } from "./data"

export default {
    title: "4 Components/All/SidebarPageLinks"
}

export const Example = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <SidebarPageLinks links={four} blockTitle="Related pages" />
    </div>

export const ExampleWithoutTitle = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <SidebarPageLinks links={three} />
    </div>
