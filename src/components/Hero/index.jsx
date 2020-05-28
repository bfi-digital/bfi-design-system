import React from "react"
import { Headline } from "../Headline"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const Outer = styled.section`
    margin: 0 auto;
    background: ${theme.black};
    width: 100%;
    max-width: calc(${theme.xl} + 125px);
    position: relative;
    height: auto;
    min-height: 40vh;
    padding-top: ${props => props.withHeader ? "64px" : "0px"};
    background-image: url("${props => props.image}");
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: flex-end;
    margin-top: ${props => props.withHeader ? "175px" : "0px"};

    h1{
        color: ${theme.white};
        max-width: calc( 0.65 * ${theme.m});
        text-shadow: 0px 0px 30px ${theme.black}50;
        margin-bottom: 50px;
    }

    @media screen and (min-width: ${theme.m}){
        margin-top: 0px;
        min-height: 390px;
        align-items: flex-end;
        padding-top: ${props => props.withHeader ? "175px" : "0px"};

        h1 {
            max-width: calc( 0.75 * ${theme.m});
        }
    }
    @media screen and (min-width: ${theme.xl}){
        min-height: 500px;
        h1{
            max-width: calc( 0.4 * ${theme.xl});
            margin-bottom: 75px;
        }
    }
`

const InnerGradient = styled.div`
    background: linear-gradient(rgba(18, 12, 13, 0.3), rgba(18, 12, 13, 0.7));
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
`

const Container = styled.div`
    max-width: ${theme.l};
    width: 100%;
    margin: 0 auto;
    padding: 0px ${theme.horizontalPadding};
    z-index: 1;
    position: relative;

    @media screen and (min-width: ${theme.xl + 200}){
        max-width: ${theme.xl};
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
        &:after {
            opacity: 0.7;
        }
    }
`

const Copyright = styled.p`
    color: ${theme.white};
    text-shadow: 0px 0px 30px ${theme.black}50;
    font-size: 0.75rem;
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
    headline,
    withHeader,
    copyright,
    children
}) =>
    <Outer 
        image={image1920x1080} 
        withHeader={withHeader}
    >
        <InnerGradient />
        <Container>
            {children}
            {headline && <Headline level={0} text={headline}/>}
            {copyright && <Copyright>{copyright}</Copyright>}
        </Container>
    </Outer>


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
