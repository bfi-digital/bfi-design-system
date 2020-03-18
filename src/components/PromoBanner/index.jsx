import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../_theme"

import { Headline } from "../Headline"
import { Button } from "../Button"

const colorSchemes = [
    {
        background: theme.charcoal,
        text: theme.white,
    },
]

const Outer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${props => colorSchemes[props.colorScheme].background};
    color: ${props => colorSchemes[props.colorScheme].text};
    h2{
        margin-top: 0px;
        color: ${props => colorSchemes[props.colorScheme].text};
    }
    a{
        margin-top: 10px;
    }
    @media screen and (min-width: ${theme.m}){
        flex-direction: row;
        a{
            margin-top: auto;
        }
        h2{
            font-size: 2.25rem;
            line-height: 120%;
            margin-bottom: 25px;
        }
    }
`

const Inner = styled.div`
    padding: 25px;
    @media screen and (min-width: ${theme.m}){
        padding: 35px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    @media screen and (min-width: ${theme.l}){
        padding: 45px;
    }
`

const Description = styled.p`
    margin-top: 0px;
    @media screen and (min-width: ${theme.m}){
        font-size: 1.25rem;
        margin-bottom: 25px;
    }
`

const Image = styled.img`
    order: -1;
    width: 100%;
    height: auto;
    @media screen and (min-width: ${theme.m}){
        order: ${props => props.reversed ? "-1" : "1"};
        width: 50%;
        align-self: flex-end;
    }
`

const SecondImage = styled.img`
    margin-bottom: 15px;
    max-width: 100%;
    height: auto;
`

export const PromoBanner = ({
    headline,
    description,
    callToActionUrl,
    callToActionTitle,
    image,
    imageAltText,
    reversed,
    colorScheme,
    backgroundColor,
    secondImage,
    secondImageAlt,
    external
}) =>
    <Outer 
        reversed={reversed} 
        colorScheme={colorScheme} 
        backgroundColor={backgroundColor}
    >
        <Inner>
            {secondImage && 
                <SecondImage 
                    src={secondImage} 
                    alt={secondImageAlt}
                />
            }
            <Headline level={2} text={headline}/>
            <Description>{description}</Description>
            {callToActionUrl && 
                <Button to={callToActionUrl} colorScheme={1} external={external}>
                    {callToActionTitle}
                </Button>
            }
        </Inner>
        <Image 
            reversed={reversed}
            src={image} 
            alt={imageAltText}
        />
    </Outer>

PromoBanner.propTypes = {
    // Headline of the banner
    headline: PropTypes.string,
    // Short text description for the banner
    description: PropTypes.string,
    // Object containing a url, title and external key for the call to action button. Optional
    callToAction: PropTypes.object,
    // Source URL for the image, any size
    image: PropTypes.string,
    // Alt text for the image
    imageAltText: PropTypes.string,
    // By default, image is on the right. Say true to flip it. Optional
    reversed: PropTypes.bool,
    // A number which selects the colour scheme of the page links slice, dependant on the pillar the page/post is within
    colorScheme: PropTypes.number,
    // Pass in a colour to override the colour scheme's background color. Optional
    backgroundColor: PropTypes.string,    
    // Source URL for optional second image, any size
    secondImage: PropTypes.string,
    // Alt text for opitonal second image
    secondImageAltText: PropTypes.string,
    // Boolean for whether link is external. Default is false
    external: PropTypes.external
}