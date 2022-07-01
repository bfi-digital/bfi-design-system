import React from "react"
import { ArticleGrid } from "./index"
import demoArticles from "./data"

export default {
    title: "4 Components/All/ArticleGrid"
}

export const multipleArticlesWithHighlight = () =>
    <div style={{
        padding: "10px",
        maxWidth: "1000px",
        margin: "0 auto"
    }}>
        <ArticleGrid articles={[...demoArticles, ...demoArticles, ...demoArticles, ...demoArticles, ...demoArticles, ...demoArticles, ...demoArticles]} firstHighlighted />
    </div>

