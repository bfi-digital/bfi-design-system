import * as React from "react"
import { FilterLinks } from "./index"

export default {
    title: "4 Components/All/Filter-esque Links"
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
