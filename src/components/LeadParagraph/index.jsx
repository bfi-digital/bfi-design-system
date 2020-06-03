import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const Outer = styled.p`
    color: ${theme.black};
    font-size: ${theme.fontSize_m};
    line-height: ${theme.lineHeight_m};
    margin-bottom: 30px;
    white-space: pre-wrap;
    margin-top: 0;

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.large_fontSize_m};
        line-height: ${theme.large_lineHeight_m};
    }
    @media screen and (min-width: ${theme.l}){
        max-width: calc(${theme.l} - 10%);
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: ${theme.large_fontSize_xl};
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