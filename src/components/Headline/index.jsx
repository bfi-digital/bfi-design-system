import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const HeroH1 = styled.h1`
    font-family: "Archivo Black";
    text-transform: uppercase;
    color: ${theme.charcoal};
    font-weight: 800;
    font-size: 1.875rem;
    @media screen and (min-width: ${theme.m}){
        font-size: 1.5625rem;
    }
    @media screen and (min-width: ${theme.l}){
        font-size: 2.0625rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 2.3125rem;
    }
`

const H1 = styled.h1`
    font-family: "Open Sans";
    text-transform: none;
`

const H2 = styled.h2`
    color: ${theme.charcoal};
    font-weight: 400;
    font-size: 1.375rem;
    @media screen and (min-width: ${theme.l}){
        font-size: 1.6875rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 2rem;
    }
`

const H3 = styled.h3`
    color: ${theme.charcoal};
    font-weight: 600;
    font-size: 1.4375rem;
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.6875rem;
    }
`

const H4 = styled.h4`
    font-family: "Archivo Black";
    color: ${theme.charcoal};
    font-weight: 800;
    font-size: 1rem;
    @media screen and (min-width: ${theme.m}){
        font-size: 1.125rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.563rem;
    }
`

export const Headline = ({
    level,
    text
}) => {
    if (level === 0) return <HeroH1>{text}</HeroH1>
    if (level === 1) return <H1>{text}</H1>
    if (level === 2) return <H2>{text}</H2>
    if (level === 3) return <H3>{text}</H3>
    if (level === 4) return <H4>{text}</H4>
    return null
}


Headline.propTypes = {
    /** 
	 * The text of the heading, with a character limit of {INSERT CHARLIMIT}
	 **/
    text: PropTypes.string,
    /** 
	 * A select option, restricted to level 2 & 3 in Drupal, but with options for 1 & 4 for use in the frontend
	 **/
    level: PropTypes.number
}
Headline.defaultProps = {
    level: 2
}