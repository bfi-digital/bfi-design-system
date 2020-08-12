import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Button } from "./index"

export default {
    title: "4 Components/All/Button",
    decorators: [withA11y]
}

export const primary = () =>
    <div style={{padding: "20px"}}>
        <Button level={1} url="#1">Click me</Button>
    </div>

export const secondary = () =>
    <div style={{padding: "20px"}}>
        <Button level={2} url="#2">Click me</Button>
    </div>

export const tertiary = () =>
    <div style={{padding: "20px"}}>
        <Button level={3} url="#3">Click me</Button>
    </div>