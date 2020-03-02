import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../../_theme"
// import { LinkSwitch } from "../../LinkSwitch"
import { Button } from "../../Button"

const Outer = styled.div`
    border-radius: 5px;
    overflow: hidden;
    background-color: ${theme.lightPink};
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    @media screen and (min-width: ${theme.m}){
        flex-direction: row;
    }
`

const Img = styled.img`
    width: 100%;
    height: auto;
    @media screen and (min-width: ${theme.m}){
        width: 50%;
        order: 2;
    }
`

const Inner = styled.div`
    padding: 15px;
    flex: 1;
    @media screen and (min-width: ${theme.m}){
        padding: 25px;
    }
`

const Headline = styled.h4`
    margin: 0px;
    font-size: 1.375rem;
    margin-bottom: 15px;
    @media screen and (min-width: ${theme.m}){
        font-size: 1.685rem;
    }
`

const Caption = styled.p`
    margin: 0px;
    font-weight: 600;
    margin-bottom: 15px;
    @media screen and (min-width: ${theme.m}){
        font-size: 1.375rem;
        margin-bottom: 20px;
    }
`

const Description = styled.p`
    margin: 0px;
    margin-bottom: 15px;
    @media screen and (min-width: ${theme.m}){
        margin-bottom: 25px;
    }
`

export const WideHighlightCard = ({
    image600x600,
    imageAltText,
    caption,
    title,
    description,
    callToActionUrl,
    callToActionTitle
}) =>
    <Outer>
        <Img alt={imageAltText} src={image600x600}/>
        <Inner>
            <Headline>{title}</Headline>
            <Caption>{caption}</Caption>
            <Description>{description}</Description>
            <Button external={external} to={callToActionUrl}>{callToActionTitle}</Button>
        </Inner>
    </Outer>

WideHighlightCard.propTypes = {
    // Image source
    image480x320: PropTypes.string,
    // Alternative text for the image
    imageAltText: PropTypes.string,
    // Small text appearing above the title
    caption: PropTypes.string,
    // Biggest text in the box
    title: PropTypes.string,
    // Short paragraph about the thing
    description: PropTypes.string,
    // URL for the button to link to 
    callToActionUrl: PropTypes.string,
    // Boolean for whether link is external. Default is false
    external: PropTypes.external
}