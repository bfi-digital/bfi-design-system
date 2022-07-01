import * as React from "react"
import { CaptionedImage } from "./index"

export default {
    title: "CaptionedImage"
}

export const normal = () =>
    <CaptionedImage src="https://via.placeholder.com/500x250" alt="Alt text">Caption goes here</CaptionedImage>
