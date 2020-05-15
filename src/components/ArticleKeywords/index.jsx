import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"
import PropTypes from "prop-types"
import theme from "../_theme"

const Outer = styled.div`
    margin-top: 50px;
`
const FilterLink = styled(Link)`
    color: ${theme.black};
    font-weight: bold;
    border-radius: 5px;
    font-size: 1rem;
    padding: 5px 15px;
    text-decoration: none;
    margin-right: 10px;
    background-color: transparent;
    border: 2px solid ${theme.black};
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
        box-shadow: 0px 0px 0px 4px ${theme.focus};
    }
    &:active{
        color: ${theme.white};
        background: ${theme.primary}
    }
`
export const ArticleKeywords = ({
    keywords
}) =>
    <Outer>
        {keywords.map(keyword =>
            <FilterLink key={keyword.url} to={keyword.url}>{keyword.label}</FilterLink>
        )}
    </Outer>


ArticleKeywords.propTypes = {
    /** 
    * An aray of the keywords, each with a label and url
    **/
    keywords: PropTypes.array,
}