import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { CaptionedImage } from "./index"

export default {
    title: "CaptionedImage",
    decorators: [withA11y]
}

export const normal = () =>
    <CaptionedImage src="https://via.placeholder.com/500x250" alt="Alt text">Caption goes here</CaptionedImage>
