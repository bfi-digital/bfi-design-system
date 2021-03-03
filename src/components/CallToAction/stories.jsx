import * as React from "react"
import {withA11y} from "@storybook/addon-a11y"
import {CallToAction} from "./index"

export default {
    title: "4 Components/All/Call to Action",
    decorators: [withA11y]
}

export const internalLink = () =>
    <div style={{padding: "20px"}}>
        <CallToAction linkText="Internal Link" linkURL="/"/>
    </div>

export const twoLinks = () =>
    <div style={{padding: "20px"}}>
        <CallToAction linkText="Internal Link" linkURL="/"/>
        <CallToAction linkText="Internal Link" linkURL="/"/>
    </div>
