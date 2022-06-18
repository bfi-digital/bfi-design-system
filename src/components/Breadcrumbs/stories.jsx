import * as React from "react"
import { Breadcrumbs } from "./index"
import data, {longData} from "./data"

export default {
    title: "4 Components/All/Breadcrumbs"
}

export const normal = () =>
    <Breadcrumbs breadcrumbs={data} />

export const wrapping = () =>
    <Breadcrumbs breadcrumbs={longData} />
