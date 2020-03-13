import React from "react"
import { Headline } from "../Headline"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const colorSchemes = [
    {
        background: "transparent"
    },
    {
        background: theme.primary
    }
]

const Outer = styled.section`
    background: ${theme.charcoal};
    width: 100%;
    position: relative;
    min-height: 80vh;
    padding-top: ${props => props.withHeader ? "64px" : "0px"};
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    @media screen and (min-width: ${theme.m}){
        align-items: "flex-end";
        padding-top: ${props => props.withHeader ? "175px" : "0px"};
    }
    h1{
        color: ${theme.white};
        max-width: calc( 0.5 * ${theme.m});
        text-shadow: 0px 0px 30px ${theme.charcoal}50;
        margin-bottom: 50px;
    }
    @media screen and (min-width: ${theme.xl}){
        h1{
            max-width: calc( 0.5 * ${theme.xl});
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

    ol + h1{
        margin-top: 20px;
    }
    li, a{
        color: ${theme.white};
        text-shadow: 0px 0px 30px ${theme.charcoal}50;
        &:focus{
            background: ${theme.dark};
        }
    }
`

const Copyright = styled.p`
        color: ${theme.white};
        text-shadow: 0px 0px 30px ${theme.charcoal}50;
        font-size: 0.75rem;
        position: absolute;
        bottom: 5px;


        @media screen and (min-width: ${theme.m}){
            right: ${theme.horizontalPadding};
            bottom: 5px;
        }

`

export const Hero = ({
    image1920x1080,
    headline,
    colorScheme,
    withHeader,
    copyright,
    children
}) =>
    <Outer 
        image={image1920x1080} 
        withHeader={withHeader}
    >
        <InnerGradient colorScheme={colorScheme} />
        <Container>
            {children}
            {headline && <Headline level={0} text={headline}/>}
            {copyright && <Copyright>{copyright}</Copyright>}
        </Container>
    </Outer>


Hero.propTypes = {
    // Urls to the image for the hero. 
    image1920x1080: PropTypes.string,
    // The text for the title which will be used as the H1 for this page/post. Optional. You might choose not to give this and pass children in instead
    headline: PropTypes.string,
    // A number to define which colour overlay the Hero should have, it defaults to none.
    colorScheme: PropTypes.number,
    // A boolean to tell the hero whether it has a header over the top of it, so that content in the hero never overlaps the header. Defaults to false.
    withHeader: PropTypes.bool,
    // A string giving the copyright attribution of the background image
    copyright: PropTypes.string
    
}

Hero.defaultProps = {
    colorScheme: 0
}