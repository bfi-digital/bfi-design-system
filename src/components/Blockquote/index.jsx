import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const Outer = styled.blockquote`
    margin: 20px 0px;
    padding: 15px;
    padding-right: 0;
    padding-left: 40px;
    border-left: 5px solid ${theme.primary};
`

const Quote = styled.q`
    color: ${theme.black};
    font-family: ${theme.headingFont}; 
    display: block;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4;

    @media screen and (min-width: ${theme.m}){
        max-width: calc(${theme.l} - 200px);
    }
    @media screen and (min-width: ${theme.l}){
        font-size: 1.3rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.5rem;
        max-width: calc(${theme.xl} - 400px);
    }
`

const Citation = styled.cite`
    color: ${theme.black};
    display: block;
    font-style: bold;
    margin-top: 10px;
    line-height: ${theme.lineHeight_s};
    font-size: ${theme.fontSize_s};
    @media screen and (min-width: ${theme.l}){
        font-size: ${theme.fontSize_m};
        line-height: ${theme.lineHeight_m};
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: ${theme.fontSize_xl};
    }
`

export const Blockquote = ({
    quote,
    citation
}) =>
    <Outer>
        <Quote>{quote}</Quote>
        {citation && <Citation>{citation}</Citation>}
    </Outer>


Blockquote.propTypes = {
    /** 
	 * The text of the quote
	 **/
    quote: PropTypes.string,
    /** 
	 * Optionally, the attribution of the quote
	 **/
    citation: PropTypes.string
}
