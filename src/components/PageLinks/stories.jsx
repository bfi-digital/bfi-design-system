import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { PageLinks } from "./index"
import four, { three } from "./data"

export default {
    title: "PageLinks",
    decorators: [withA11y],
}

console.log(four)

export const ThreeLinks = () =>
    <PageLinks links={three}/>

export const FourLinks = () =>
    <PageLinks links={four}/>

export const EightLinks = () =>
    <PageLinks links={[
        ...four, ...four
    ]}/>