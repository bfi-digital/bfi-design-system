import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Hero } from "./index"
import { Header } from "../Header"
import navItems, { quickLinksData } from "../Header/data.js"
 
export default {
    title: "2 All Components/Hero",
    decorators: [withA11y],
}

export const normal = () =>
    <Hero 
        image1920x1080="https://staging.core-cms.bfi.digital/sites/default/files/styles/responsive/public/1920/1080/1/2020-03/Hero.jpg"
        headline="Watch a new film, rediscover your old favourites, and get inspired."
        copyright="Image: Firstname Surname"
    />

export const withHeader = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData} overlay={true} />
        <Hero 
            withHeader
            image1920x1080="https://staging.core-cms.bfi.digital/sites/default/files/styles/responsive/public/1920/1080/1/2020-03/Hero.jpg"
            headline="Watch a new film, rediscover your old favourites, and get inspired."
        />
    </>
