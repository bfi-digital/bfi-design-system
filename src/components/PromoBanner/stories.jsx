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
            headline="Watch BFI-picked contemporary and classic films in cinema"
            description="EU demands UK keep chlorinated chicken ban to get trade deal"
            image480x320="http://placehold.it/480x320"
        />
    </div>
