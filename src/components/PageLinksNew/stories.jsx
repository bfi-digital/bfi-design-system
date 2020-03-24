import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { PageLinksNew } from "./index"
import three, { two } from "./data"

export default {
    title: "All Components/PageLinksNew",
    decorators: [withA11y],
}

export const ThreeLinks = () =>
    <PageLinksNew links={three} />

export const TwoLinks = () =>
    <PageLinksNew links={two} />

export const NineLinks = () =>
    <PageLinksNew links={[
        ...three, ...three, ...three
    ]} />

export const LinksWithImage = () =>
    <PageLinksNew links={three} withImages={true} />

export const SixLinks = () =>
    <PageLinksNew links={[
        ...three, ...three
    ]} />

export const FourLinks = () =>
    <PageLinksNew links={[
        ...two, ...two
    ]} />
