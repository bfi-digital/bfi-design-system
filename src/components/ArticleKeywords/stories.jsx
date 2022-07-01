import * as React from "react"
import { ArticleKeywords } from "./index"

export default {
    title: "4 Components/All/Article Keywords"
}

export const normal = () =>
    <ArticleKeywords keywords={[
        {
            label: "Covid-19",
            url: "#1"
        },
        {
            label: "BFI National Archive",
            url: "#2"
        },
        {
            label: "Video",
            url: "#3"
        }
    ]} />
