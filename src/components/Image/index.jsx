import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Dialog } from "@reach/dialog"
import VisuallyHidden from "@reach/visually-hidden"
import LazyImage from "react-lazy-progressive-image"

const Figure = styled.figure`
    width: ${props => props.isSmall ? "40%" : "100%"};
    float: ${props => props.isSmall && props.side ? props.side : null};
    height: auto;
    margin-left: 0;
    margin-right: 0;

    margin: ${props => {
        if(props.isSmall && props.side === "left") return "10px 20px 20px 0px"
        if(props.isSmall && props.side === "right") return "10px 0px 20px 20px"
        return "0px"
    }};
    
    @media screen and (min-width: ${theme.m}){
        float: ${props => props.side ? props.side : null};
        max-width: ${props => props.side ? "40%" : "100%"};
        width: ${props => props.side ? (props.isSmall ? "20%" : "40%") : "100%"};
        margin: ${props => {
        if(props.side === "left") return "20px 40px 40px 0px"
        if(props.side === "right") return "20px 0px 40px 40px"
        return "20px 0px"
    }};
    }
    @media screen and (min-width: ${theme.l}){
        width: ${props => props.side ? (props.isSmall ? "20%" : "40%") : "100%"};
    }
    @media screen and (min-width: ${theme.xl}){
        width: ${props => props.side ? (props.isSmall ? "20%" : "40%") : "100%"};
    }
`

const Figcaption = styled.figcaption`
    text-align: center;
    color: ${props => props.white ? theme.white : theme.darkGrey};
    font-size: ${theme.small_fontSize_m};
    margin: 0 auto;
    display: block;
    &:hover {
        cursor: default;
    }
`

const Button = styled.button`
    border: none;
    display: flex;
    margin-bottom: 10px;
    background: ${theme.light};
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
        outline: 3px solid ${theme.focus};
        img {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
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
        position: relative;
    }
`
const BigImage = styled.img`
    width: auto;
    max-width: 100%;
    max-height: 90vh;
    box-shadow: 0px 10px 40px ${theme.black} 50;
    &:hover {
        cursor: default;
    }
`
const Small = styled.small`
    text-align: center;
    color: ${props => props.white ? theme.white : theme.darkGrey};
    margin: 0 auto;
    display: block;
    font-style: italic;
    font-size: ${theme.small_fontSize_m};
    margin-top: 5px;

    &:hover {
        cursor: default;
    }
    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.fontSize_s};
    }
`

const CloseButton = styled.button`
    position: absolute; 
    top: 0;
    right: -32px;
    background: none;
    border: none;
    color: ${theme.white};
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    cursor: zoom-out;

    &:hover {
        opacity: 0.7;
    }
    &:focus-within {
        outline: none;
        border-bottom: solid 4px ${theme.focus};
    }
`

const StyledImage = styled.img`
    width: 100%;
    height: auto;
`

export const Image = ({
    src,
    placeholder,
    alt,
    side,
    isSmall,
    caption,
    copyright,
    isClickable
}) => {
    const [ openImage, setOpenImage ] = useState(false)
        
    const ConditionalWrapper = ({ condition, wrapper, children }) => 
        condition ? wrapper(children) : children

    return(
        <>
            <LazyImage
                src={src}
                placeholder={placeholder}
                visibilitySensorProps={{
                    partialVisibility: true
                }}
            >
                {(src, loading) => 
                    <Figure className={"loading_" + loading} side={side} isSmall={isSmall} itemscope itemtype="http://schema.org/ImageObject">
                        <ConditionalWrapper
                            condition={isClickable}
                            wrapper={children => <Button onClick={() => setOpenImage(true)}>{children}</Button>}
                        >
                            <StyledImage
                                itemprop="image"
                                isClickable={false}
                                src={src}
                                alt={alt ? alt : ""}
                                loading="lazy"
                            />
                        </ConditionalWrapper>                
                        {caption && <Figcaption itemprop="caption description">{caption}</Figcaption>}
                        {copyright && <Small itemprop="copyrightHolder">&copy; {copyright}</Small>}
                    </Figure>
                }
            </LazyImage>

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
                        <LazyImage
                            src={src}
                            placeholder={placeholder}
                        >
                            {src => 
                                <BigImage
                                    itemprop="image"
                                    src={src}
                                    alt={alt ? alt : ""}
                                    loading="lazy"
                                />
                            }
                        </LazyImage> 
                          
                        {caption && <Figcaption itemprop="caption description" white={true}>{caption}</Figcaption>}
                        {copyright && <Small itemprop="copyrightHolder" white={true} >&copy; {copyright}</Small>}
                        <CloseButton title="Close image" onClick={() => setOpenImage(false)}>&times;</CloseButton>
                    </Dialog>
                </>
            }
        </>
    )
}

Image.propTypes = {
    /** 
    * The source URL of the image
    **/
    src: PropTypes.string,
    /** 
    * Alt-text string for the image.
    **/
    alt: PropTypes.string,
    /** 
    * Which side should the image be on. String. False by default. Say "left" or "right"
    **/
    side: PropTypes.string,
    /** 
    * Optional boolean to set the image to be smaller
    **/
    isSmall: PropTypes.bool,
    /** 
    * A visible caption for the image. Optional
    **/
    caption: PropTypes.string,
    /** 
    * A copyright for the image. Optional
    **/
    copyright: PropTypes.string,
    /** 
    * Say whether the images should be clickable, leading to a light box. True by default
    **/
    isClickable: PropTypes.bool
}

Image.defaultProps = {
    isClickable: false,
    isSmall: false
}