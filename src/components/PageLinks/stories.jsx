import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { PageLinks } from "./index"
import four, { three } from "./data"

export default {
    title: "PageLinks",
    decorators: [withA11y],
}

export const ThreeLinks = () =>
    <PageLinks links={three} colorScheme={0}/>

export const FourLinks = () =>
    <PageLinks links={four} colorScheme={0}/>

export const EightLinks = () =>
    <PageLinks links={[
        ...four, ...four
    ]} colorScheme={0}/>