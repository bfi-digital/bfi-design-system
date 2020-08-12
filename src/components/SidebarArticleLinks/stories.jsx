import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { SidebarArticleLinks } from "./index"
import demoArticles from "./data"

export default {
    title: "4 Components/All/SidebarArticleLinks",
    decorators: [withA11y]
}

export const Example = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <SidebarArticleLinks articles={demoArticles} />
    </div>
