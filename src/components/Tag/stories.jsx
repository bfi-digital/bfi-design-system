import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Tag } from "./index"

export default {
    title: "All Components/Tag",
    decorators: [withA11y]
}

export const primary = () => <Tag>Example tag</Tag>