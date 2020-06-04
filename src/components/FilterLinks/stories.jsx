import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { FilterLinks } from "./index"

export default {
    title: "2 All Components/Filter-esque Links",
    decorators: [withA11y]
}

export const normal = () =>
    <FilterLinks
        links={[
            {
                url: "#1",
                label: "Example link"
            },
            {
                url: "#2",
                label: "Where to stream"
            },
            {
                url: "#3",
                label: "Where to begin"
            },
            {
                url: "#4",
                label: "Five Things"
            }
        ]}
    />