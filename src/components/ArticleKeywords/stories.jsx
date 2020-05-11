import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ArticleKeywords } from "./index"

export default {
    title: "2 All Components/Article Keywords",
    decorators: [withA11y]
}

export const normal = () =>
    <ArticleKeywords keywords={[
        {
            label: "Covid-19",
            url: "#"
        },
        {
            label: "BFI National Archive",
            url: "#"
        },
        {
            label: "Video",
            url: "#"
        }
    ]} />