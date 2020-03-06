import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ImageGallery } from "./index"

export default {
    title: "All Components/ImageGallery",
    decorators: [withA11y]
}

const demoData = [
    {
        url: "http://placehold.it/300x200",
        alt: "Example image"
    },
    {
        url: "http://placehold.it/200x300",
        alt: "Example image 2"
    },
    {
        url: "http://placehold.it/600x400",
        alt: "Example image 3"
    },
]

export const normal = () =>
    <div style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto"
    }}>    
        <ImageGallery 
            images={demoData}
            caption="A gallery of three images"
        />
    </div>

export const notClickable = () =>
    <div style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto"
    }}>    
        <ImageGallery 
            images={demoData}
            caption="A gallery of three images"
            lightbox={false}
        />
    </div>