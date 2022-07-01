import * as React from "react"
import { FilmCardSingle } from "./index"
 
export default {
    title: "4 Components/All/FilmCardSingle"
}

export const filmInList = () =>
    <div style={{
        padding: "5px",
        maxWidth: "1000px"
    }}>
        <FilmCardSingle 
            image960x540="https://player.bfi.org.uk/sites/default/files/styles/landscape_1440x810/public/hero-images/La-Dolce-vita-1.jpg"
            title="Le Mépris"
            type="Film"
            director="Jean-Luc Godard"
            year="1963"
            listNumber="1"
            playerUrl="https://player.bfi.org.uk/subscription/film/watch-le-mepris-1963-online"
            southbankUrl="https://player.bfi.org.uk/subscription/film/watch-le-mepris-1963-online"
        />  
    </div>

export const filmNotInList = () =>
    <div style={{
        padding: "5px",
        maxWidth: "1000px"
    }}>
        <FilmCardSingle 
            image960x540="https://player.bfi.org.uk/sites/default/files/styles/landscape_1440x810/public/hero-images/La-Dolce-vita-1.jpg"
            title="Le Mépris"
            type="Film"
            director="Jean-Luc Godard"
            year="1963"
            playerUrl="https://player.bfi.org.uk/subscription/film/watch-le-mepris-1963-online"
        />
    </div>

export const filmNoLinks = () =>
    <div style={{
        padding: "5px",
        maxWidth: "1000px"
    }}>
        <FilmCardSingle 
            image960x540="https://player.bfi.org.uk/sites/default/files/styles/landscape_1440x810/public/hero-images/La-Dolce-vita-1.jpg"
            title="Le Mépris"
            type="Film"
            director="Jean-Luc Godard"
            year="1963"
            filmLink="https://player.bfi.org.uk/subscription/film/watch-le-mepris-1963-online"
        />
    </div>
