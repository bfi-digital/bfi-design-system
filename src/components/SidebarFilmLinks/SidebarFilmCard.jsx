import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
import { Tag } from "../Tag"
import placeholderImage from "./placeholder.png"
   
const Outer = styled.li`
    margin-bottom: 20px;
    position: relative;
    transition: box-shadow .3s;
    // border-radius: 5px;
    
    &:last-child {
        border: none;
        margin-bottom: 0px;
    }
    
    &:hover, &:focus-within {
        .image {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
        p {
            color: ${theme.dark};
        }
    }
    &:focus-within{
        box-shadow: 0px 0px 0px 5px ${theme.focus};
        outline: none;
    }
    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        height: 1px;
        width: 100%;
        background: ${theme.grey};
    }
    &:last-of-type {
        margin-bottom: 25px;
        &:after {
            display: none;
        }
    }
`
const PageImageContainer = styled.div`
    background: ${theme.light};
    display: inline-block;
    width: calc(40% - 10px);
    height: 100px;
    // border-radius: 4px;
    margin-right: 10px;
    vertical-align: middle;
`
const PageImage = styled.div`
    width: 100%;
    background: url("${props => props.imageSrc}");
    height: 100%;
    background-position: center center;
    background-size: cover;
    display: block;
    // border-radius: 4px;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s;
`

const CallToAction = styled(Link)`
    text-decoration: none;
    color: ${theme.black};
    display: block;
    
    &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    &:focus{
        outline: none;
    }
`

const Content = styled.div`
    margin: 0;
    display: inline-block;
    vertical-align: top;
    width: 60%;
`

const Heading = styled.p`
    font-family: "Open Sans";
    color: ${theme.black};
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 5px;

    @media screen and (min-width: ${theme.m}){
        font-size: 1rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.125rem;
    }
`

const Channels = styled.div`
    margin: 0;
    padding: 0;
    div {
        margin-right: 5px;
        font-size: 0.8rem;
    }
`
export const SidebarFilmCard = ({
    image480x270,
    name,
    channels,
    url,
    imageAltText,
}) =>
    <Outer>
        <CallToAction external={external} to={url}>
            <PageImageContainer>
                <PageImage className="image" imageSrc={image480x270 ? image480x270 : placeholderImage} alt={imageAltText} />
            </PageImageContainer>
            <Content>
                <Heading>{name}</Heading>
                <Channels>
                    {channels.map(channel =>
                        <Tag key={channel}>{channel}</Tag>
                    )}
                </Channels>
            </Content>
        </CallToAction>
    </Outer>

