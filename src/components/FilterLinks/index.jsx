import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.nav`
    margin: 15px 0;
    padding: 15px 0;
    padding-bottom: 0;
`

const FilterLink = styled.a`
    color: ${theme.black};
    font-weight: bold;
    border-radius: 100px;
    font-size: 1rem;
    padding: 5px 15px;
    text-decoration: none;
    margin-right: 10px;
    background-color: transparent;
    border: 1px solid ${theme.darkGrey};
    transition: box-shadow .3s;
    cursor: pointer;
    margin-bottom: 10px;
    display: inline-block;
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
`

export const FilterLinks = ({
    links
}) => 
    <Outer>
        {links.map((link, i) =>
            <FilterLink key={i} href={link.url} disabled={link.currentlyActive ? true : false} title={"Show all " + link.label + " articles"}>{link.label}</FilterLink>
        )}
    </Outer>