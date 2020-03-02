import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"
import { Button } from "../Button"

const Outer = styled.div`
    padding-bottom: 25px;
    border-bottom: 1px solid ${theme.grey};
    margin-bottom: 35px;
    h3{
        margin-top: 0px;
    }
`

const Date = styled.p``

const Times = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

const Time = styled.li`
    display: inline-block;
    margin: 10px 0px;
    margin-right: 10px;
`

const SoldOut = styled.span`
    margin: 0px;
    border: 2px solid ${theme.darkGrey};
    color: ${theme.darkGrey};
    font-weight: bold;
    border-radius: 5px;
    font-size: 1rem;
    padding: 4px 15px;
`

export const FilmShowings = ({
    name,
    date,
    times
}) =>
    <Outer>
        <Headline level={3} text={name}/>
        <Date>{date}</Date>
        <Times>
            {times.map((time, i) =>
                <Time key={i}>
                    {time.soldOut ?
                        <SoldOut>
                            {time.title} - Sold out
                        </SoldOut>
                        :
                        <Button 
                            secondary 
                            href={time.url} 
                            {...time}
                        >
                            {time.title}
                        </Button>
                    }
                </Time>
            )}
        </Times>
    </Outer>

FilmShowings.propTypes = {
    // Name of the film
    name: PropTypes.string,
    // Date of this showing
    date: PropTypes.string,
    // Array of titles and urls for showing times
    times: PropTypes.array
}