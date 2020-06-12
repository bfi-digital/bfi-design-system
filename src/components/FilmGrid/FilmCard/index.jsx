import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import { LinkSwitch } from "../../LinkSwitch"
import { Tag } from "../../Tag"
import LazyImage from "react-lazy-progressive-image"
import placeholderImage from "./placeholder.png"
import placeholderImageSmall from "./placeholder-small.png"

const Outer = styled(LinkSwitch)`
    display: block;
    // border-radius: 5px;
    text-decoration: none;
    color: ${theme.black};
    margin-bottom: ${theme.standardSpace}px;
    transition: box-shadow .3s;
    width: 100%;

    .filmcard_title {
        margin-top: 0;
        min-height: 35px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    @media screen and (min-width: ${theme.s}){
        margin-right: 15px;
        margin-bottom: 15px;

        width: calc(50% - 10px);
        &:nth-of-type(even){
            margin-right: 0px;
        }
    }
    @media screen and (min-width: ${theme.m}){
        width: calc(33% - 10px);
        margin-bottom: 15px;

        &:nth-of-type(even){
            margin-right: 15px;
        }
        &:nth-of-type(3n){
            margin-right: 0px;
        }
    }
    &:hover, &:focus-within {
        .filmcard_title {
            color: ${theme.darkGrey};
        }
        img {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
        .placeholder {
            opacity: 0.5;
        }
        p {
            color: ${theme.dark};
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
        .filmcard_title {
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
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;
`
const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    height: auto;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s;
`

const Title = styled.p`
    font-size: ${theme.fontSize_m};
    line-height: ${theme.lineHeight_m};
    margin-top: 5px;
    margin-bottom: 15px;
    font-weight: 700;
`

const Channels = styled.div`
    margin: 0;
    padding: 0;
`
const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
    condition ? wrapper(children) : wrapper2(children)

export const FilmCard = ({
    image480x270,
    image48x27,
    name,
    channels,
    url,
    inScroller
}) =>
    <ConditionalWrapper
        condition={inScroller}
        wrapper={children => <RestyledOuter to={url}>{children}</RestyledOuter>}
        wrapper2={children => <Outer to={url}>{children}</Outer>}
    >
        <ImageContainer>
            <LazyImage
                src={image480x270 != "" ? image480x270 : placeholderImage}
                placeholder={image480x270 != "" ? image48x27 : placeholderImageSmall}
            >
                {src => <Image src={src} alt="" />}
            </LazyImage>

        </ImageContainer>
        <Title className="filmcard_title">{name}</Title>
        <Channels>
            {channels.map(channel =>
                <Tag key={channel}>{channel}</Tag>
            )}
        </Channels>
    </ConditionalWrapper>
