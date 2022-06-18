import React from "react"
import { ErrorPage, ErrorPageWrapper } from "./index"

export default {
    title: "4 Components/All/ErrorPage"
}

export const error404 = () =>
    <ErrorPageWrapper>
        <ErrorPage error={404}/>
    </ErrorPageWrapper>

export const error500 = () =>
    <ErrorPageWrapper>
        <ErrorPage error={500} />
    </ErrorPageWrapper>
