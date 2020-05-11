import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ArticleGrid } from "./index"
import { Skeleton } from "./ArticleCard/Skeleton"
import demoArticles from "./data"

export default {
    title: "2 All Components/ArticleGrid",
    decorators: [withA11y],
}

export const normal = () =>
    <div style={{
        padding: "10px",
        maxWidth: "1000px"
    }}>
        <ArticleGrid articles={demoArticles} />
    </div>

export const loading = () =>
    <div style={{
        padding: "10px",
        maxWidth: "1000px"
    }}>
        <ArticleGrid articles={false} />
    </div>
