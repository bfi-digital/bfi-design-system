import * as React from "react"
import {CallToAction} from "./index"

export default {
    title: "4 Components/All/Call to Action"
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
