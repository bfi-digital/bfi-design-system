import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { HeroShow } from "./index"
import { Header } from "../Header/index"
import navItems, { quickLinksData } from "../Header/data"

export default {
    title: "2 All Components/Hero Show",
    decorators: [withA11y],
}

export const normal = () =>
    <>
        <Header navItems={navItems} quickLinks={quickLinksData} />
        <HeroShow 
            image1920x1080="https://player.bfi.org.uk/sites/default/files/styles/landscape_960x540/public/hero-images/lynn_lucy-1920.jpg?itok=KIE4JhQI"
            image192x108="https://player.bfi.org.uk/sites/default/files/styles/landscape_960x540/public/hero-images/lynn_lucy-1920.jpg?itok=KIE4JhQI"
            title="Lynn + Lucy"
            standfirst="Lynn + Lucy premieres online at London Film Festival. A lifelong friendship is tested by tragedy in this atmospheric and intense first feature from acclaimed British shorts director Fyzal Boulifa."
            dateTimeStart="2020-10-08T13:00"
        />
    </>