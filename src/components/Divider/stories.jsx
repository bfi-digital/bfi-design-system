import * as React from "react"
import { Divider } from "./index"

export default {
    title: "4 Components/All/Divider"
}

export const normal = () =>
    <Divider />

export const transparent = () =>
    <Divider istransparent={true} />

export const noSpacing = () =>
    <Divider spacing="none" />

export const clearFloat = () =>
    <Divider clearFloat={true} />
