import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { LeadParagraph } from "./index"

export default {
    title: "2 All Components/Lead paragraph",
    decorators: [withA11y],
}

export const normal = () =>
    <div style={{padding: "20px"}}>
        <LeadParagraph
            text="We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!"
        />
    </div>