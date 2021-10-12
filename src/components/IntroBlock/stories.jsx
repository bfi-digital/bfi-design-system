import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { IntroBlock } from "./index"

export default {
    title: "IntroBlock",
    decorators: [withA11y]
}

export const full = () =>
    <IntroBlock src="http://example.com/img.jpg" alt="Alt text" caption="Caption text is here" title="Page title" standfirst="Page standfirst text is here" copyright="Copyright text goes here" />

export const noCopyright = () =>
    <IntroBlock src="http://example.com/img.jpg" alt="Alt text" caption="Caption text is here" title="Page title" standfirst="Page standfirst text is here" />

export const noImage = () =>
    <IntroBlock title="Page title" standfirst="Page standfirst text is here" />
