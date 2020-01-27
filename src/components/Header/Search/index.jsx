import * as React from "react"
import theme from "../../_theme"
import styled from "styled-components"
import eyeglass from "./eyeglass.svg"
import eyeglassWhite from "./eyeglass-white.svg"

const Button = styled.button`
    display: none;
    @media screen and (min-width: ${theme.m}){
        display: none;
        border: none;
        cursor: pointer;
        background: none;
        padding: 10px;
        font-size: 1rem;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: ${props => props.isOverlaid ? theme.white : theme.charcoal};
    }
` 

const Img = styled.img`
    margin-right: 10px;
`

const Search = ({isOverlaid}) =>
    <Button isOverlaid={isOverlaid}>
        <Img src={isOverlaid ? eyeglassWhite : eyeglass} alt=""/>
        Search
    </Button>

export default Search