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
    margin-bottom: 35px;
    transition: box-shadow .3s;

    @media screen and (min-width: ${theme.m}){
        margin-right: 25px;
        max-width: calc(50% - 12.5px);
        &:nth-of-type(even){
            margin-right: 0px;
        }
    }
    @media screen and (min-width: ${theme.l}){
        max-width: calc(33% - 13.5px);
        &:nth-of-type(even){
            margin-right: 25px;
        }
        &:nth-of-type(3n){
            margin-right: 0px;
        }
    }
    &:hover, &:focus-within {
        h3{
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
        box-shadow: 0px 0px 0px 5px white, 0px 0px 0px 9px ${theme.highlight};
    }
    &::-moz-focus-inner {
        border: 0;
    }
    &:active{
        h3{
            color: ${theme.dark};
        }
    }
`
const ImageContainer = styled.div`
    background: ${theme.highlight};
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

const Title = styled.h3`
    font-size: 1.125rem;
    margin-top: 10px;
    margin-bottom: 5px;
`

const Channels = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const FilmCard = ({
    image480x270,
    name,
    channels,
    url
}) =>
    <Outer to={url}>
        <ImageContainer>
            <Image src={image480x270 != "" ? image480x270 : placeholderImage} alt=""/>
        </ImageContainer>
        <Title>{name}</Title>
        <Channels>
            {channels.map(channel =>
                <Tag key={channel}>{channel}</Tag>
            )}
        </Channels>
    </Outer>