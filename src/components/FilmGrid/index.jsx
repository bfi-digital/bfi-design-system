import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { FilmCard } from "./FilmCard"
import { Button } from "../Button"
import { Scroller } from "../Scroller"

const Outer = styled.section`
    margin-bottom: ${theme.standardSpace*2}px;
    
    @media screen and (min-width: ${theme.s}){
        display: flex;
        -webkit-flex-direction: row;
        -moz-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        flex-wrap: wrap;
    }
`
const CentredButton = styled(Button)`
    margin: 30px auto;
    max-width: 250px;
    display: block;
    text-align: center;
`

const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
    condition ? wrapper(children) : wrapper2(children)


export const FilmGrid = ({
    films,
    allFilmsUrl,
    link
}) => {
    const url = link?.url || allFilmsUrl
    const title = link?.title || "See more films"
    return <>
        <ConditionalWrapper
            condition={films.length > 3}
            wrapper={children => <Scroller withoutBreak={url} noOfChildren={films.length} classes="film_grid">{children}</Scroller>}
            wrapper2={children => <Outer>{children}</Outer>}
        >
            {films.map(film =>
                <FilmCard key={film.uuid + "_scroll"} inScroller={films.length > 3} {...film}/>    
            )}
        </ConditionalWrapper>
        { url &&
            <CentredButton to={url}>{title}</CentredButton>
        }
    </>
}
