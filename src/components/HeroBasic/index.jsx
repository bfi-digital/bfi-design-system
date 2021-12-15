import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"

const Hero = styled.header`
    padding: 0 40px 25px;

    ${el=>el.image ? `
    background:
        linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 25%, rgba(0,0,0,0) 100%),
        url(${el.image});
    background-color: black;
    background-position: 50% 0%;
    background-size: cover;
    color: white;
    text-shadow: 0 0 30px black;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-bottom: 25px;

    /* Add optional padding before header that will shrink if it needs */
    &::before {
        content: '';
        flex-basis: calc(56.25vw - 25px);
        flex-shrink: 1;
    }

    @media screen and (min-width: ${theme.m}) {
        min-height: 390px;
        max-height: 80vh;

        &::before {
            flex-basis: 211px;
        }
    }

    @media screen and (min-width: ${theme.l}) {
        &::before {
            flex-basis: 261px;
        }
    }

    @media screen and (min-width: ${theme.l}) {
        min-height: 500px;

        &::before {
            flex-basis: 311px;
        }
    }

    & > h1 {
        color: inherit;
        font-size: 2.6rem;

        @media screen and (min-width: ${theme.m}) {
            font-size: 3.1rem;
            max-width: calc(${theme.m} / 1.25);
        }

        @media screen and (min-width: ${theme.l}) {
            font-size: 3.4rem;
        }

        @media screen and (min-width: ${theme.xl}) {
            font-size: 3.8rem;
            max-width: calc(${theme.xl} / 2);
        }
    }
    ` : ""}
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

export const HeroHeadline = ({ children, ...args }) => <Headline level={0} text={children} {...args} />

export const Standfirst = styled.p`
    font-size: ${theme.fontSize_m};
    line-height: ${theme.lineHeight_m};
    margin-bottom: 30px;
    margin-top: 0;

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.large_fontSize_m};
        line-height: ${theme.large_lineHeight_m};
        max-width: calc(${theme.m} / 1.25);
    }

    @media screen and (min-width: ${theme.xl}){
        font-size: ${theme.large_fontSize_xl};
        max-width: calc(${theme.xl} / 2);
    }
`

Hero.propTypes = {
    /** 
    * Url to the image for the hero, optional
    **/
    image: PropTypes.string
}
