import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"

const Hero = styled.header`
    padding: 40px;

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
    min-height: 500px;
    max-height: 80vh;` : ""}
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

const SizedHeadline = styled(Headline)`
  color: inherit;
  font-size: 2.6rem;
  margin-top: 340px;

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
`

export const HeroHeadline = ({ children, ...args }) => <SizedHeadline level={0} text={children} {...args} />

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
