import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { EventCard } from "./EventCard"
import { Button } from "../Button"
import { Headline } from "../Headline"
import { Skeleton } from "./EventCard/Skeleton"

const Outer = styled.div`
    margin: 15px 0;
    padding: 15px 0;
    padding-top: 15px;
    margin-top: ${theme.standardSpace}px;
    position: relative; 

    h2 {
        margin-top: 0;
        margin-bottom: ${theme.standardSpace}px;
        text-align: center;
    }

    &:before {
        display: none;
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -9998px;
        right: 0;
        box-shadow: 9999px 0 0 ${theme.grey};
        border-left: 9999px solid ${theme.grey};
        z-index: -1;
    }
`
const Events = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    flex-wrap: wrap;
`
const CentredButton = styled(Button)`
    margin: ${theme.standardSpace}px auto;
    max-width: 250px;
    display: block;
    text-align: center;
`

const StyledHeadline = styled(Headline)`
    text-align: center;
`   

export const ShowEventGrid = ({
    events,

    favouritable,
    onFavourite,
    onUnfavourite
}) => {
    const [currentNumber, setCurrentNumber] = useState(3)

    return(
        <Outer className="article_grid_block">
            {events &&
                <Events>
                    {events.map(article =>
                        <EventCard favouritable={favouritable} onFavourite={onFavourite} onUnfavourite={onUnfavourite} key={article.uuid} {...article}/>    
                    )}
                </Events>
            }
        </Outer>
    )
}
