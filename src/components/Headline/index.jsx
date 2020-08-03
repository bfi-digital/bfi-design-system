import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const HeroH1 = styled.h1`
    font-family: ${theme.headingFont}; 
    // text-transform: uppercase;
    color: ${theme.black};
    font-weight: ${theme.fontWeight_bold};
    font-size: 2.2rem;
    letter-spacing: 1px;
    @media screen and (min-width: ${theme.m}){
        font-size: 2.4rem;
    }
    @media screen and (min-width: ${theme.l}){
        font-size: 2.6rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 2.8rem;
    }
`

const H1 = styled(HeroH1)`
    text-transform: none;
    margin-block-start: 0.75em;
    margin-block-end: 0.5em;
    font-weight: ${theme.fontWeight_bold};

    & + h2 {
        margin-block-start: 25px;
    }
`

const H2 = styled.h2`
    font-family: ${theme.headingFont}; 
    color: ${theme.black};
    font-weight: 700;
    font-size: 1.4375rem;
    margin-block-start: 1.75em;
    margin-block-end: 0.5em;
    line-height: 1.3;

    @media screen and (min-width: ${theme.l}){
        font-size: 1.6875rem;
        margin-block-start: 2em;
    }
    @media screen and (min-width: ${theme.xl}){
        margin-block-start: 2.25em;
        font-size: 2rem;
    }
`

const H3 = styled.h3`
    color: ${theme.black};
    font-weight: ${theme.fontWeight_semiBold};
    font-size: 1.375rem;
    margin-block-start: 1.5em;
    margin-block-end: 0.5em;
    line-height: 1.3;

    @media screen and (min-width: ${theme.xl}){
        font-size: 1.6875rem;
    }
`

const H3Fake = styled.p`
    color: ${theme.black};
    font-weight: ${theme.fontWeight_semiBold};
    font-size: 1.375rem;
    margin-block-start: 1.5em;
    margin-block-end: 0.5em;
    line-height: 1.3;
    margin-top: 0;

    @media screen and (min-width: ${theme.xl}){
        font-size: 1.6875rem;
    }
`

const H4 = styled.h4`
    font-family: ${theme.bodyFont};
    color: ${theme.black};
    font-weight: ${theme.fontWeight_semiBold};
    font-size: ${theme.fontSize_s};
    margin-bottom: 10px;
    line-height: 1.3;

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.fontSize_m};
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.563rem;
    }
`
const H4Fake = styled.h4`
    font-family: ${theme.bodyFont};
    color: ${theme.black};
    font-weight: ${theme.fontWeight_semiBold};
    font-size: ${theme.fontSize_s};
    margin-bottom: 10px;
    line-height: 1.3;
    margin-top: 0;

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.fontSize_m};
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.563rem;
    }
`

const H5 = styled.h5`
    font-family: ${theme.bodyFont};
    color: ${theme.black};
    font-weight: ${theme.fontWeight_semiBold};
    font-size: 0.875rem;
    line-height: 1.3;

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.fontSize_s};
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: ${theme.fontSize_m};
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
    if (level === 5) return <H5>{text}</H5>
    if (level === 6) return <H3Fake className="h3">{text}</H3Fake>
    if (level === 7) return <H4Fake className="h4">{text}</H4Fake>
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