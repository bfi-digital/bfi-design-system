import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { NewsletterSignUp } from "./index"

 
export default {
    title: "4 Components/All/Newsletter Sign Up (User preference centre)",
    decorators: [withA11y],
}

export const example = () =>
    <div style={{
        padding: "20px"
    }}>
        <NewsletterSignUp title="Sign up for mail bulletins, the latest in film and all the latest news" desc="Choose what interests you and never miss a thing." changePreferencesUrl="http://www.example.com" onSignUp={(email) => alert(`Sign up requested for ${email}`)} />
    </div>
