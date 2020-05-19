import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

export const Outer = styled.blockquote`
    margin: 20px 0px;
    padding: 15px;
    padding-right: 0;
    padding-left: 40px;
    border-left: 5px solid ${theme.primary};
`

const Quote = styled.q`
    color: ${theme.black};
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, "Open Sans", Arial, "Lucida Grande", sans-serif; 
    display: block;
    font-weight: 800;
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
    color: ${theme.black};
    display: block;
    font-style: normal;
    margin-top: 10px;
    line-height: 1.5;
    font-size: 1rem;
    @media screen and (min-width: ${theme.l}){
        font-size: 1.125rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.25rem;
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
