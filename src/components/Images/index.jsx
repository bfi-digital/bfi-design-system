import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import theme from "../_theme"
import { Dialog } from "@reach/dialog"
import VisuallyHidden from "@reach/visually-hidden"
import PropTypes from "prop-types"

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
        background: ${theme.charcoal}80;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.1s ease-out; 
    }
    [data-reach-dialog-content] {
        margin: 5vw;
        outline: none;
        z-index: 1;
        display: inline-block;
        animation: fadeGrow 0.1s ease-out; 
    }
`

const Outer = styled.figure`
    display: block;
    padding: 0px;
    width: 100%;
    margin: 20px 0px;
`

const Caption = styled.figcaption`
    text-align: center;
    color: ${theme.charcoal};
    font-size: 0.9rem;
    max-width: 70%;
    margin: 0 auto;
`

const ImageHolder = styled.div`
    ${props => props.number > 1 ? `
        @media screen and (min-width: ${theme.m}){
            display: flex;
            flex-direction: row;
            align-items: flex-start;
        }
    ` : null}
`

const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    padding: 0px;
    width: 100%;
    &:focus{
        outline: 2px solid ${theme.dustyPink};
    }
    margin-bottom: 10px;
    @media screen and (min-width: ${theme.m}){
        margin-right: 10px;
        /* width: calc( 33.33% - 6.67px); */
        &:last-of-type{
            margin-right: 0px;
        }
    }
`

const Image = styled.img`
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
    ${props => !props.isClickable ? `
        margin-bottom: 10px;
        @media screen and (min-width: ${theme.m}){
            margin-right: 10px;
            &:last-of-type{
                margin-right: 0px;
            }
        }
    ` : null}
`

const BigImage = styled.img`
    width: auto;
    max-width: 100%;
    max-height: 90vh;
    box-shadow: 0px 10px 40px ${theme.charcoal}50;
`

export const Images = ({
    images,
    caption,
    lightbox
}) => {

    const [ openImage, setOpenImage ] = useState(false)

    return(
        <Outer>
            <ImageHolder number={images.length}>
                {images.map((image, i) => lightbox ?                    
                    <Button key={i} onClick={() => setOpenImage(image)}>
                        <Image
                            isClickable
                            src={image.url}
                            alt={image.alt}
                        />
                    </Button>
                    :
                    <Image
                        key={i}
                        src={image.url}
                        alt={image.alt}
                    />
                )}
            </ImageHolder>
            {caption && <Caption>{caption}</Caption>}

            {lightbox &&
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
                            src={openImage.url}
                            alt={openImage.alt}
                        />       
                    </Dialog>
                </>
            }
        </Outer>
    )
}

Images.propTypes = {
    /** 
     *
	 * Provide an array of at least one object, containing keys for the image URLs and alt text
	 **/
    images: PropTypes.array,
    /**
	 * Optionally, provide a text caption for the image/gallery
	 **/
    caption: PropTypes.string,
    /**
	 * Say whether the images should be clickable, leading to a lightbox. True by default
	 **/
    ligthbox: PropTypes.bool,
}

Images.defaultProps = {
    lightbox: true
}