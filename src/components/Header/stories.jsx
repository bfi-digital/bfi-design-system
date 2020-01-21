import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Header } from "./index"
import navItems from "./data"

export default {
    title: "Header",
    decorators: [withA11y],
    component: Header
}

export const withDemoData = () => <Header navItems={navItems} />