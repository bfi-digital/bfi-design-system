import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ProgrammeBannerTop } from "./index"

export default {
    title: "4 Components/All/Programme Banner",
    decorators: [withA11y]
}

export const LFFExample = () =>
    <ProgrammeBannerTop image="https://i.imgur.com/Mp50VE4.png" />

export const noImageExample = () =>
    <ProgrammeBannerTop />

