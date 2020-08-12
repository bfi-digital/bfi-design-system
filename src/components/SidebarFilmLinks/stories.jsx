import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { SidebarFilmLinks } from "./index"
import demoFilms from "./data"

export default {
    title: "4 Components/All/SidebarFilmLinks",
    decorators: [withA11y]
}

export const Example = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <SidebarFilmLinks films={demoFilms} />
    </div>
