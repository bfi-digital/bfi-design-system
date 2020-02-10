import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Breadcrumbs } from "./index"
import data, {longData} from "./data"

export default {
    title: "Breadcrumbs",
    decorators: [withA11y],
}

export const normal = () =>
    <Breadcrumbs breadcrumbs={data} />

export const wrapping = () =>
    <Breadcrumbs breadcrumbs={longData} />