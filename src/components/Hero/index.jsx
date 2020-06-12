import React from "react"
import { Headline } from "../Headline"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import LazyImage from "react-lazy-progressive-image";
import { LeadParagraph } from "../LeadParagraph"

const Outer = styled.section`
    margin: 0 auto;
    background: ${theme.black};
    width: 100%;
    max-width: calc(${theme.xl} + 125px);
    position: relative;
    height: auto;
    min-height: 40vh;
    padding-top: ${props => props.withHeader ? "64px" : "0px"};
    padding-bottom: 25px;
    background-image: url("${props => props.image}");
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: flex-end;
    margin-top: ${props => props.withHeader ? "175px" : "0px"};

    h1 {
        color: ${theme.white};
        max-width: calc( 0.65 * ${theme.m});
        text-shadow: 0px 0px 30px ${theme.black}50;
        margin-bottom: ${theme.standardSpace}px;
    }
    p {
        color: ${theme.white};
        margin-top: 0;
    }

    a {
        color: ${theme.black} !important;
        svg {
            fill: ${theme.black} !important;
        }
        &:hover, &:focus {
            color: ${theme.white} !important;
            svg {
                fill: ${theme.white} !important;
            }
        }
    }

    @media screen and (min-width: ${theme.m}){
        margin-top: 0px;
        min-height: 390px;
        align-items: flex-end;
        padding-top: ${props => props.withHeader ? "275px" : "0px"};

        h1 {
            max-width: calc( 0.8 * ${theme.m});
        }
    }
    @media screen and (min-width: ${theme.l}){
        padding-top: ${props => props.withHeader ? "325px" : "0px"};
    }
    @media screen and (min-width: ${theme.xl}){
        min-height: 500px;
        padding-bottom: 40px;
        padding-top: ${props => props.withHeader ? "375px" : "0px"};

        h1{
            max-width: calc( 0.4 * ${theme.xl});
        }
    }
`

const InnerGradient = styled.div`
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.2) 100%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`

const Container = styled.div`
    max-width: ${theme.l};
    width: 100%;
    margin: 0 auto;
    padding: 0px ${theme.horizontalPadding};
    z-index: 1;
    position: relative;

    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
    }

    ol + h1 {
        margin-top: 20px;
    }
    li, a {
        color: ${theme.white};
        text-shadow: 0px 0px 30px ${theme.black}50;
        &:focus{
            background: ${theme.dark};
        }
    }
`

const Copyright = styled.p`
    color: ${theme.white};
    text-shadow: 0px 0px 30px ${theme.black}50;
    font-size: ${theme.small_fontSize_m};
    position: absolute;
    bottom: 5px;
    display: none;

    @media screen and (min-width: ${theme.m}){
        right: ${theme.horizontalPadding};
        bottom: 5px;
    }

`

export const Hero = ({
    image1920x1080,
    image192x108,
    headline,
    standfirst,
    withHeader,
    copyright,
    children
}) =>
    <LazyImage
        src={image1920x1080}
        placeholder={image192x108 ? image192x108 : image1920x1080}
    >
        {src => 
            <Outer 
                image={src} 
                withHeader={withHeader}
            >
                <InnerGradient />
                <Container>
                    {headline && <Headline level={0} text={headline}/>}
                    {standfirst && <LeadParagraph text={standfirst}/>}
                    {children}
                    {copyright && <Copyright>{copyright}</Copyright>}
                </Container>
            </Outer>
        }
    </LazyImage>


Hero.propTypes = {
    /** 
    * Urls to the image for the hero. 
    **/
    image1920x1080: PropTypes.string,
    /** 
    * The text for the title which will be used as the H1 for this page/post. Optional. You might choose not to give this and pass children in instead
    **/
    headline: PropTypes.string,
    /** 
    * A boolean to tell the hero whether it has a header over the top of it, so that content in the hero never overlaps the header. Defaults to false.
    **/
    withHeader: PropTypes.bool,
    /** 
    * A string giving the copyright attribution of the background image
    **/
    copyright: PropTypes.string
    
}
