import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { PageLinksNew } from "./index"
import four, { three } from "./data"

export default {
    title: "All Components/PageLinksNew",
    decorators: [withA11y],
}

export const ThreeLinks = () =>
    <PageLinksNew links={three} />

export const FourLinks = () =>
    <PageLinksNew links={four} />

export const LinksWithImage = () =>
    <PageLinksNew links={three} withImages={true} />

export const SixLinks = () =>
    <PageLinksNew links={[
        ...three, ...three
    ]} />