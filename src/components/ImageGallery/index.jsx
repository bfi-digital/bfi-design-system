import React, { useState, useEffect } from "react"
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
        animation: fadeIn 0.1s ease-out; 
        z-index: 9999;
        &:hover {
            cursor: zoom-out;
        }
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
    color: ${props => props.white ? theme.white : theme.darkGrey};
    font-size: 0.9rem;
    max-width: 70%;
    margin: 0 auto;
    display: block;
    &:hover {
        cursor: default;
    }
`

const ImageHolder = styled.div`
    ${props => props.number > 1 ? `
        @media screen and (min-width: ${theme.m}){
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            flex-wrap: wrap;
        }
    ` : null}
`

const Button = styled.button`
    border: none;
    background: ${theme.highlight};
    cursor: pointer;
    padding: 0px;
    width: 100%;

    img {
        -webkit-transition: all ease 0.3s;
        -moz-transition: all ease 0.3s;
        -o-transition: all ease 0.3s;
        transition: all ease 0.3s;
    }
    &:hover {
        cursor: zoom-in;
        img {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
    }
    &:focus{
        outline: 3px solid ${theme.primary};
    }
    margin-bottom: 10px;
    @media screen and (min-width: ${theme.m}){
        margin-right: 10px;
        /* width: calc( 33.33% - 6.67px); */
        flex: 1 0 calc(33% - 10px);
        max-width: 50%;

        &:nth-child(3){
            margin-right: 0px;
        }
    }
`

const Image = styled.img`
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
`

const BigImage = styled.img`
    width: auto;
    max-width: 100%;
    max-height: 90vh;
    box-shadow: 0px 10px 40px ${theme.black}50;
    &:hover {
        cursor: default;
    }
`

const useKeyPress = function(targetKey) {
    const [keyPressed, setKeyPressed] = useState(false)
  
    function downHandler({ key }) {
        if (key === targetKey) {
            setKeyPressed(true)
        }
    }

    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener("keydown", downHandler)
        window.addEventListener("keyup", upHandler)

        return () => {
            window.removeEventListener("keydown", downHandler)
            window.removeEventListener("keyup", upHandler)
        }
    })
  
    return keyPressed
}

export const ImageGallery = ({
    images,
    galleryCaption
}) => {
    const [ openImage, setOpenImage ] = useState(0)
    const leftPress = useKeyPress("ArrowLeft")
    const rightPress = useKeyPress("ArrowRight")
    
    useEffect(() => {
        if (leftPress && openImage) {
            if(openImage == 1) {
                setOpenImage(images.length)
            } else {
                setOpenImage(openImage-1)
            }
        }
    }, [leftPress])
    useEffect(() => {
        if (rightPress && openImage) {
            if(openImage == images.length) {
                setOpenImage(1)
            } else {
                setOpenImage(openImage+1)
            }
        }
    }, [rightPress])

    return(
        <Outer>
            <ImageHolder number={images.length}>
                {images.map((image, i) =>                   
                    <Button key={i} onClick={() => setOpenImage(i+1)}>
                        <Image
                            src={image.url}
                            alt={image.alt}
                        />
                    </Button>
                )}
            </ImageHolder>
            {galleryCaption && <Caption>{galleryCaption}</Caption>}

            <>
                <DialogStyles/>
                <Dialog 
                    aria-label="lightbox"
                    isOpen={openImage} 
                    onDismiss={() => setOpenImage(0)}
                >
                    <VisuallyHidden>
                        <button onClick={() => setOpenImage(0)}>Close</button>
                    </VisuallyHidden>
                    <BigImage
                        src={images[openImage == 0 ? openImage : (openImage-1)].url}
                        alt={images[openImage == 0 ? openImage : (openImage-1)].alt}
                    />       
                    {images[openImage == 0 ? openImage : (openImage-1)].caption &&
                        <Caption white={true}>{images[openImage == 0 ? openImage : (openImage-1)].caption}</Caption>
                    }

                </Dialog>
            </>
        </Outer>
    )
}

ImageGallery.propTypes = {
    /** 
     *
	 * Provide an array of at least one object, containing keys for the image URLs and alt text
	 **/
    images: PropTypes.array,
    /**
	 * Optionally, provide a text caption for the full gallery
	 **/
    galleryCaption: PropTypes.string,
}
