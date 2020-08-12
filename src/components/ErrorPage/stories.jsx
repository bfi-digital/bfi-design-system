import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ErrorPage } from "./index"

export default {
    title: "4 Components/All/ErrorPage",
    decorators: [withA11y]
}

export const error404 = () =>
    <ErrorPage 
        error={404}
    />

export const error500 = () =>
    <ErrorPage 
        error={500}
    />
