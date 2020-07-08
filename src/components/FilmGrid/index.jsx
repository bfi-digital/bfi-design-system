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
    allFilmsUrl
}) =>
    <>
        <ConditionalWrapper
            condition={films.length === 4 || films.length === 5 || films.length > 6}
            wrapper={children => <Scroller withoutBreak={allFilmsUrl} noOfChildren={films.length}>{children}</Scroller>}
            wrapper2={children => <Outer>{children}</Outer>}
        >
            {films.map(film =>
                <FilmCard key={film.uuid + "_scroll"} inScroller={films.length === 4 || films.length === 5 || films.length > 6} {...film}/>    
            )}
        </ConditionalWrapper>
        { allFilmsUrl &&
            <CentredButton to={allFilmsUrl}>See more films</CentredButton>
        }
    </>