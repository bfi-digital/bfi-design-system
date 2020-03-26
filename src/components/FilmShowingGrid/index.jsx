import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { FilmShowing } from "../FilmShowing"
import { Headline } from "../Headline"

const Outer = styled.section`
    @supports (display: grid){
        @media screen and (min-width: ${theme.m}){
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            div{
                margin-bottom: 0px;
            }
        }
        margin-bottom: 35px;
    }
`

export const FilmShowingGrid = ({
    title,
    showings
}) =>
    <>
        {title &&
            <Headline level={3} text={title} />
        }
        <Outer>
            {showings.map(showing =>
                <FilmShowing
                    key={showing.date}
                    date={showing.date}
                    times={showing.times}
                />  
            )}
        </Outer>
    </>

FilmShowingGrid.propTypes = {
    // Optional title for the grid of film showings
    title: PropTypes.string,
    // Array of all showings
    showings: PropTypes.array
}