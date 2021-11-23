import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const HeroH1 = styled.h1`
    // text-transform: uppercase;
    font-family: ${theme.bodyFont}; 
    color: ${theme.black};
    font-weight: bold;
    font-size: 2.2rem;

    @media screen and (min-width: ${theme.m}){
        font-family: ${theme.headingFont}; 
        font-size: 2.4rem;
    }
    @media screen and (min-width: ${theme.l}){
        font-size: 2.6rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 2.8rem;
    }

    &.visuallyHidden {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    &.visuallyHidden:active,
    &.visuallyHidden:focus {
        clip: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        position: static;
    }
`

const H1 = styled(HeroH1)`
    text-transform: none;
    margin-block-start: 0.75em;
    margin-block-end: 0.5em;
    font-weight: bold;

    & + h2 {
        margin-block-start: 25px;
    }
`

const H2 = styled.h2`
    font-family: ${theme.bodyFont}; 
    color: ${theme.black};
    font-weight: bold;
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
    font-weight: bold;
    font-size: 1.25rem;
    margin-block-start: 1.5em;
    margin-block-end: 0.5em;
    line-height: 1.3;

    @media screen and (min-width: ${theme.xl}){
        font-size: 1.6875rem;
    }
`

const H3Fake = styled.p`
    color: ${theme.black};
    font-weight: bold;
    font-size: 1.25rem;
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
const H4Fake = styled.p`
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

const classes = (...names) =>names.filter(Boolean).join(" ")

export const Headline = ({
    level,
    text,
    visuallyHidden,
    className = null,
    ...props
}) => {
    const cls = classes(className, visuallyHidden && "visuallyHidden")
    if (level === 0) return <HeroH1 className={cls} aria-label={visuallyHidden ? text : ""} {...props}>{text}</HeroH1>
    if (level === 1) return <H1 className={cls} aria-label={visuallyHidden ? text : ""}>{text}</H1>
    if (level === 2) return <H2 className={cls} aria-label={visuallyHidden ? text : ""}>{text}</H2>
    if (level === 3) return <H3 className={cls} aria-label={visuallyHidden ? text : ""}>{text}</H3>
    if (level === 4) return <H4 className={cls} aria-label={visuallyHidden ? text : ""}>{text}</H4>
    if (level === 5) return <H5 className={cls} aria-label={visuallyHidden ? text : ""}>{text}</H5>
    if (level === 6) return <H3Fake className={classes(cls, "h3")} aria-label={visuallyHidden ? text : ""}>{text}</H3Fake>
    if (level === 7) return <H4Fake className={classes(cls, "h4")} aria-label={visuallyHidden ? text : ""}>{text}</H4Fake>
    return null
}


Headline.propTypes = {
    /** 
	 * The text of the heading
	 **/
    text: PropTypes.string,
    /** 
	 * A select option, restricted to level 2 & 3 in Drupal, but with options for all other sizes for use in the frontend
	 **/
    level: PropTypes.number,
    /** 
	 * A boolean if set to true will hide the heading while keeping it accessibly able to be read by screenreaders
	 **/
    visuallyHidden: PropTypes.bool,
}
Headline.defaultProps = {
    level: 2
}