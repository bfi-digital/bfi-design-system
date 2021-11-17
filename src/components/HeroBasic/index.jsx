import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"

const Hero = styled.header`
    background-size: cover;
    padding: 40px;

    ${el=>el.image ? `
    background:
        linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 25%, rgba(0,0,0,0) 100%),
        url(${el.image});
    background-color: black;
    background-position: 50% 0%;
    background-size: cover;
    padding-top: 311px;
    max-height: 500px;
    color: white;
    text-shadow: 0 0 30px black;` : ""}
`

export const HeroBasic = ({
    image,
    children,
    ...props
}) => {
    return (<Hero image={image} {...props}>
        {children}
    </Hero>)
}

export const HeroHeadline = ({ children, ...args }) => <Headline level={0} text={children} color="inherit" {...args} />

export const Standfirst = styled.p`
    font-size: ${theme.fontSize_m};
    line-height: ${theme.lineHeight_m};
    margin-bottom: 30px;
    margin-top: 0;

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.large_fontSize_m};
        line-height: ${theme.large_lineHeight_m};
    }

    @media screen and (min-width: ${theme.xl}){
        font-size: ${theme.large_fontSize_xl};
    }
`

Hero.propTypes = {
    /** 
    * Url to the image for the hero, optional
    **/
    image: PropTypes.string
}
