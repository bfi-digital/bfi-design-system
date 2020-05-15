import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../_theme"

import { Headline } from "../Headline"
import { Button } from "../Button"

const colorSchemes = [
    {
        background: theme.black,
        text: theme.white
    },
    {
        background: theme.lightest,
        text: theme.black
    },
    {
        background: theme.lightGrey,
        text: theme.black
    },
    {
        background: theme.dark,
        text: theme.white
    },
]

const Outer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${props => colorSchemes[props.colorScheme].background};
    color: ${props => colorSchemes[props.colorScheme].text};
    position: relative;

    margin-top: 15px;
    & + .promoBanner {
        margin-top: 0px;
    }
    &:last-of-type {
        margin-bottom: 25px;
    }

    h2{
        margin-top: 0px;
        color: ${props => colorSchemes[props.colorScheme].text};
    }
    a{
        margin-top: 10px;
    }


    @media screen and (min-width: ${theme.m}){
        flex-direction: row;
        a {
            margin-top: auto;
        }
        h2 {
            margin-bottom: 20px;
        }
        &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: -9999px;
            right: 0;
            box-shadow: 9999px 0 0 ${props => colorSchemes[props.colorScheme].background};
            border-left: 9999px solid ${props => colorSchemes[props.colorScheme].background};
            z-index: -1;
        }
    }
    @media screen and (min-width: ${theme.l}){
        &:before {
            display: none;
        }
    }
`

const Inner = styled.div`
    padding: 15px;
    @media screen and (min-width: ${theme.m}){
        padding: 25px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: ${props => props.reversed ? "25px" : "0"};
        
        &.without_image {
            width: 66%;
        }
    }
    @media screen and (min-width: ${theme.l}){
        padding: 30px;
    }
`

const RightButton = styled.div`
    text-align: right;
    padding: 15px;

    a {
        width: 100%;
        margin: auto 0;
    }


    @media screen and (min-width: ${theme.m}){
        padding: 25px;
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        a {
            width: fit-content;
        }
    }
    @media screen and (min-width: ${theme.l}){
        padding: 30px;
    }
`

const Description = styled.p`
    margin-top: 0px;
    @media screen and (min-width: ${theme.m}){
        font-size: 1.25rem;
        margin-bottom: 25px;

        &.without_image {
            margin-bottom: 0;
        }
    }
`

const Image = styled.div`
    order: -1;
    height: 250px;
    background-image: url("${props => props.image}");
    background-size: cover;
    background-position: center center;
    width: 100%;

    @media screen and (min-width: ${theme.m}){
        order: ${props => props.reversed ? "-1" : "1"};
        width: 50%;
        height: auto;
        margin-right: ${props => props.reversed ? "0" : "-20px"};
        margin-left: ${props => props.reversed ? "-20px" : "20px"};
    }
    @media screen and (min-width: ${theme.l}){
        margin-right: 0px;
        margin-left: 0px;
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
    reversed,
    colorScheme,
    backgroundColor,
    secondImage,
    secondImageAlt,
    external
}) =>
    <Outer 
        className="promoBanner"
        reversed={reversed} 
        colorScheme={colorScheme} 
        backgroundColor={backgroundColor}
    >
        <Inner className={image ? "with_image" : "without_image"} reversed={reversed}>
            {secondImage && 
                <SecondImage 
                    src={secondImage} 
                    alt={secondImageAlt}
                />
            }
            <Headline level={2} text={headline}/>
            <Description className={image ? "with_image" : "without_image"}>{description}</Description>
            {callToActionUrl && image && 
                <Button to={callToActionUrl} colorScheme={colorScheme === 1 || colorScheme === 2 ? 0 : 1} external={external}>
                    {callToActionTitle}
                </Button>
            }
        </Inner> 
        {image ? 
            <Image
                reversed={reversed}
                image={image} 
            />   
            : 
            <RightButton>
                {callToActionUrl && 
                <Button to={callToActionUrl} colorScheme={colorScheme === 1 || colorScheme === 2 ? 0 : 1} external={external}>
                    {callToActionTitle}
                </Button>
                }
            </RightButton>
        }
    </Outer>

PromoBanner.propTypes = {
    /** 
    * Headline of the banner
    **/
    headline: PropTypes.string,
    /** 
    * Short text description for the banner
    **/
    description: PropTypes.string,
    /** 
    * Object containing a url, title and external key for the call to action button. Optional
    **/
    callToAction: PropTypes.object,
    /** 
    * Source URL for the image, any size
    **/
    image: PropTypes.string,
    /** 
    * By default, image is on the right. Say true to flip it. Optional
    **/
    reversed: PropTypes.bool,
    /** 
    * A number which selects the colour scheme of the page links slice, dependant on the pillar the page/post is within
    **/
    colorScheme: PropTypes.number,
    /** 
    * Pass in a colour to override the colour scheme's background color. Optional
    **/
    backgroundColor: PropTypes.string,    
    /** 
    * Source URL for optional second image, any size
    **/
    secondImage: PropTypes.string,
    /** 
    * Alt text for opitonal second image
    **/
    secondImageAltText: PropTypes.string,
    /** 
    * Boolean for whether link is external. Default is false
    **/
    external: PropTypes.external
}