import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

export const Outer = styled.blockquote`
    margin: 20px 0px;
    padding: 15px;
    padding-right: 0;
    padding-left: 40px;
    border-left: 5px solid ${theme.primary}
`

const Quote = styled.q`
    color: ${props => colorSchemes[props.colorScheme].text};
    font-family: "Archivo Black";
    display: block;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4;

    @media screen and (min-width: ${theme.l}){
        font-size: 1.3rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.5rem;
    }
`

const Citation = styled.cite`
    color: ${props => colorSchemes[props.colorScheme].text};
    display: block;
    font-style: normal;
    margin-top: 15px;
    line-height: 1.5;
    font-size: 1rem;
    @media screen and (min-width: ${theme.l}){
        font-size: 1.125rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.25rem;
    }
`

const colorSchemes = [
    {
        background: theme.lightest,
        text: theme.black,
    }
]

export const Blockquote = ({
    quote,
    citation,
    colorScheme
}) =>
    <Outer colorScheme={colorScheme}>
        <Quote colorScheme={colorScheme}>{quote}</Quote>
        {citation && <Citation colorScheme={colorScheme}>{citation}</Citation>}
    </Outer>


Blockquote.propTypes = {
    /** 
	 * The text of the quote
	 **/
    quote: PropTypes.string,
    /** 
	 * Optionally, the attribution of the quote
	 **/
    citation: PropTypes.string,
    /** 
	 * A number which selects the colour scheme of the blockquote slice, dependant on the pillar the page/post is within.
	 **/
    colorScheme: PropTypes.number
}

Blockquote.defaultProps = {
    colorScheme: 0
}