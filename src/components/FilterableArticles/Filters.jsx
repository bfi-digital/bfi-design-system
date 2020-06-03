import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Headline } from "../Headline"

const Outer = styled.nav`
    margin-top: 15px;
    padding-top: 15px;
`

const Filter = styled.button`
    color: ${theme.black};
    font-weight: bold;
    border-radius: 100px;
    font-size: ${theme.fontSize_s};
    padding: 5px 15px;
    margin-right: 10px;
    background-color: transparent;
    border: 1px solid ${theme.darkGrey};
    transition: box-shadow .3s;
    cursor: pointer;
    margin-bottom: 10px;
    
    &::-moz-focus-inner {
        border: 0;
    }
    &:hover{
        border: 1px solid ${theme.primary};
        background-color: ${theme.lightest};
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 4px ${theme.focus};
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

    &.clearBtn {
        background-color: ${theme.lightGrey};
        color: ${theme.black};
    }
`

export const Filters = ({
    filters,
    parameter,
    allAction,
}) => 
    <Outer>
        { filters && filters.length > 1 ?
            <>
                <Filter 
                    disabled={filters.find(filter => filter.active === true) === undefined}
                    onClick={allAction}
                >   All
                </Filter>
                {filters.map(filter =>
                    <Filter 
                        disabled={filter.active}
                        key={filter.value} 
                        onClick={filter.action}
                    >
                        {filter.label}
                    </Filter>
                )}
            </>
            :
            <>
                <Headline level={2} text={"Filtered by " + parameter + (filters ? (": " + filters[0].label) : "")} />
                <Filter 
                    className="clearBtn"
                    onClick={allAction}>Clear filter</Filter>
            </>
        }
    </Outer>
