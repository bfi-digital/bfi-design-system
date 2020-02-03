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

export const transparentBackground = () =>
    <Header navItems={navItems} overlay={true} />

export const withOverflowingContent = () =>
    <>
        <Header navItems={navItems} />
        <div style={{
            height: "200vh",
            background: "red",
            width: "100px",
            border: "1px solid blue"
        }}></div>
    </>