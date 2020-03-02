import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Highlights } from "./index"

export default {
    title: "All Components/Highlights",
    decorators: [withA11y],
}

export const normal = () =>
    <div style={{
        padding: "20px",
        maxWidth: "1000px"
    }}>
        <Highlights/>
    </div>