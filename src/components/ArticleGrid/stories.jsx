import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ArticleGrid } from "./index"
import demoArticles from "./data"

export default {
    title: "2 All Components/ArticleGrid",
    decorators: [withA11y],
}

export const normal = () =>
    <ArticleGrid articles={demoArticles} />
