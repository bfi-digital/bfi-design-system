import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

const Figure = styled.figure`
    float: ${props => props.side};
    max-width: 40%;
    margin: ${props => 
        props.side === "left" ? 
            "20px 40px 40px 0px" : 
            "20px 0px 40px 40px"
};
`

const Img = styled.img`
    width: 100%;
    height: auto;
`

const Figcaption = styled.figcaption`
    text-align: center;
    color: ${theme.charcoal};
    font-size: 0.9rem;
    margin: 0 auto;
`

export const ImageSide = ({
    src,
    alt,
    side,
    caption
}) =>
    <Figure side={side}>
        <Img
            src={src}
            alt={alt}
        />
        {caption && <Figcaption>{caption}</Figcaption>}
    </Figure>

ImageSide.propTypes = {
    // The source URL of the image
    src: PropTypes.string,
    // Alt-text string for the image.
    alt: PropTypes.string,
    // Which side should the image be on. String. Left by default. To override say "right"
    side: PropTypes.string,
    // A visible caption for the image. Optional
    caption: PropTypes.string
}