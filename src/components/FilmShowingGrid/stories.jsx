import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { FilmShowingGrid } from "./index"

export default {
    title: "2 All Components/FilmShowingGrid",
    decorators: [withA11y]
}

const days = [
    {
        date: "24th February",
        times: [
            {
                time: "3:30pm",
                url: "#"
            },
            {
                time: "6:30pm",
                url: "#"
            },
            {
                time: "8:45pm",
                url: "#",
                soldOut: true
            }
        ]
    },
    {
        date: "24th February",
        times: [
            {
                time: "3:30pm",
                url: "#",
                soldOut: true
            },
            {
                time: "6:30pm",
                url: "#"
            }
        ]
    },
    {
        date: "24th February",
        times: [
            {
                time: "3:30pm",
                url: "#",
                soldOut: true
            },
            {
                time: "6:30pm",
                url: "#"
            }
        ]
    },
    {
        date: "24th February",
        times: [
            {
                time: "3:30pm",
                url: "#",
                soldOut: true
            },
            {
                time: "6:30pm",
                url: "#",
                soldOut: true
            }
        ]
    },
]

export const example = () =>
    <FilmShowingGrid showings={days} />

export const exampleWithTitle = () =>
    <FilmShowingGrid title="La La Land" showings={days} />
