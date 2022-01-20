import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ErrorPage, ErrorPageWrapper } from "./index"

export default {
    title: "4 Components/All/ErrorPage",
    decorators: [withA11y]
}

export const error404 = () =>
    <ErrorPageWrapper>
        <ErrorPage error={404}/>
    </ErrorPageWrapper>

export const error500 = () =>
    <ErrorPageWrapper>
        <ErrorPage error={500} />
    </ErrorPageWrapper>