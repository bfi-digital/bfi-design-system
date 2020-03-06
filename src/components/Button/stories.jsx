import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Button } from "./index"

export default {
    title: "All Components/Button",
    decorators: [withA11y]
}

export const primary = () =>
    <div style={{padding: "20px"}}>
        <Button level={1} url="#">Click me</Button>
    </div>

export const secondary = () =>
    <div style={{padding: "20px"}}>
        <Button level={2} url="#">Click me</Button>
    </div>

export const tertiary = () =>
    <div style={{padding: "20px"}}>
        <Button level={3} url="#">Click me</Button>
    </div>