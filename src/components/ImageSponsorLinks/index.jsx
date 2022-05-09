import React from "react"
import theme from "../_theme"
import PropTypes from "prop-types"
import styled from "styled-components"

const Outer = styled.figure`
    display: block;
    padding: 0px;
    width: 100%;
    margin: 20px 0px;
    display: flex;
`
const ImagesHolder = styled.div`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
`

const ImageContainer = styled.div`
    margin-bottom: 10px;
    margin-right: 30px;

    img {
        -webkit-transition: all ease 0.3s;
        -moz-transition: all ease 0.3s;
        -o-transition: all ease 0.3s;
        transition: all ease 0.3s;
    }
`

const Link = styled.a`
    display: block;
    &:hover {
        opacity: 0.7;
    }    
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 4px ${theme.focus};
        img {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
    }
`

const Image = styled.img`
    margin: 0;
    padding: 0;
    display: block;
    width: auto;
    height: 75px;

    @media screen and (min-width: ${theme.m}){
        height: 100px;
    }
`

const ConditionalWrapper = ({ condition, wrapper, children }) => 
    condition ? wrapper(children) : children

export const ImageSponsorLinks = ({
    images
}) => 
    <Outer>
        <ImagesHolder>
            {images.map((image) =>                   
                <ImageContainer key={image.url}>
                    <ConditionalWrapper
                        condition={image.link}
                        wrapper={children => <Link href={image.link} title={image.alt}>{children}</Link>}
                    >
                        <Image
                            src={image.url}
                            alt={image.alt ? image.alt : ""}
                            loading="lazy"
                        />
                    </ConditionalWrapper>
                </ImageContainer>
            )}
        </ImagesHolder>
    </Outer>


ImageSponsorLinks.propTypes = {
    /** 
    *
	 * Provide an array of at least one object, containing keys for the image URLs and alt text and an optional URL for the link
	 **/
    images: PropTypes.array
}
