import * as React from "react"
import { SidebarFilmLinks } from "./index"
import demoFilms from "./data"

export default {
    title: "4 Components/All/SidebarFilmLinks"
}

export const Example = () =>
    <div style={{padding: "20px", maxWidth: "350px"}}>
        <SidebarFilmLinks films={demoFilms} />
    </div>
