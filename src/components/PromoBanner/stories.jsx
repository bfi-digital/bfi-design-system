import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { PromoBanner } from "./index"

export default {
    title: "2 All Components/PromoBanner",
    decorators: [withA11y]
}

export const normal = () =>
    <div style={{padding: "20px"}}>
        <PromoBanner 
            colorScheme={0}
            headline="Watch BFI-picked contemporary and classic films in cinema"
            description="Become a BFI member for £37 a year and get priority booking for BFI London Film Festival, BFI Flare and at BFI Southbank all year around."
            image="http://placehold.it/600x600"
            callToActionTitle="Find out more"
            callToActionUrl="#"
            secondImage="http://placehold.it/150x40"
            secondImageAltText="Test image"
        />
    </div>

export const reversedImage = () =>
    <div style={{padding: "20px"}}>
        <PromoBanner 
            reversed
            colorScheme={0}
            headline="Watch BFI-picked contemporary and classic films in cinema"
            description="Become a BFI member for £37 a year and get priority booking for BFI London Film Festival, BFI Flare and at BFI Southbank all year around."
            image="http://placehold.it/600x600"
            callToActionTitle="Find out more"
            callToActionUrl="#"
        />
    </div>

export const bannerWithoutImage = () =>
    <div style={{padding: "20px"}}>
        <PromoBanner 
            colorScheme={0}
            headline="Watch BFI-picked contemporary and classic films in cinema"
            description="Become a BFI member for £37 a year and get priority booking for BFI London Film Festival, BFI Flare and at BFI Southbank all year around."
            callToActionTitle="Find out more"
            callToActionUrl="#"
        />
    </div>
