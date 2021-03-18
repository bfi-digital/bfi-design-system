import React, { useRef, useState, useEffect } from "react"
import { Headline } from "../Headline"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import LazyImage from "react-lazy-progressive-image"
import { LeadParagraph } from "../LeadParagraph"
import { Wrapper } from "../PageContainer"
import cameraIcon from "./camera_icon.svg"
import playIcon from "./play_icon.svg"
import pauseIcon from "./pause_icon.svg"
import parse from "html-react-parser"

const Outer = styled.section`
    margin: 0 auto;
    background: ${theme.black};
    width: 100%;
    max-width: calc(${theme.xl} + 125px);
    position: relative;
    height: auto;
    /* min-height: ${props => props.noTitleText ? "none" : "40vh"}; */
    padding-top: calc(56.25% - 25px);
    padding-bottom: 25px;
    background-image: url("${props => props.image}");
    background-size: ${props => props.noTitleText ? "contain" : "cover"};
    background-repeat: no-repeat;
    background-position: ${props => props.noTitleText ? "center" : "top center"};
    display: flex;
    align-items: flex-end;
    margin-top: ${props => props.withHeader ? "175px" : "0px"};
    overflow: hidden;
    
    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -9998px;
        right: 0;
        box-shadow: 9999px 0 0 ${theme.lightGrey};
        border-left: 9999px solid ${theme.lightGrey};
        z-index: -1;
    }

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
        background-size: cover;
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
`
const InnerGradient = styled.div`
    width: 100%;
    height: ${props => props.videoMP4 && props.noTitleText ? "33%" : "100%"};
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

const Copyright = styled.p`
    color: ${theme.white};
    text-shadow: 0px 0px 30px ${theme.black}D1;
    font-size: ${theme.small_fontSize_m};
    position: absolute;
    bottom: 5px;
    display: none;

    @media screen and (min-width: ${theme.m}){
        right: ${theme.horizontalPadding};
        bottom: 5px;
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
const CaptionCreditIconWrapper = styled.div`
    position: absolute;
    width: 100%;
    display: none;

    @media screen and (min-width: ${theme.m}){
        bottom: 30px;
        right: 30px;
        display: block;
    }

    @media screen and (max-width: ${theme.s}){
        right: 10px;
        bottom: 10px;
        display: block;
    }

    @media screen and (max-width: ${theme.l}) and (min-width: 400px){
        right: 10px;
        bottom: 10px;
        display: block;
    }
`
const CaptionCreditIcon = styled.button` 
    border: none;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    float: right;
    cursor: pointer;
    position: relative;
    opacity: 0.8;
    background: url(${cameraIcon});
    background-size: 100%; 

   &.add_caption{
     &:focus {
        opacity: 1;
        color: transparent;
        text-shadow: 0 0 0 #000;
        border:0;
        &::after {
            position: absolute;
            bottom: calc(100% + 5px);
            right: calc(100% - 30px);
            display: block;
            padding: 10px 15px;
            width: max-content;
            max-width: 1000px;
            text-align: left;
            background: ${theme.lightest};
            content: attr(data-toggle);
            z-index: 9998;
            -webkit-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.4);
            -moz-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.4);
            box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.4);
            font-size: ${theme.small_fontSize_m};

            @media screen and (max-width: ${theme.s}){
              max-width:260px;
            }

            @media screen and (max-width: ${theme.l}) and (min-width: 400px){
              max-width:350px;
            }

            @media screen and (min-width: ${theme.m}) and (max-width: ${theme.l}){
              max-width: 700px;
           }
        }
     }
     &:focus {
        border: solid 3px ${theme.focus};
        outline: none; 
    }
   } 

    &.remove_caption{
      outline: none;
      color: transparent;
      text-shadow: 0 0 0 #000;
      border:0;
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
    background-size: cover;
    background-position: center center;
    width: 100%;
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
export const Hero = ({
    image1920x1080,
    image192x108,
    headline,
    standfirst,
    withHeader,
    copyright,
    imageCaption,
    children,
    noTitleText,
    videoMP4,
    videoWEBM
}) => {
    const [isPaused, setIsPaused] = useState(true)
    const [textDisplay, setTextDisplay] = useState(false)
    const vidRef = useRef(null)

    useEffect(() => {
        document.addEventListener("click", event => {
            if (event.target.matches("button")) {
                event.target.focus()
            }
        })
        if(videoMP4 || videoWEBM) {
            if(isPaused) {
                vidRef.current.play()
            } else {
                vidRef.current.pause()
            }
        }
    }, [isPaused])
   
    return(
        <>
            <LazyImage
                src={image1920x1080}
                placeholder={image192x108 ? image192x108 : image1920x1080}
                visibilitySensorProps={{
                    partialVisibility: true
                }}
            >
                {src => 
                    <>
                        <Outer 
                            image={src} 
                            withHeader={withHeader}
                            className={image1920x1080 ? "with_image" : "hero_without_image"}
                            titleLength={headline.length}
                            noTitleText={noTitleText}
                        >
                            { (videoMP4 || videoWEBM) &&
                                <>
                                    <VideoContainer>
                                        <VideoInner noTitleText={noTitleText}>
                                            <Video playsInline autoPlay muted loop ref={vidRef} noTitleText={noTitleText}>
                                                <source src={videoMP4} type="video/mp4" />
                                                <source src={videoWEBM} type="video/webm; codecs=vp9,vorbis" />
                                            </Video>
                                        </VideoInner>
                                    </VideoContainer>
                                    <PlayButton className="playButton" onClick={() => setIsPaused(isPaused => !isPaused)} backgroundImage={isPaused ? pauseIcon : playIcon} alt={isPaused ? "Pause" : "Play"} title={isPaused ? "Pause" : "Play"}></PlayButton>
                                </>
                            }
                            {image1920x1080 && 
                                <InnerGradient withHeader={withHeader} noTitleText={noTitleText} withVideo={(videoMP4 || videoWEBM)} /> 
                            }
                            {imageCaption &&
                                <CaptionCreditIconWrapper>
                                    <CaptionCreditIcon className={textDisplay? "add_caption": "remove_caption"} src={cameraIcon}
                                        onClick={()=>setTextDisplay(!textDisplay)}
                                        data-toggle={(copyright ?
                                            (imageCaption +" " + "\u00A9 " + copyright): imageCaption)}
                                        alt="Image caption and credit"
                                        aria-label="Image caption and credit"
                                        itemprop="copyrightHolder" />
                                </CaptionCreditIconWrapper>
                            }
                           
                        </Outer>
                        <Container>
                            {headline && <Headline level={0} text={headline} visuallyHidden={noTitleText} />}
                            <ChildContainerDesktop className={image1920x1080 ? "child_with_image" : "child_without_image"}>
                                {standfirst &&  <StandFirst className="lead_paragraph">{parse(standfirst)}</StandFirst> }
                                {children}
                            </ChildContainerDesktop>
                            {copyright && <Copyright>{copyright}</Copyright>}
                        </Container>
                        {image1920x1080 && (children || standfirst) && 
                            <ChildContainerMobile>
                                <Wrapper>
                                    {standfirst && <LeadParagraph text={standfirst}/>}
                                    {children}
                                </Wrapper>
                            </ChildContainerMobile>
                        }
                    </>
                }
            </LazyImage>
        </>
    )
}

Hero.propTypes = {
    /** 
    * Urls to the image for the hero. 
    **/
    image1920x1080: PropTypes.string,
    /** 
    * The text for the title which will be used as the H1 for this page/post. Optional. You might choose not to give this and pass children in instead
    **/
    headline: PropTypes.string,
    /** 
    * A boolean to tell the hero whether it has a header over the top of it, so that content in the hero never overlaps the header. Defaults to false.
    **/
    withHeader: PropTypes.bool,
    /** 
    * A string giving the copyright attribution of the background image
    **/
    copyright: PropTypes.string,
    /**
     * An optional boolean - if set to true, this hero will not display the H1 title to allow the image to stand on its own
     */
    noTitleText: PropTypes.bool,
    /** 
    * Optional video embed which will sit on top of the image needs to be an mp4
    **/
    videoMP4: PropTypes.string,
    /** 
    * Optional 2nd video embed which be used as a backup source as a webm
    **/
    videoWEBM: PropTypes.string,
}