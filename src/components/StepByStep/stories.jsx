import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { StepByStep } from "./index"

export default {
    title: "All Components/StepByStep",
    decorators: [withA11y]
}

export const primary = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <StepByStep 
            title="Applying for film funding"
            steps={[
                {
                    title: "Is this fund right for you?",
                    description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                },
                {
                    title: "Prepare your supporting materials",
                    description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                },
                {
                    title: "Apply",
                    description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                },
                {
                    title: "Wait to hear from us",
                    description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                },
                {
                    title: "Your decision",
                    description: "The BFI Audience Fund supports audience facing film projects and organisations of national scale and significant cultural ambition."
                },
            ]}  
        />
    </div>