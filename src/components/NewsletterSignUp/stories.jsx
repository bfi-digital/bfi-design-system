import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { NewsletterSignUp } from "./index"
 
export default {
    title: "4 Components/All/Newsletter Sign Up",
    decorators: [withA11y],
}

export const example = () =>
    <div style={{
        padding: "20px"
    }}>
        <NewsletterSignUp />
    </div>
