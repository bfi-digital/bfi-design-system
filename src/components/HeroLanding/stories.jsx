import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { HeroLanding } from "./index"
import { Header } from "../Header"
import navItems, { quickLinksData } from "../Header/data.js"
 
export default {
    title: "2 All Components/HeroLanding",
    decorators: [withA11y],
}

export const normal = () =>
    <HeroLanding 
        image1920x1080="https://bfi-prototype.netlify.com/static/media/watch-banner.b01324c4.jpg"
        headline="Watch a new film, rediscover your old favourites, and get inspired."
        copyright="Image: Firstname Surname"
    />

export const withHeader = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData} overlay={true} />
        <HeroLanding 
            withHeader
            image1920x1080="https://bfi-prototype.netlify.com/static/media/watch-banner.b01324c4.jpg"
            headline="Watch a new film, rediscover your old favourites, and get inspired."
        />
    </>
