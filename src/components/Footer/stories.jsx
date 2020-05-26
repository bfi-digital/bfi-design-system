import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { Footer } from "./index"
import data from "./data"

export default {
    title: "2 All Components/Footer",
    decorators: [withA11y]
}

export const normal = () =>
    <Footer
        menus={data}
        copyrightLinks={[
            {
                title: "Cookies & privacy",
                url: "#"
            },
            {
                title: "Terms & conditions",
                url: "#"
            },
            {
                title: "Accessibility",
                url: "#"
            },
            {
                title: "Help & FAQs",
                url: "#"
            }
        ]}
        copyrightText="&copy; 2020 British Film Institute. All rights reserved. Registered charity 287780"
    />