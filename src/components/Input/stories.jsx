import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import {Input} from "./index"

export default {
    title: "4 Components/All/Input",
    decorators: [withA11y],
}

export const normal = () => (
    <div style={{padding: "20px"}}>
        <Input
            label="Your email address"
            required
            autoComplete="Email"
            title="Your Email (required)"
            aria-label="Email"
            className="js-cm-email-input qa-input-email"
            id="fieldEmail"
            maxLength="200"
            name="Email"
            type="email"
            value="example@example.com"
            placeholder="Your email..."></Input>
    </div>
)
