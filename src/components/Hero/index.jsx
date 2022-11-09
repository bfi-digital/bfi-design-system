import React, { useRef, useState, useEffect } from "react"
import { Headline } from "../Headline"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { LeadParagraph } from "../LeadParagraph"
import { Wrapper } from "../PageContainer"
import playIcon from "./play_icon.svg"
import pauseIcon from "./pause_icon.svg"
import parse from "html-react-parser"
import useMobile from "../../hooks/mediaHook"
import { CaptionedImage, CaptionToggle } from "../CaptionedImage"

const Outer = styled.section`
    margin: ${props => props.withHeader ? "175px" : "0px"} auto 0;
    width: 100%;
    max-width: calc(${theme.xl} + 125px);
    position: relative;
    height: auto;
    padding-top: calc(56.25% - 25px);
    padding-bottom: 25px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;

    a {
        color: ${theme.black} !important;
        svg {
            fill: ${theme.black} !important;
        }
        &:hover, &:focus {
            color: ${theme.white} !important;
            svg {
                fill: ${theme.white} !important;
            }
        }
    }

    &.with_image {

        &.without_video {
            padding-bottom: 0;
            padding-top: 0;
        }

        h1 {
            color: ${theme.white};
            text-shadow: 0px 0px 30px ${theme.black}D1;
            margin-bottom: 0px;
            font-size: 2.4rem;
            font-size: ${props => props.titleLength > 65 ? "2rem" : (props.titleLength > 45 ? "2.4rem" : "2.6rem")};
            @media screen and (min-width: ${theme.m}){
                margin-bottom: ${theme.standardSpace}px;
                font-size: ${props => props.titleLength > 65 ? "2.4rem" : (props.titleLength > 45 ? "2.8rem" : "3.1rem")};
            }
            @media screen and (min-width: ${theme.l}){
                font-size: ${props => props.titleLength > 65 ? "2.6rem" : (props.titleLength > 45 ? "3rem" : "3.4rem")};
            }
            @media screen and (min-width: ${theme.xl}){
                font-size: ${props => props.titleLength > 65 ? "2.8rem" : (props.titleLength > 45 ? "3.2rem" : "3.8rem")};
            }
        }

        p {
            color: ${theme.white};
            margin-top: -15px;
            text-shadow: 0px 0px 30px ${theme.black}D1;
        }
    }


    &.hero_without_image {
        background: ${theme.primary};
        padding-bottom: ${theme.standardSpace}px;
        margin-bottom: ${theme.standardSpace}px;
        position: relative; 
        padding-top: ${theme.standardSpace}px;

        @media screen and (min-width: ${theme.m}){
            padding-top: 175px;
            padding-bottom: ${theme.standardSpace*1.5}px; 
        }
        @media screen and (min-width: ${theme.l}){
            padding-top: 200px;
            padding-bottom: ${theme.standardSpace*2}px;        
            margin-bottom: ${theme.standardSpace*1.5}px;
        }
        &:before {
            box-shadow: 9999px 0 0 ${theme.primary};
            border-left: 9999px solid ${theme.primary};
        }
        h1, p, ul, li, a {
            color: ${theme.white};
        }

        a {
            &:after {
                background: ${theme.darkPink};
            }
            &:hover, &:focus {
                color: ${theme.black} !important;
                svg {
                    fill: ${theme.black} !important;
                }
            }
        }
    }

    @media screen and (min-width: ${theme.m}){
        margin-top: 0px;
        min-height: 390px;
        align-items: flex-end;
        max-height: 80vh;

        padding-top: ${props => props.noTitleText ? "calc(56.25% - 25px)" : (props.withHeader ? "275px" : "211px")};

        h1 {
            max-width: calc( 0.8 * ${theme.m});
        }
        p {
            max-width: 80%;
        }
    }
    @media screen and (min-width: ${theme.l}){
        padding-top: ${props => props.noTitleText ? "calc(56.25% - 25px)" : (props.withHeader ? "375px" : "261px")};
    }
    @media screen and (min-width: ${theme.xl}){
        min-height: 500px;
        padding-bottom: 40px;
        padding-top: ${props => props.noTitleText ? "775px" : (props.withHeader ? "425px" : "311px")};

        h1{
            max-width: calc( 0.5 * ${theme.xl});
        }
    }


    &:hover {
        .playButton {
            opacity: 0.25;
        }
    }

    figcaption {
        z-index: 2;

        @media screen and (min-width: ${theme.m}) {
            --distance-from-edge: 30px;
        }
    }
`

const HeroImage = styled(CaptionedImage)`
    --hero-padding-bottom: 25px;
    --hero-padding-top: calc(56.25% - 25px);
    --hero-min-height: 100%;
    padding-bottom: var(--hero-padding-bottom);
    padding-top: var(--hero-padding-top);
    width: 100%;
    min-height: var(--hero-min-height);
    position: static;

    @media screen and (min-width: ${theme.m}) {
        --hero-padding-top: ${props => props.noTitleText ? "calc(56.25% - 25px)" : (props.withHeader ? "275px" : "211px")};
        --hero-min-height: 390px;
    }

    @media screen and (min-width: ${theme.l}) {
        --hero-padding-top: ${props => props.noTitleText ? "calc(56.25% - 25px)" : (props.withHeader ? "375px" : "261px")};
    }

    @media screen and (min-width: ${theme.xl}) {
        --hero-padding-bottom: 40px;
        --hero-padding-top: ${props => props.noTitleText ? "775px" : (props.withHeader ? "425px" : "311px")};
        --hero-min-height: 500px;
    }

    img {
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        object-fit: cover;
    }
`

const InnerGradient = styled.div`
    width: 100%;
    height: ${props => props.withVideo && props.noTitleText ? "33%" : "100%"};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background: ${props => props.noTitleText ? 
        `-moz-linear-gradient(top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) ${props.withVideo  ? "100%" : "60%"}, rgba(0,0,0,0) ${props.withVideo  ? "100%" : "60%"})` 
        : (props.withHeader ? 
            "-moz-linear-gradient(top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0) 50%, rgba(0,0,0,65) 100%)" 
            : 
            "-moz-linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 25%, rgba(0,0,0,0) 100%)"
        )};
    background: ${props => props.noTitleText ? 
        `-webkit-linear-gradient(top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0) ${props.withVideo  ? "100%" : "60%"},rgba(0,0,0,0) ${props.withVideo  ? "100%" : "60%"})` 
        : (props.withHeader ? 
            "-webkit-linear-gradient(top, rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.45) 1%,rgba(0,0,0,0) 50%,rgba(0,0,0,65) 100%)" 
            : 
            "-webkit-linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 25%, rgba(0,0,0,0) 100%)"
        )};
    background: ${props => props.noTitleText ? 
        `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0) ${props.withVideo  ? "100%" : "60%"},rgba(0,0,0,0) ${props.withVideo  ? "100%" : "60%"})` 
        : (props.withHeader ? 
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.45) 1%,rgba(0,0,0,0) 50%,rgba(0,0,0,65) 100%)" 
            : 
            "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 25%, rgba(0,0,0,0) 100%)"
        )};
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#99000000', endColorstr='#000000',GradientType=0 );
`
const Container = styled.div`
    max-width: ${theme.l};
    width: 100%;
    margin: 0 auto;
    padding: 0px ${theme.horizontalPadding};
    z-index: 1;
    position: relative;

    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
    }

    ol + h1 {
        margin-top: 20px;
    }
    li, a {
        color: ${theme.white};
        // text-shadow: 0px 0px 30px ${theme.black}D1;
        &:focus{
            background: ${theme.dark};
        }
    }
`

const ChildContainerDesktop = styled.div`
    &.child_with_image {
        display: none;
    }
    &.child_without_image {
        display: block;
    }
    @media screen and (min-width: ${theme.m}){
        &.child_with_image {
            display: block;
        }
    }
`
const ChildContainerMobile = styled.div`
    display: block;
    a {
        color: ${theme.white};
        background: ${theme.black};
    }
    @media screen and (min-width: ${theme.m}){
        display: none;
    }
`

const VideoContainer = styled.figure`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
`
const VideoInner = styled.div`
    width: ${props => props.noTitleText ? "auto" : "100%"};
    height: ${props => props.noTitleText ? "0" : "100%"};
    padding-bottom: 56.25%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`
const Video = styled.video`
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @media screen and (max-width: ${theme.m}){
        width: auto;
    }

    @media screen and (min-width: ${theme.m}){
        max-width: 100%;
        height: auto;
    }
`

const StandFirst = styled.p`
    color: ${theme.black};
    font-size: ${theme.fontSize_m};
    line-height: ${theme.lineHeight_m};
    margin-bottom: 30px;
    white-space: pre-wrap;
    margin-top: 0;

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.large_fontSize_m};
        line-height: ${theme.large_lineHeight_m};
    }
    @media screen and (min-width: ${theme.l}){
        max-width: calc(${theme.l} - 10%);
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: ${theme.large_fontSize_xl};
        max-width: calc(${theme.xl} - 20%);
    }
`

const PlayButton = styled.button`
    z-index: 2;
    width: 50px;
    height: 50px;
    opacity: 0;
    cursor: pointer;
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    background: url(${props => props.backgroundImage});
    background-size: 100%;
    border-radius: 100%;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s;

    &:hover {
        opacity: 1 !important;
    }
    &:focus {
        outline: none;
        opacity: 1 !important;
        border: solid 3px ${theme.focus};
    }
`

const HeroContent = ({ headline, noTitleText, image1920x1080, standfirst, children }) => (
    <>
        {(headline || standfirst || children) && (
            <Container>
                {headline && <Headline level={0} text={headline} visuallyHidden={noTitleText} />}
                {(standfirst || children) && (
                    <ChildContainerDesktop className={image1920x1080 ? "child_with_image" : "child_without_image"}>
                        {standfirst && <StandFirst className="lead_paragraph">{parse(standfirst)}</StandFirst> }
                        {children}
                    </ChildContainerDesktop>
                )}
            </Container>
        )}
    </>
)

const HeroCaption = ({ imageCaption, copyright }) => (
    <>
        {(imageCaption || copyright) && (
            <CaptionToggle>
                { imageCaption }
                { (imageCaption && copyright) && <br /> }
                { copyright && <cite>{`\u00A9 ${copyright}`}</cite> }
            </CaptionToggle>
        )}
    </>
)

export const Hero = (props) => {
    const {
        image1920x1080,
        headline = "",
        standfirst,
        withHeader,
        copyright,
        imageCaption,
        children,
        noTitleText,
        videoMP4,
        videoWEBM
    } = props
    const [isPaused, setIsPaused] = useState(true)
    const [video, setVideo] = useState(false)
    const [image, setImage] = useState(true)
    const mobile = useMobile("768px", false)
    const videoOnDesktop = video && !mobile
    const videoAndMobile = video && mobile
    const vidRef = useRef(null)
    const withVideo = videoMP4 || videoWEBM

    useEffect(() => {
        document.addEventListener("click", event => {
            if (event.target.matches("button")) {
                event.target.focus()
            }
        })
        if (withVideo) {
            setVideo(true)
            setImage(false)
            if(isPaused) {
                vidRef.current.play()
            } else {
                vidRef.current.pause()
            }
        }
    }, [isPaused])
   
    return(
        <>
            <Outer
                withHeader={withHeader}
                className={`${image1920x1080 ? "with_image" : "hero_without_image"} ${withVideo ? "with_video" : "without_video"}`}
                titleLength={headline.length}
                noTitleText={noTitleText}
            >
                { withVideo &&
                    <>
                        <VideoContainer>
                            <VideoInner noTitleText={noTitleText}>
                                <Video playsInline autoPlay muted loop ref={vidRef} noTitleText={noTitleText}>
                                    <source src={videoMP4} type="video/mp4" />
                                    <source src={videoWEBM} type="video/webm; codecs=vp9,vorbis" />
                                </Video>
                            </VideoInner>
                            <HeroCaption imageCaption={imageCaption} copyright={copyright} />
                        </VideoContainer>
                        <PlayButton className="playButton" onClick={() => setIsPaused(isPaused => !isPaused)} backgroundImage={isPaused ? pauseIcon : playIcon} alt={isPaused ? "Pause" : "Play"} title={isPaused ? "Pause" : "Play"}></PlayButton>
                    </>
                }
                {(image && image1920x1080) && (
                    <HeroImage src={image1920x1080} withHeader={withHeader} noTitleText={noTitleText}>
                        <HeroContent {...props} />
                        <HeroCaption imageCaption={imageCaption} copyright={copyright} />
                    </HeroImage>
                )}

                <InnerGradient withHeader={withHeader} noTitleText={noTitleText} withVideo={withVideo} />

                {(!image && videoOnDesktop) && <HeroContent {...props} />}
            </Outer>

            {(!image && videoAndMobile) && <HeroContent {...props} />}

            {(image1920x1080 && (children || standfirst)) && 
                <ChildContainerMobile>
                    <Wrapper>
                        {standfirst && <LeadParagraph text={standfirst}/>}
                        {children}
                    </Wrapper>
                </ChildContainerMobile>
            }
        </>
    )
}

Hero.propTypes = {
    /** 
    * URL to the image for the hero. 
    **/
    image1920x1080: PropTypes.string,
    /** 
    * The text for the title which will be used as the H1 for this page/post. Optional. You might choose not to give this and pass children in instead
    **/
    headline: PropTypes.string,
    /** 
    * Standfirst text for the page/post
    **/
    standfirst: PropTypes.string,
    /** 
    * A boolean to tell the hero whether it has a header overlaid on top of it, so that content in the hero never overlaps the header. Defaults to false.
    **/
    withHeader: PropTypes.bool,
    /** 
    * A brief description of what can be seen in the image
    **/
    imageCaption: PropTypes.string,
    /** 
    * A string giving the copyright attribution for the image
    **/
    copyright: PropTypes.string,
    /**
     * An optional boolean - if set to true, this hero will not display the H1 title to allow the image to stand on its own
     */
    noTitleText: PropTypes.bool,
    /** 
    * URL to an optional mp4 video embed
    **/
    videoMP4: PropTypes.string,
    /** 
    * URL to an optional webm backup video embed
    **/
    videoWEBM: PropTypes.string,
}
