import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { FilmCard } from "./FilmCard"
import { Button } from "../Button"
import { Scroller } from "../Scroller"

const Outer = styled.section`
    @media screen and (min-width: ${theme.m}){
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

export const FilmGrid = ({
    films,
    allFilmsUrl
}) =>
    <>
        {films.length === 4 || films.length === 5 || films.length > 6 ?
            <>
                <Scroller arrayLength={films.length}>
                    {films.map(film =>
                        <FilmCard key={film.uuid} inScroller={true} {...film}/>    
                    )}
                </Scroller>
                { allFilmsUrl &&
                    <CentredButton to={allFilmsUrl}>See more films</CentredButton>
                }
            </>
            :
            <Outer>
                {films.map(film =>
                    <FilmCard key={film.uuid} {...film}/>    
                )}
                { allFilmsUrl &&
                    <CentredButton to={allFilmsUrl}>See more films</CentredButton>
                }
            </Outer>
        }
    </>