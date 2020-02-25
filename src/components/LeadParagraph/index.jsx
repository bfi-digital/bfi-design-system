import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const Outer = styled.article`
    color: ${theme.charcoal};
    line-height: 1.5;
    font-size: 1.0625rem;
    margin-bottom: 20px;

    @media screen and (min-width: ${theme.m}){
        font-size: 1.1875rem;
    }
    @media screen and (min-width: ${theme.l}){
        font-size: 1.3125rem;
        max-width: calc(${theme.l} - 10%);
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.5625rem;
        max-width: calc(${theme.xl} - 20%);
    }
`

export const LeadParagraph = ({
    text
}) =>
    <Outer>
        {text}
    </Outer>

LeadParagraph.propTypes = {
    /** 
	 * The text of the lead paragraph
	 **/
    text: PropTypes.string
}