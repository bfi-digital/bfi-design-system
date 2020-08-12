import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Highlights } from "./index"
import demoShowings from "./data"

export default {
    title: "4 Components/All/Highlights",
    decorators: [withA11y],
}

export const normal = () =>
    <div style={{
        padding: "20px",
        maxWidth: "1000px"
    }}>
        <Highlights
            highlight={{
                image600x600: "https://placehold.it/600x600",
                imageAltText: "",
                caption: "18 - 29 March at BFI Southbank",
                title: "BFI Flare: London LGBTIQ+ Film Festival 2020 programme announced",
                description: "The best new and classic LGBTIQ+ films from around the world. Priority booking opens to BFI Members at 11:30 on 25 Feb. Champion booking is open.",
                callToActionUrl: "#",
                callToActionTitle: "Explore the programme"
            }}
            todayHighlight={{
                image480x270: "https://placehold.it/480x270",
                imageAltText: "",
                caption: "Current season",
                title: "Fellini Season, Jan-Feb 2020",
                description: "The great Italian director’s centenary will be celebrated with a major two-month retrospective at BFI Southbank.",
                callToActionUrl: "#",
                callToActionTitle: "Explore the season"
            }}
            todayShowings={demoShowings}
            weekHighlight={{
                image480x270: "https://placehold.it/480x270",
                imageAltText: "",
                caption: "Current season",
                title: "Cronenberg Season, Jan-Feb 2020",
                description: "Canadian director David Cronenberg has been making...",
                callToActionUrl: "#",
                callToActionTitle: "Explore the season"
            }}
            weekShowings={demoShowings}
            allShowingsUrl="#"
        />
    </div>