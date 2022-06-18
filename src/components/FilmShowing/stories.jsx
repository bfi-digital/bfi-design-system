import * as React from "react"
import { FilmShowing } from "./index"

export default {
    title: "4 Components/All/FilmShowing"
}

export const aShowing = () =>
    <div style={{padding: "20px"}}>
        <FilmShowing
            name="La La Land"
            date="24th February"
            times={[
                {
                    time: "3:30pm",
                    url: "#"
                },
                {
                    time: "6:30pm",
                    url: "#"
                },
                {
                    time: "8:45pm",
                    url: "#",
                    soldOut: true
                }
            ]}
        />
    </div>

export const soldOut = () =>
    <div style={{padding: "20px"}}>
        <FilmShowing
            name="La La Land"
            date="24th February"
            times={[
                {
                    title: "7:00pm",
                    url: "#",
                    soldOut: true
                },
                {
                    title: "7:00pm",
                    url: "#",
                    soldOut: true
                }
            ]}
        />
    </div>
