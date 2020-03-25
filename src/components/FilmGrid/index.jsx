import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { FilmCard } from "./FilmCard"
import { Button } from "../Button"

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
    <Outer>
        {films.map(film =>
            <FilmCard key={film.title} {...film}/>    
        )}
        { allFilmsUrl &&
            <CentredButton to={allFilmsUrl}>See more films</CentredButton>
        }
    </Outer>