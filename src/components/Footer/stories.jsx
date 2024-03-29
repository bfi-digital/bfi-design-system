import * as React from "react"
import { Footer } from "./index"
import data from "./data"

export default {
    title: "4 Components/All/Footer"
}

export const normal = () =>
    <Footer
        menus={data}
        copyrightLinks={[
            {
                title: "Cookies & privacy",
                url: "#1"
            },
            {
                title: "Terms & conditions",
                url: "#2"
            },
            {
                title: "Accessibility",
                url: "#3"
            },
            {
                title: "Help & FAQs",
                url: "#4"
            }
        ]}
        copyrightText="©2020 British Film Institute. All rights reserved. Registered charity 287780"
    />
