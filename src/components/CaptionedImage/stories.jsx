import * as React from "react"
import { CaptionedImage } from "./index"

export default {
    title: "CaptionedImage"
}

export const normal = () =>
    <CaptionedImage src="http://example.com" alt="Alt text">Caption goes here</CaptionedImage>
