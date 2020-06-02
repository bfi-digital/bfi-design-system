import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { FilmShowingGrid } from "./index"

export default {
    title: "2 All Components/FilmShowingGrid",
    decorators: [withA11y]
}

const days = [
    {
        id: "1234",
        date: "24th February",
        times: [
            {
                id: "10101",
                time: "3:30pm",
                url: "#"
            },
            {
                id: "202020",
                time: "6:30pm",
                url: "#"
            },
            {
                id: "3020",
                time: "8:45pm",
                url: "#",
                soldOut: true
            }
        ]
    },
    {
        id: "12345",
        date: "24th February",
        times: [
            {
                id: "403030",
                time: "3:30pm",
                url: "#",
                soldOut: true
            },
            {
                id: "5050505",
                time: "6:30pm",
                url: "#"
            }
        ]
    },
    {
        id: "123456",
        date: "24th February",
        times: [
            {
                id: "60606",
                time: "3:30pm",
                url: "#",
                soldOut: true
            },
            {
                id: "70707",
                time: "6:30pm",
                url: "#"
            }
        ]
    },
    {
        id: "1234567",
        date: "24th February",
        times: [
            {
                id: "80808",
                time: "3:30pm",
                url: "#",
                soldOut: true
            },
            {
                id: "909090",
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
