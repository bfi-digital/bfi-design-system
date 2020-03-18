import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Dialog } from "@reach/dialog"
import VisuallyHidden from "@reach/visually-hidden"

const Figure = styled.figure`
    float: ${props => props.side ? props.side : null};
    max-width: ${props => props.side ? "40%" : "100%"};
    width: ${props => props.side ? "auto" : "100%"};
    margin: ${props => {
        if(props.side === "left") return "20px 40px 40px 0px"
        if(props.side === "right") return "20px 0px 40px 40px"
        return "20px 0px"
    }
};
`

const StyledImage = styled.img`
    width: 100%;
    height: auto;
`

const Figcaption = styled.figcaption`
    text-align: center;
    color: ${props => props.white ? theme.white : theme.darkGrey};
    font-size: 0.9rem;
    margin: 0 auto;
`

const Button = styled.button`
    border: none;
    display: flex;
    margin-bottom: 10px;
    background: none;
    cursor: pointer;
    padding: 0px;
    width: 100%;
    
    &:focus{
        outline: 3px solid ${theme.primary};
    }
    @media screen and (min-width: ${theme.m}){
        margin-right: 10px;
        /* width: calc( 33.33% - 6.67px); */
        &:last-of-type{
            margin-right: 0px;
        }
    }
`

const DialogStyles = createGlobalStyle`
   :root {
        --reach-dialog: 1;
    }

    @keyframes fadeIn{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    @keyframes fadeGrow{
        from{
            opacity: 0;
            transform: scale(0.9)
        }
        to{
            opacity: 1;
            transform: scale(1)
        }
    }

    [data-reach-dialog-overlay] {
        background: ${theme.black}80;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.2s ease-out; 
    }
    [data-reach-dialog-content] {
        margin: 5vw;
        outline: none;
        z-index: 1;
        display: inline-block;
        animation: fadeGrow 0.1s ease-out; 
    }
`
const BigImage = styled.img`
    width: auto;
    max-width: 100%;
    max-height: 90vh;
    box-shadow: 0px 10px 40px ${theme.black} 50;
`

export const Image = ({
    src,
    alt,
    side,
    caption,
    isClickable
}) => {

    const [ openImage, setOpenImage ] = useState(false)
    
    return(
        <>
            <Figure side={side}>
                { isClickable ?
                    <Button onClick={() => setOpenImage(true)}>
                        <StyledImage
                            isClickable={true}
                            src={src}
                            alt={alt}
                        />
                    </Button>
                    :
                    <StyledImage
                        isClickable={false}
                        src={src}
                        alt={alt}
                    />
                }
                {caption && <Figcaption>{caption}</Figcaption>}
            </Figure>

            {isClickable &&
                <>
                    <DialogStyles/>
                    <Dialog 
                        aria-label="lightbox"
                        isOpen={openImage} 
                        onDismiss={() => setOpenImage(false)}
                    >
                        <VisuallyHidden>
                            <button onClick={() => setOpenImage(false)}>Close</button>
                        </VisuallyHidden>
                        <BigImage
                            src={src}
                            alt={alt}
                        />       
                        {caption && <Figcaption white={true}>{caption}</Figcaption>}
                    </Dialog>
                </>
            }
        </>
    )
}

Image.propTypes = {
    // The source URL of the image
    src: PropTypes.string,
    // Alt-text string for the image.
    alt: PropTypes.string,
    // Which side should the image be on. String. False by default. Say "left" or "right"
    side: PropTypes.string,
    // A visible caption for the image. Optional
    caption: PropTypes.string,
    // Say whether the images should be clickable, leading to a light box. True by default
    isClickable: PropTypes.bool
}

Image.defaultProps = {
    isClickable: false
}