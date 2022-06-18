import * as React from "react"
import { StepByStep } from "./index"
import data from "./data"

export default {
    title: "4 Components/All/StepByStep"
}

export const primary = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <StepByStep 
            title="Applying for film funding"
            steps={data}
        />
    </div>
