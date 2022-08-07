import * as React from "react"
import { PromoBanner } from "./index"

export default {
    title: "4 Components/All/PromoBanner"
}

export const normal = () =>
    <div style={{padding: "20px"}}>
        <PromoBanner 
            colorScheme={0}
            headline="Watch BFI-picked contemporary and classic films in cinema"
            description="Become a BFI member for £37 a year and get priority booking for BFI London Film Festival, BFI Flare and at BFI Southbank all year around."
            image="https://via.placeholder.com/600x600"
            callToActionTitle="Find out more"
            callToActionUrl="#13"
            secondImage="https://via.placeholder.com/150x40"
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
            image="https://via.placeholder.com/600x600"
            callToActionTitle="Find out more"
            callToActionUrl="#14"
        />
    </div>

export const bannerWithoutImage = () =>
    <div style={{padding: "20px"}}>
        <PromoBanner 
            colorScheme={0}
            headline="Watch BFI-picked contemporary and classic films in cinema"
            description="Become a BFI member for £37 a year and get priority booking for BFI London Film Festival, BFI Flare and at BFI Southbank all year around."
            callToActionTitle="Find out more"
            callToActionUrl="#17"
        />
    </div>

export const secondImageWithPrefix = () =>
    <div style={{padding: "20px"}}>
        <PromoBanner 
            colorScheme={0}
            headline="Watch BFI-picked contemporary and classic films in cinema"
            description="Become a BFI member for £37 a year and get priority booking for BFI London Film Festival, BFI Flare and at BFI Southbank all year around."
            image="https://via.placeholder.com/600x600"
            callToActionTitle="Find out more"
            callToActionUrl="#13"
            secondImage="https://via.placeholder.com/150x40"
            secondImageAltText="Test image"
            secondImagePrefix="Example prefix"
        />
    </div>
