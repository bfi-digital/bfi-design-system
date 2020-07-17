import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
import { Tag } from "../Tag"
import placeholderImage from "./placeholder.png"
import placeholderImageSmall from "./placeholder-small.png"
import LazyImage from "react-lazy-progressive-image"

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
            text-decoration: none;
        }
    }
    &:focus-within{
        box-shadow: 0px 0px 0px 3px ${theme.focus};
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
        margin-bottom: ${theme.standardSpace}px;
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
    min-height: 100px;

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
    width: 60%;
    display: inline-block;
    vertical-align: middle;
`

const Heading = styled.p`
    font-family: ${theme.bodyFont};
    color: ${theme.black};
    font-weight: ${theme.fontWeight_semiBold};
    font-size: ${theme.small_fontSize_m};
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 5px;
    text-decoration: underline;

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.fontSize_s};
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: ${theme.fontSize_m};
        line-height: ${theme.lineHeight_m};
    }
`

const Channels = styled.div`
    margin: 0;
    padding: 0;
    div {
        margin-right: 5px;
        font-size: ${theme.small_fontSize_m};
    }
`
export const SidebarFilmCard = ({
    image480x270,
    image48x27,
    name,
    channels,
    url,
    imageAltText,
    external
}) =>
    <Outer>
        <CallToAction external={external} className={external ? "external_link" : ""} rel={external ? "noreferrer" : ""} to={url} target={external ? "_blank" : "_self"}>
            <Content>
                <Heading>{name}</Heading>
                <Channels>
                    {channels.map(channel =>
                        <Tag key={channel}>{channel}</Tag>
                    )}
                </Channels>
            </Content>
                <PageImageContainer>
                    <LazyImage
                        src={image480x270 ? image480x270 : placeholderImage}
                        placeholder={image48x27 ? image48x27 : placeholderImageSmall}
                    >
                        {src => 
                            <PageImage className="image" imageSrc={src} alt={imageAltText ? imageAltText : ""} />
                        }
                    </LazyImage>
                </PageImageContainer>
        </CallToAction>
    </Outer>

