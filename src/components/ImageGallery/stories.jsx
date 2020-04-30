import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ImageGallery } from "./index"

export default {
    title: "2 All Components/ImageGallery",
    decorators: [withA11y]
}

const demoData = [
    {
        url: "http://placehold.it/300x200",
        alt: "Example image",
        caption: "Example image"
    },
    {
        url: "http://placehold.it/200x300",
        alt: "Example image 2"
    },
    {
        url: "http://placehold.it/600x400",
        alt: "Example image 3",
        caption: "Example image 3"
    },
    {
        url: "http://placehold.it/600x400",
        alt: "Example image 4",
        caption: "Example image 4",
        copyright: "Copyright"
    },
    {
        url: "http://placehold.it/600x400",
        alt: "Example image 5",
        caption: "Example image 5"
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
            galleryCaption="A gallery of images"
        />
    </div>
