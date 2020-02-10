import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Hero } from "./index"

export default {
    title: "Hero",
    decorators: [withA11y],
}

export const normal = () =>
    <Hero 
        image="https://bfi-prototype.netlify.com/static/media/watch-banner.b01324c4.jpg"
        headline="Watch a new film, rediscover your old favourites, and get inspired."
    />

export const fullHeight = () =>
    <Hero 
        image="https://bfi-prototype.netlify.com/static/media/watch-banner.b01324c4.jpg"
        headline="Watch a new film, rediscover your old favourites, and get inspired."
        fullHeight={true} 
    />