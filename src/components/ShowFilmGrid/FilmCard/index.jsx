import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import { LinkSwitch } from "../../LinkSwitch"
// import { Tag } from "../../Tag"
import LazyImage from "react-lazy-progressive-image"
import placeholderImage from "./placeholder.png"
import placeholderImageSmall from "./placeholder-small.png"


const strandColors = [
    theme.primary,
    theme.strandLove,
    theme.strandDebate,
    theme.strandCult,
    theme.strandLaugh,
    theme.strandDare,
    theme.strandJourney,
    theme.strandCreate,
    theme.strandFamily,
    theme.strandExperimenta,
    theme.strandTreasures,
    theme.strandExpanded,
    theme.strandEpisodic,
    theme.strandEvents,
]

const Outer = styled(LinkSwitch)`
    display: block;
    // border-radius: 5px;
    text-decoration: none;
    color: ${theme.black};
    margin-bottom: ${theme.standardSpace}px;
    transition: box-shadow .3s;
    width: 100%;
    position: relative;

    .filmcard_title {
        margin-top: 0;
        min-height: 35px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .tag {
        background: ${theme.lightest}a1;
        &::first-letter {
            text-transform: uppercase;
        } 
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
        width: ${props => props.pageWithSidebar ? "calc(50% - 15px)" : "calc(33% - 7px)"};
        margin-bottom: 15px;

        &:nth-of-type(even){
            margin-right: ${props => props.pageWithSidebar ? "0" : "15px"};
        }
        &:nth-of-type(3n){
            margin-right: ${props => props.pageWithSidebar ? "15px" : "0"};
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
        .filmcard_description {
            transform: translateY(0);
        }
        .filmcard_description_background {
            opacity: 1;
        }
        .tag {
            background: ${theme.lightest};
        }
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 5px white, 0px 0px 0px 9px ${theme.focus};

        .highlight_banner {
            background: ${props => strandColors[props.strandColorScheme]};
        }
        .filmcard_description {
            transform: translateY(0);
        }
        .filmcard_description_background {
            opacity: 1;
        }
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
    margin-right: 15px !important;
    flex: 0 0 80%;

    &:last-of-type {
        margin-right: 25px !important;
    }
    @media screen and (min-width: ${theme.m}){
        flex: ${props => props.pageWithSidebar ? "0 0 65%" : "0 0 45%"};
        &:nth-of-type(even){
            margin-right: 15px !important;
        }
        &:last-of-type {
            margin-right: 30px !important;
        }
    }
    @media screen and (min-width: ${theme.l}){
        flex: ${props => props.pageWithSidebar ? "0 0 65%" : "0 0 37%"};
        &:nth-of-type(3n){
            margin-right: 15px !important;
        }
        &:first-of-type {
            margin-left: 10px !important;
        }
    }
    @media screen and (min-width: ${theme.xl}){
        flex: ${props => props.pageWithSidebar ? "0 0 65%" : "0 0 31%"};
    }
`

const ImageContainer = styled.div`
    background: ${props => props.strandColorScheme === 0 ? theme.light : `${strandColors[props.strandColorScheme]}33`};
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
    -webkit-transition: all ease 0.4s;
    -moz-transition: all ease 0.4s;
    -o-transition: all ease 0.4s;
    transition: all ease 0.4s;
`

const Title = styled.p`
    font-size: ${theme.fontSize_m};
    line-height: ${theme.lineHeight_m};
    margin-top: 5px;
    margin-bottom: 15px;
    font-weight: ${theme.fontWeight_semiBold};
`

// const Channels = styled.div`
//     margin: 0;
//     padding: 0;
// `

const HighlightBanner = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 15px;
    background: ${props => strandColors[props.strandColorScheme]}E8;
    color: ${theme.white};
    z-index: 1;
    font-weight: ${theme.fontWeight_semiBold};
`
const DescriptionBG = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75%;
    opacity: 0;
    transition: opacity 0.4s;
    background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 60%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 60%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 60%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#99000000',GradientType=0 ); /* IE6-9 */
    @media screen and (max-width: 400px){
        display: none;
    }  
`
const Description = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 15px;
    color: ${theme.white};
    z-index: 1;
    font-size: ${theme.fontSize_s};
    width: 100%;
    transform: translateY(100%);
    transition: .3s ease-in-out;
    max-height: 75%;

    @media screen and (max-width: 400px){
        display: none;
    }   
`

const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
    condition ? wrapper(children) : wrapper2(children)

export const FilmCard = ({
    image480x270,
    image48x27,
    name,
    // channels,
    url,
    highlightBannerText,
    description,
    pageWithSidebar,
    inScroller,
    strandColorScheme = 0
}) =>
    <ConditionalWrapper
        condition={inScroller}
        wrapper={children => <RestyledOuter to={url} className="scroller__filmcard" pageWithSidebar={pageWithSidebar} strandColorScheme={strandColorScheme}>{children}</RestyledOuter>}
        wrapper2={children => <Outer to={url} pageWithSidebar={pageWithSidebar} strandColorScheme={strandColorScheme}>{children}</Outer>}
    >
        { highlightBannerText && <HighlightBanner className="highlight_banner" strandColorScheme={strandColorScheme}>{highlightBannerText}</HighlightBanner> }
        <ImageContainer strandColorScheme={strandColorScheme}>
            <LazyImage
                src={image480x270 != "" ? image480x270 : placeholderImage}
                placeholder={image480x270 != "" ? image48x27 : placeholderImageSmall}
                visibilitySensorProps={{
                    partialVisibility: true
                }}
            >
                {src => <Image src={src} alt="" loading="lazy" />}
            </LazyImage>
            { description && <DescriptionBG className="filmcard_description_background" /> }
            { description && <Description className="filmcard_description">{description}</Description> }
        </ImageContainer>
        <Title className="filmcard_title">{name}</Title>
        {/* <Channels>
            {channels.map(channel =>
                <Tag key={channel}>{channel}</Tag>
            )}
        </Channels> */}
    </ConditionalWrapper>
