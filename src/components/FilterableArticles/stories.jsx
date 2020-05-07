import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { FilterableArticles } from "./index"

export default {
    title: "2 All Components/Filterable Articles",
    decorators: [withA11y]
}

export const normal = () =>
    <FilterableArticles
        parameter="category"
        filters={[
            {
                value: "10-great",
                label: "10 Great"
            },
            {
                value: "where-to-stream",
                label: "Where to stream"
            },
            {
                value: "where-to-begin",
                label: "Where to begin"
            },
            {
                value: "five-things",
                label: "Five Things"
            },
            {
                value: "bfi-recommends",
                label: "BFI Recommends"
            },
            {
                value: "sight-and-sound",
                label: "Sight and Sound"
            }
        ]}
    />