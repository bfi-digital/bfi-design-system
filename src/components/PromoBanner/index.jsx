import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../_theme"

import { Headline } from "../Headline"
import { Button } from "../Button"

const colorSchemes = [
    {
        background: theme.lightPink,
        shadow: theme.darkPink,
        text: theme.darkPink,
        focus: theme.dustyPink
    },
    {
        background: theme.lightGreen,
        shadow: theme.racerGreen,
        text: theme.racerGreen,
        focus: theme.dustyPink
    },
    {
        background: theme.lightBlue,
        shadow: theme.deepNavy,
        text: theme.deepNavy,
        focus: theme.dustyPink
    }
]

const Outer = styled.section``

const Description = styled.p``

const Image = styled.img``

export const PromoBanner = ({
    headline,
    description,
    callToAction,
    image480x320,
    imageAltText,
    reversed,
    colorScheme,
    backgroundColor
}) =>
    <Outer 
        reversed={reversed} 
        colorScheme={colorScheme} 
        backgroundColor={backgroundColor}
    >
        <Headline level={1} text={headline}/>
        <Description>{description}</Description>
        {callToAction && 
            <Button {...callToAction}>
                {callToAction.title}
            </Button>
        }
        <Image 
            src={image480x320} 
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
    // Source URL for the image
    image480x320: PropTypes.string,
    // Alt text for the image
    imageAltText: PropTypes.string,
    // By default, image is on the right. Say true to flip it. Optional
    reversed: PropTypes.bool,
    // A number which selects the colour scheme of the page links slice, dependant on the pillar the page/post is within
    colorScheme: PropTypes.number,
    // Pass in a colour to override the colour scheme's background color. Optional
    backgroundColor: PropTypes.string
}