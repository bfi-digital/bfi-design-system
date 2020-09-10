import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { FilmCard } from "./FilmCard"
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

const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
    condition ? wrapper(children) : wrapper2(children)


export const ShowFilmGrid = ({
    films,
    asScroller,
    pageWithSidebar
}) =>
    <>
        <ConditionalWrapper
            condition={asScroller && films.length > 3}
            wrapper={children => <Scroller noOfChildren={films.length} classes="film_grid show_film_block">{children}</Scroller>}
            wrapper2={children => <Outer className="show_film_block">{children}</Outer>}
        >
            {films.map(film =>
                <FilmCard 
                    key={film.id} 
                    inScroller={asScroller && films.length > 3}                    
                    pageWithSidebar={pageWithSidebar}
                    {...film}
                />    
            )}
        </ConditionalWrapper>
    </>