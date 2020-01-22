import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Header } from "./index"
import navItems from "./data"

export default {
    title: "Header",
    decorators: [withA11y],
    parameters: {
        backgrounds: [
            { name: "black", value: "#000000", default: true },
            { name: "white", value: "#ffffff" },
        ]
    }
}

export const withDemoData = () =>
    <Header navItems={navItems} />