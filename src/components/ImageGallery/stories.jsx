import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { ImageGallery } from "./index"
import {Wrapper} from "../PageContainer"

export default {
    title: "4 Components/All/ImageGallery",
    decorators: [withA11y]
}

const landscapeImages = [
    {
        url: "http://placehold.it/500x281",
        alt: "Example landscape image",
        caption: "Example landscape image",
        orientation: "landscape",
    },
    {
        url: "http://placehold.it/500x375",
        alt: "Example landscape image 2",
        orientation: "landscape",
    },
    {
        url: "http://placehold.it/500x390",
        alt: "Example landscape image 3",
        caption: "Example landscape image 3",
        orientation: "landscape",
    },
    {
        url: "http://placehold.it/500x214",
        alt: "Example landscape image 4",
        caption: "Example landscape image 4",
        copyright: "Copyright",
        orientation: "landscape",
    },
    {
        url: "http://placehold.it/500x375",
        alt: "Example landscape image 5",
        caption: "Example landscape image 5",
        orientation: "landscape",
    },
    {
        url: "http://placehold.it/500x281",
        alt: "Example landscape image",
        caption: "Example landscape image 6",
        orientation: "landscape",
    },
    {
        url: "http://placehold.it/500x375",
        alt: "Example landscape image 7",
        orientation: "landscape",
    },
    {
        url: "http://placehold.it/500x375",
        alt: "Example landscape image 8",
        caption: "Example landscape image 8",
        orientation: "landscape",
    },
    {
        url: "http://placehold.it/500x214",
        alt: "Example landscape image 9",
        caption: "Example landscape image 9",
        copyright: "Copyright",
        orientation: "landscape",
    },
    {
        url: "http://placehold.it/500x281",
        alt: "Example landscape image 10",
        caption: "Example landscape image 10",
        orientation: "landscape",
    },
    {
        url: "http://placehold.it/500x281",
        alt: "Example landscape image 10",
        caption: "Example landscape image 11",
        orientation: "landscape",
    }
]

const portraitImages = [
    {
        url: "http://placehold.it/281x468",
        alt: "Example portrait image",
        caption: "Example portrait image",
        orientation: "portrait",
    },
    {
        url: "http://placehold.it/281x468",
        alt: "Example portrait image 2",
        orientation: "portrait",
    },
    {
        url: "http://placehold.it/281x468",
        alt: "Example portrait image 3",
        caption: "Example portrait image 3",
        orientation: "portrait",
    },
    {
        url: "http://placehold.it/281x468",
        alt: "Example portrait image 4",
        caption: "Example portrait image 4",
        copyright: "Copyright",
        orientation: "portrait",
    },
    {
        url: "http://placehold.it/281x468",
        alt: "Example portrait image 5",
        caption: "Example portrait image 5",
        orientation: "portrait",
    },
    {
        url: "http://placehold.it/281x468",
        alt: "Example portrait image 6",
        caption: "Example portrait image 6",
        orientation: "portrait",
    },
    {
        url: "http://placehold.it/281x468",
        alt: "Example portrait image 7",
        orientation: "portrait",
    },
    {
        url: "http://placehold.it/281x468",
        alt: "Example portrait image 8",
        caption: "Example portrait image 8",
        orientation: "portrait",
    },
    {
        url: "http://placehold.it/281x468",
        alt: "Example portrait image 9",
        caption: "Example portrait image 9",
        copyright: "Copyright",
        orientation: "portrait",
    },
    {
        url: "http://placehold.it/281x468",
        alt: "Example portrait image 10",
        caption: "Example portrait image 10",
        orientation: "portrait",
    },
    {
        url: "http://placehold.it/281x468",
        alt: "Example portrait image 11",
        caption: "Example portrait image 11",
        orientation: "portrait",
    },
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }

    return array
}

const mixedImages = landscapeImages.concat(portraitImages)

export const landscape = () =>
    <Wrapper>
        <ImageGallery
            images={landscapeImages}
            galleryCaption="A gallery of images"
        />
    </Wrapper>

export const portrait = () =>
    <Wrapper>
        <ImageGallery
            images={portraitImages}
            galleryCaption="A gallery of images"
        />
    </Wrapper>

export const masonry = () =>
    <Wrapper>
        <ImageGallery
            images={shuffleArray(mixedImages)}
            galleryCaption="A gallery of images"
        />
    </Wrapper>
