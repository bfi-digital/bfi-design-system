import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { PageLinks } from "./index"
import four, { three } from "./data"

export default {
    title: "All Components/PageLinks",
    decorators: [withA11y],
}

export const ThreeLinks = () =>
    <PageLinks links={three} colorScheme={0}/>

export const FourLinksWatchTheme = () =>
    <PageLinks links={four} colorScheme={0}/>

export const FourLinksIndustryTheme = () =>
    <PageLinks links={four} colorScheme={1}/>

export const FourLinksLearnTheme = () =>
    <PageLinks links={four} colorScheme={2}/>

export const EightLinks = () =>
    <PageLinks links={[
        ...four, ...four
    ]} colorScheme={0}/>