import React from "react"
import { ShowFilmGrid } from "../ShowFilmGrid"
import { ShowEventGrid } from "../ShowEventGrid"

export const ShowGridAll = ({
    shows,
    showType
}) =>
    showType === "film" ?
        <ShowFilmGrid films={shows} />
        :
        showType === "event" &&
            <ShowEventGrid events={shows} />

