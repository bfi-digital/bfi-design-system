import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ArticleKeywords } from "./index"

export default {
    title: "4 Components/All/Article Keywords",
    decorators: [withA11y]
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