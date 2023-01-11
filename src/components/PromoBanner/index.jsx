import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../_theme"

import { Headline } from "../Headline"
import { Button } from "../Button"

const colorSchemes = [
    {
        background: theme.black,
        text: theme.white,
        buttonColor: 1
    },
    {
        background: theme.lightest,
        text: theme.black,
        buttonColor: 0
    },
    {
        background: theme.lightGrey,
        text: theme.black,
        buttonColor: 0
    },
    {
        background: theme.dark,
        text: theme.white,
        buttonColor: 1
    },
    // player rentals
    {
        background: theme.black,
        text: theme.white,
        buttonColor: 2
    },
    // player subscription
    {
        background: theme.black,
        text: theme.white,
        buttonColor: 3
    },
]

const Outer = styled.section`
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: ${props => colorSchemes[props.colorScheme].background};
    color: ${props => colorSchemes[props.colorScheme].text};
    position: relative;

    margin-bottom: ${theme.standardSpace*1.5}px;
    margin-top: ${theme.standardSpace*1.5}px;

    h2 {
        margin-top: 0px !important;
        color: ${props => colorSchemes[props.colorScheme].text};
        text-align: left !important;
        margin-bottom: 0;
    }
    a{
        margin-top: 10px;
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -9998px;
        right: 0;
        box-shadow: 9999px 0 0 ${props => colorSchemes[props.colorScheme].background};
        border-left: 9999px solid ${props => colorSchemes[props.colorScheme].background};
        z-index: -1;
        display: default;
    }

    @media screen and (min-width: ${theme.m}){
        flex-direction: row;
        margin-bottom: ${theme.standardSpace*2}px;
        margin-top: ${theme.standardSpace*2}px;

        a {
            margin-top: auto;
        }
    }
    @media screen and (min-width: ${theme.l}){
        margin-bottom: ${theme.standardSpace*2.5}px;
        margin-top: ${theme.standardSpace*2.5}px;
        &:before {
            display: none;
        }
    }

    h2::selection {
        background: ${props => props.colorScheme <= 1 ? theme.primary : theme.light} !important;
        color: ${props => props.colorScheme <= 1 ? theme.white : theme.black} !important;
    }
    p::selection {
        background: ${props => props.colorScheme <= 1 ? theme.primary : theme.light} !important;
        color: ${props => props.colorScheme <= 1 ? theme.white : theme.black} !important;
    }
    h2::-moz-selection {
        background: ${props => props.colorScheme <= 1 ? theme.primary : theme.light} !important;
        color: ${props => props.colorScheme <= 1 ? theme.white : theme.black} !important;
    }
    p::-moz-selection {
        background: ${props => props.colorScheme <= 1 ? theme.primary : theme.light} !important;
        color: ${props => props.colorScheme <= 1 ? theme.white : theme.black} !important;
    }
`

const Inner = styled.div`
    padding: 20px 0;
    @media screen and (min-width: ${theme.m}){
        padding: ${theme.standardSpace}px;
        width: ${props => props.pageWithSidebar ? "100%" : "50%"};
        display: flex;
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        align-items: flex-start;
        padding-left: ${props => props.reversed ? (theme.standardSpace + "px") : props.pageWithSidebar ? (theme.standardSpace + "px") : "0"};
        
        *{
            max-width: 100%;
        }

        &.without_image {
            width: 66%;
        }
    }
    @media screen and (min-width: ${theme.l}){
        padding: 30px;
    }

    &.with_image {
        @media screen and (min-width: ${theme.m}){
            min-height: 280px;
        }
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
        padding: ${theme.standardSpace}px;
        width: 33%;
        display: flex;
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
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

const SecondImage = styled.img`
    margin-bottom: ${props => props.marginBottom ? "15px" : "0"};
    max-width: 100%;
    height: auto;
`

const Description = styled.p`
    margin-top: 0px;
    white-space: pre-line;

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.fontSize_xl};
        margin-bottom: ${theme.standardSpace}px;

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
    width: calc(100% + 40px);
    margin-left: -20px;

    @media screen and (min-width: ${theme.m}){
        order: ${props => props.reversed ? "-1" : "1"};
        width: 50%;
        height: auto;
        margin-right: ${props => props.reversed ? "0px" : "-20px"};
        margin-left: ${props => props.reversed ? "-20px" : "20px"};
    }
    @media screen and (min-width: ${theme.l}){
        margin-right: 0px;
        margin-left: 0px;
    }
`

function slugify(string) {
    const a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;"
    const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------"
    const p = new RegExp(a.split("").join("|"), "g")
  
    return string.toString().toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, "-and-") // Replace & with "and"
        .replace(/[^\w-]+/g, "") // Remove all non-word characters
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, "") // Trim - from end of text
}

export const PromoBanner = ({
    headline,
    description,
    callToActionUrl, 
    callToActionTitle,
    image,
    reversed = false,
    colorScheme,
    external,
    secondImage,
    secondImageAltText
}) => {

    return (
        <Outer 
            className={external ? "external_link promoBanner" : "promoBanner"}
            reversed={reversed} 
            colorScheme={colorScheme}
            id={slugify(headline)}
        >
            <Inner className={image ? "with_image" : "without_image"} reversed={reversed}>
                {secondImage && 
                    <SecondImage 
                        marginBottom
                        src={secondImage} 
                        alt={secondImageAltText ? secondImageAltText : ""}
                    />
                }
                <Headline level={2} text={headline}/>
                {description && <Description className={image ? "with_image" : "without_image"}>{description}</Description>} 
                {callToActionUrl && image && 
                <Button to={callToActionUrl} colorScheme={colorSchemes[colorScheme].buttonColor} title={headline}>
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
                    <Button to={callToActionUrl} colorScheme={colorSchemes[colorScheme].buttonColor}>
                        {callToActionTitle}
                    </Button>
                    }
                </RightButton>
            }
        </Outer>
    )
}
    

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
    * Boolean for whether link is external. Default is false
    **/
    external: PropTypes.bool,
    /** 
    * Source URL for optional second image, any size
    **/
    secondImage: PropTypes.string,
    /** 
    * Alt text for opitonal second image
    **/
    secondImageAltText: PropTypes.string,
}
