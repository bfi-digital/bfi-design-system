import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { StepByStep } from "./index"
import data from "./data"

export default {
    title: "All Components/StepByStep",
    decorators: [withA11y]
}

export const primary = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <StepByStep 
            title="Applying for film funding"
            steps={data}
        />
    </div>
