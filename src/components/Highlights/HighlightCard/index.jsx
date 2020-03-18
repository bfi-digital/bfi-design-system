import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../../_theme"
import { LinkSwitch } from "../../LinkSwitch"

const Outer = styled.div`
    // border-radius: 5px;
    background-color: ${theme.lightest};
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    @media screen and (min-width: ${theme.m}){
        width: 33%;
        min-width: 33%;
        max-width: 33%;
        margin-right: 25px;
        margin-bottom: 0px;
    }
`

const Img = styled.img`
    // border-radius: 5px 5px 0px 0px;
    width: 100%;
    height: auto;
`

const Inner = styled.div`
    padding: 15px;
    flex: 1;
`

const Caption = styled.p`
    margin: 0px;
    font-weight: 600;
`

const Headline = styled.h4`
    margin: 5px 0px;
    font-size: 1.375rem;
`

const Description = styled.p`
    margin: 0px;
    margin-bottom: 15px;
`

const CallToAction = styled(LinkSwitch)`
    background: ${theme.charcoal};
    display: block;
    font-weight: bold;
    color: ${theme.white};
    text-align: center;
    padding: 12px 20px;
    // border-radius: 0px 0px 5px 5px;
    text-decoration: none;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 5px ${theme.highlight};
    }

`

export const HighlightCard = ({
    image480x320,
    imageAltText,
    caption,
    title,
    description,
    callToActionUrl,
    callToActionTitle,
    external
}) =>
    <Outer>
        <Img alt={imageAltText} src={image480x320}/>
        <Inner>
            <Caption>{caption}</Caption>
            <Headline>{title}</Headline>
            <Description>{description}</Description>
        </Inner>
        <CallToAction external={external} to={callToActionUrl}>{callToActionTitle}</CallToAction>
    </Outer>

HighlightCard.propTypes = {
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