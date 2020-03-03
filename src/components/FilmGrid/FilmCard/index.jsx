import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import { LinkSwitch } from "../../LinkSwitch"
import { Tag } from "../../Tag"

const Outer = styled(LinkSwitch)`
    display: block;
    border-radius: 5px;
    text-decoration: none;
    color: ${theme.charcoal};
    margin-bottom: 35px;
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
    &:hover{
        h3{
            color: ${theme.darkGrey};
        }
    }
    &:focus{
        box-shadow: 0px 0px 0px 3px ${theme.dustyPink};
    }
    &::-moz-focus-inner {
        border: 0;
    }
    &:active{
        h3{
            color: ${theme.darkPink};
        }
    }
`

const Image = styled.img`
    border-radius: 5px;
    width: 100%;
    height: auto;
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
    imageAltText,
    name,
    channels,
    url
}) =>
    <Outer to={url}>
        <Image src={image480x270} alt={imageAltText}/>
        <Title>{name}</Title>
        <Channels>
            {channels.map(channel =>
                <Tag key={channel}>{channel}</Tag>
            )}
        </Channels>
    </Outer>