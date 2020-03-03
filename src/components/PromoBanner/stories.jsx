import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { PromoBanner } from "./index"

export default {
    title: "All Components/PromoBanner",
    decorators: [withA11y]
}

export const normal = () =>
    <div style={{padding: "20px"}}>
        <PromoBanner 
            colorScheme={0}
            headline="Watch BFI-picked contemporary and classic films in cinema"
            description="EU demands UK keep chlorinated chicken ban to get trade deal"
            image="http://placehold.it/600x600"
            callToActionTitle="Find out more"
            callToActionUrl="#"
            secondImage="http://placehold.it/150x40"
            secondImageAltText="Test image"
        />
    </div>

export const reversedWithoutSecondImage = () =>
    <div style={{padding: "20px"}}>
        <PromoBanner 
            reversed
            colorScheme={0}
            headline="Watch BFI-picked contemporary and classic films in cinema"
            description="EU demands UK keep chlorinated chicken ban to get trade deal"
            image="http://placehold.it/600x600"
            callToActionTitle="Find out more"
            callToActionUrl="#"
        />
    </div>
