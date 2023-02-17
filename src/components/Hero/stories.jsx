import * as React from "react"
import { Hero } from "./index"
import { Header } from "../Header"
import navItems, { quickLinksData } from "../Header/data.js"
 
export default {
    title: "4 Components/All/Hero"
}

export const normal = () =>
    <Hero 
        image1920x1080="https://staging.core-cms.bfi.digital/sites/default/files/styles/responsive/public/2020-03/Hero.jpg/1920x1080-cropped/Hero.jpg"
        headline="Watch a new film, rediscover your old favourites, and get inspired."
        copyright="HELP MUSICIANS, directed by Thomas Guthrie"
        imageCaption="BFI Southbank Watch a new film, rediscover your old favourites, and get inspired BFI Southbank Watch a new film, rediscover your old favourites, and get inspired"
        imageCopyRight="BFI Southbank Watch a new film, rediscover your old favourites, and get inspired"
    />

export const withHeader = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData} overlay={true} />
        <Hero 
            withHeader
            image1920x1080="https://staging.core-cms.bfi.digital/sites/default/files/styles/responsive/public/2020-03/Hero.jpg/1920x1080-cropped/Hero.jpg"
            headline="Watch a new film, rediscover your old favourites, and get inspired."
        />
    </>
