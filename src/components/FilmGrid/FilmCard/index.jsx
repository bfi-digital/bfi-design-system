import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import { LinkSwitch } from "../../LinkSwitch"
import { Tag } from "../../Tag"
import placeholderImage from "./placeholder.png"
    
const Outer = styled(LinkSwitch)`
    display: block;
    // border-radius: 5px;
    text-decoration: none;
    color: ${theme.black};
    margin-bottom: 25px;
    transition: box-shadow .3s;
    
    h4 {
        margin-top: 0;
        min-height: 35px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    @media screen and (min-width: ${theme.m}){
        margin-right: 15px;
        margin-bottom: 15px;

        max-width: calc(50% - 10px);
        &:nth-of-type(even){
            margin-right: 0px;
        }
    }
    @media screen and (min-width: ${theme.l}){
        max-width: calc(33% - 10px);
        margin-bottom: 15px;

        &:nth-of-type(even){
            margin-right: 15px;
        }
        &:nth-of-type(3n){
            margin-right: 0px;
        }
    }
    &:hover, &:focus-within {
        h4{
            color: ${theme.darkGrey};
        }
        img {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
        .placeholder {
            opacity: 0.5;
        }
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 5px white, 0px 0px 0px 9px ${theme.focus};
    }
    &::-moz-focus-inner {
        border: 0;
    }
    &:active{
        h4{
            color: ${theme.dark};
        }
    }
`
const RestyledOuter = styled(Outer)`
    flex: 0 0 80%;
    margin-right: 15px !important;

    &:last-of-type {
        margin-right: 0px !important;
    }

    @media screen and (min-width: ${theme.m}){
        flex: 0 0 30%;
        &:nth-of-type(even){
            margin-right: 15px !important;
        }
    }
    @media screen and (min-width: ${theme.l}){
        &:nth-of-type(3n){
            margin-right: 15px !important;
        }
    }
`

const ImageContainer = styled.div`
    background: ${theme.light};
    display: inline-block;
    width: 100%;
    height: auto;
`
const Image = styled.img`
    // border-radius: 5px;
    width: 100%;
    height: auto;
    display: block;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s;
`

const Title = styled.h4`
    font-size: 1.125rem;
    margin-top: 10px;
    margin-bottom: 5px;
`

const Channels = styled.div`
    margin: 0;
    padding: 0;
`

export const FilmCard = ({
    image480x270,
    name,
    channels,
    url,
    imageAltText,
    inScroller
}) =>
    <>
        {inScroller ? 
            <RestyledOuter to={url} inScroller={inScroller}>
                <ImageContainer>
                    <Image src={image480x270 != "" ? image480x270 : placeholderImage} alt={imageAltText} />
                </ImageContainer>
                <Title>{name}</Title>
                <Channels>
                    {channels.map(channel =>
                        <Tag key={channel}>{channel}</Tag>
                    )}
                </Channels>
            </RestyledOuter>
            :
            <Outer to={url} inScroller={inScroller}>
                <ImageContainer>
                    <Image src={image480x270 != "" ? image480x270 : placeholderImage} alt={imageAltText} />
                </ImageContainer>
                <Title>{name}</Title>
                <Channels>
                    {channels.map(channel =>
                        <Tag key={channel}>{channel}</Tag>
                    )}
                </Channels>
            </Outer>
        }
    </>
