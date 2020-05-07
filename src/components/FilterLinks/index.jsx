import React from "react"
import { Link } from "@reach/router"
import styled from "styled-components"
import theme from "../_theme"
import queryString from "query-string"

const Outer = styled.nav`
    margin: 15px 0;
    padding: 15px 0;
`

const FilterLink = styled(Link)`
    color: ${theme.primary};
    font-weight: bold;
    border-radius: 100px;
    font-size: 1rem;
    padding: 5px 15px;
    text-decoration: none;
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

export const FilterLinks = ({
    links
}) => 
    <Outer>
        {links.map(link =>
            <FilterLink key={link.url} to={link.url}>{link.label}</FilterLink>
        )}
    </Outer>