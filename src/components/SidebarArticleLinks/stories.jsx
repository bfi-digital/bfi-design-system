import * as React from "react"
import { SidebarArticleLinks } from "./index"
import demoArticles from "./data"

export default {
    title: "4 Components/All/SidebarArticleLinks"
}

export const Example = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <SidebarArticleLinks articles={demoArticles} />
    </div>
