import * as React from "react"
import { Blockquote } from "./index"

export default {
    title: "4 Components/All/Blockquote"
}

export const withCitation = () =>
    <Blockquote 
        quote="Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should." 
        citation="Ian Malcolm"
    />

export const withoutCitation = () =>
    <Blockquote 
        quote="Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should." 
    />
