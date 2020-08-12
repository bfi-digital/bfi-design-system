import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ArticleGrid } from "./index"
import demoArticles from "./data"

export default {
    title: "4 Components/All/ArticleGrid",
    decorators: [withA11y],
}

export const multipleArticlesWithHighlight = () =>
    <div style={{
        padding: "10px",
        maxWidth: "1000px",
        margin: "0 auto"
    }}>
        <ArticleGrid articles={[...demoArticles, ...demoArticles, ...demoArticles, ...demoArticles, ...demoArticles, ...demoArticles, ...demoArticles]} firstHighlighted />
    </div>

