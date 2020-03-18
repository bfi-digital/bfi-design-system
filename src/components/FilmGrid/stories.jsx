import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { FilmGrid } from "./index"
import demoFilms from "./data"

export default {
    title: "All Components/FilmGrid",
    decorators: [withA11y],
}

export const normal = () =>
    <div style={{
        padding: "10px",
        maxWidth: "1000px"
    }}>
        <FilmGrid films={demoFilms} allFilmsUrl="#"/>
    </div>