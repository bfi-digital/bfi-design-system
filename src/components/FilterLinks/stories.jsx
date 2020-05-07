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
                url: "#",
                label: "Example link"
            },
            {
                url: "#",
                label: "Where to stream"
            },
            {
                url: "#",
                label: "Where to begin"
            },
            {
                url: "#",
                label: "Five Things"
            }
        ]}
    />