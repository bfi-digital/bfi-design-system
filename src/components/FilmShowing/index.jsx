import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"
import { Button } from "../Button"

const Outer = styled.div`
    padding-bottom: 15px;
    border-bottom: 1px solid ${theme.grey};
    margin-bottom: 35px;
    h4{
        margin-top: 0px;
        margin-bottom: 0px;
    }
`

const Date = styled.p`
    margin-top: 5px;
    margin-bottom: 5px;
`

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
    font-weight: ${theme.fontWeight_bold};
    // border-radius: 5px;
    font-size: ${theme.fontSize_s};
    padding: 4px 15px;
    cursor: no-drop;
`

export const FilmShowing = ({
    name,
    date,
    times
}) =>
    <Outer>
        {name && <Headline level={7} text={name}/>}
        <Date>{date}</Date>
        <Times>
            {times.map((time, i) =>
                <Time key={time.id ? time.id : i}>
                    {time.soldOut ?
                        <SoldOut>
                            {time.time} - Sold out
                        </SoldOut>
                        :
                        <Button 
                            level={2}
                            href={time.url} 
                            title="Book this at BFI Southbank"
                            {...time}
                        >
                            {time.time}
                        </Button>
                    }
                </Time>
            )}
        </Times>
    </Outer>

FilmShowing.propTypes = {
    /** 
    * Name of the film
    **/
    name: PropTypes.string,
    /** 
    * Date of this showing
    **/
    date: PropTypes.string,
    /** 
    * Array of titles and urls for showing times
    **/
    times: PropTypes.array
}