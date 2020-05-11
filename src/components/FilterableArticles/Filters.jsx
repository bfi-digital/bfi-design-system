import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import queryString from "query-string"
import { Headline } from "../Headline"

const Outer = styled.nav`
    margin-top: 15px;
    padding-top: 15px;
`

const Filter = styled.button`
    color: ${theme.primary};
    font-weight: bold;
    border-radius: 100px;
    font-size: 1rem;
    padding: 5px 15px;
    margin-right: 10px;
    background-color: ${theme.lightest};
    border: none;
    transition: box-shadow .3s;
    cursor: pointer;
    margin-bottom: 10px;
    &::-moz-focus-inner {
        border: 0;
    }
    &:hover{
        background-color: ${theme.light}
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 4px ${theme.primary};
    }
    &:active{
        color: ${theme.white};
        background: ${theme.black}
    }
    &[disabled]{
        pointer-events: none;
        color: ${theme.white};
        background: ${theme.primary}
    }
`

export const Filters = ({
    filters,
    parameter,
    query
}) => 
    <Outer>
        { filters.length > 1 &&
            <Filter 
                disabled={!query[parameter]}
                onClick={() => {
                    delete query[parameter]
                    window.location.search = queryString.stringify(query)
                }}
            >   All
            </Filter>
        }
        {filters.map(filter =>
            <Filter 
                disabled={query[parameter] === filter.value}
                key={filter.value} 
                onClick={() => {
                    query[parameter] = filter.value
                    window.location.search = queryString.stringify(query)
                }}
            >
                {filter.label}
            </Filter>
        )}
    </Outer>
