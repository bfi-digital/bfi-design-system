import React from "react"
import Headline from "./index"

export default { title: "Headline" }

export const withText = () => 
    <Headline>Hello Headline</Headline>

export const withEmoji = () =>
    <Headline>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Headline>