import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Headline } from "./index"

export default {
    title: "4 Components/All/Headline",
    decorators: [withA11y],
}

export const HeroH1 = () =>
    <Headline level={0} text="My example headline" />

export const level1 = () =>
    <Headline level={1} text="My example headline" />

export const level2 = () =>
    <Headline level={2} text="My example headline" />
    
export const level3 = () =>
    <Headline level={3} text="My example headline" />