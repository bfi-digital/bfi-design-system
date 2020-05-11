import * as React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { FilmCardSingle } from "./index"
 
export default {
    title: "2 All Components/FilmCardSingle",
    decorators: [withA11y],
}

export const filmInList = () =>
    <div style={{
        padding: "20px",
        maxWidth: "620px"
    }}>
        <FilmCardSingle 
            image225x225="https://player.bfi.org.uk/sites/default/files/styles/landscape_1440x810/public/hero-images/La-Dolce-vita-1.jpg"
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
        padding: "20px",
        maxWidth: "620px"
    }}>
        <FilmCardSingle 
            image225x225="https://player.bfi.org.uk/sites/default/files/styles/landscape_1440x810/public/hero-images/La-Dolce-vita-1.jpg"
            title="Le Mépris"
            type="Film"
            director="Jean-Luc Godard"
            year="1963"
            listNumber="1"
            playerUrl="https://player.bfi.org.uk/subscription/film/watch-le-mepris-1963-online"
        />
    </div>

export const filmNoLinks = () =>
    <div style={{
        padding: "20px",
        maxWidth: "620px"
    }}>
        <FilmCardSingle 
            image225x225="https://player.bfi.org.uk/sites/default/files/styles/landscape_1440x810/public/hero-images/La-Dolce-vita-1.jpg"
            title="Le Mépris"
            type="Film"
            director="Jean-Luc Godard"
            year="1963"
            filmLink="https://player.bfi.org.uk/subscription/film/watch-le-mepris-1963-online"
        />
    </div>
