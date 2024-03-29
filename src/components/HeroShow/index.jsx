import React, { useState, useEffect } from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Headline } from "../Headline"
import parse from "html-react-parser"
import { Wrapper } from "../PageContainer"
import cameraIcon from "./camera_icon.svg"

const StyledWrapper = styled(Wrapper)`
  max-width: calc(${theme.xl} + 125px) !important;
  padding: 0 !important;
`

const Outer = styled.div`
  margin: 0 auto;
  text-align: left;
  width: 100%;
  flex: 0 0 100%;
  margin-bottom: 15px;

  h1 {
    margin-left: 0;
    margin-block-start: 0;
    margin-block-end: 0.25em;
  }

  p {
    max-width: 775px;
    margin-bottom: ${theme.standardSpace}px;
  }
  ol {
    max-width: 775px;
    margin-bottom: ${theme.standardSpace * 1.5}px;
    margin-top: ${theme.standardSpace * 0.75}px;
  }

  &.with_image {
    @media screen and (min-width: ${theme.m}) {
      display: flex;
      background: ${theme.black};
      position: relative;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -9998px;
        right: 0;
        border-left: 9999px solid ${theme.black};
        box-shadow: 9999px 0 0 ${theme.black};
        z-index: -1;
      }

      .page_meta {
        padding: ${theme.standardSpace * 0.75}px
          ${theme.standardSpace * 0.75 * 2}px;

        p {
          font-size: 1rem;
        }
        ol {
          max-width: 80%;
        }
      }
    }
    @media screen and (min-width: ${theme.l}) {
      .page_meta {
        padding: ${theme.standardSpace}px ${theme.standardSpace * 2}px;

        p {
          font-size: 1.2rem;
        }
      }
    }
    @media screen and (min-width: ${theme.xl}) {
      background: ${theme.black};
      .page_meta {
        p {
          font-size: 1.3rem;
        }
      }
    }
  }

  @media screen and (min-width: ${theme.m}) {
    p,
    ol {
      max-width: 1000px;
    }
  }
`
const Meta = styled.div`
  background: ${theme.black};
  color: ${theme.white};
  padding: ${theme.standardSpace}px;
  display: flex;
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: fit-content;
  align-self: center;

  @media screen and (min-width: ${theme.m}) {
    flex: 0 0 50%;
  }
  @media screen and (min-width: ${theme.xl}) {
    flex: 0 0 35%;
  }

  h1,
  p {
    color: ${theme.white};
  }
  p {
    margin-bottom: ${theme.standardSpace}px;
  }
  h1 {
    @media screen and (max-width: ${theme.m}) {
      font-size: ${(props) =>
        props.titleLength > 35
            ? "1.8rem"
            : props.titleLength > 25
                ? "2.1rem"
                : "2.3rem"};
      max-width: 90%;
      margin-block-end: 0.5em;
    }
    @media screen and (min-width: ${theme.l}) {
      font-size: ${(props) =>
        props.titleLength > 35
            ? "2rem"
            : props.titleLength > 25
                ? "2.3rem"
                : "2.5rem"};
    }
    @media screen and (min-width: ${theme.xl}) {
      font-size: ${(props) =>
        props.titleLength > 35
            ? "2.1rem"
            : props.titleLength > 25
                ? "2.4rem"
                : "2.7rem"};
    }
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  img {
    margin-bottom: -5px;
  }

  @media screen and (max-width: ${theme.m}) {
    background: ${theme.black};
    position: relative;
  }

  @media screen and (min-width: ${theme.m}) {
    order: -1;
    height: fit-content;
    align-self: center;
  }
  @media screen and (min-width: ${theme.l}) {
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  @media screen and (min-width: ${theme.m}) {
    flex: 0 0 50%;
  }
  @media screen and (min-width: ${theme.xl}) {
    flex: 0 0 65%;
  }
`
const ButtonContainer = styled.div`
  margin-top: auto;

  a {
    width: 100%;
  }
`

const StyledAnchorLink = styled(AnchorLink)`
  display: inline-block;
  position: relative;
  font-weight: ${theme.fontWeight_bold};
  font-size: ${theme.fontSize_m};
  line-height: ${theme.lineHeight_m};
  color: ${theme.black};
  background: ${theme.white};
  text-decoration: none;
  padding: 10px ${theme.standardSpace}px;
  z-index: 2;
  width: 100%;
  text-align: center;

  svg {
    fill: ${theme.black};
  }

  :after {
    content: "";
    width: 100%;
    height: 5px;
    transition: height 0.3s;
    position: absolute;
    bottom: -5px;
    left: 0;
    background: ${theme.primary};
    z-index: -1;
  }

  &:hover,
  &:focus {
    color: ${theme.white};

    svg {
      fill: ${theme.white};
    }

    :after {
      height: calc(100% + 5px);
    }
  }
  &:focus {
    box-shadow: 0px 0px 0px 4px ${theme.focus};
    outline: none;
    height: auto;

    :after {
      bottom: 0;
      height: 100%;
    }
  }
  &:active {
    background: ${theme.primary} !important;
    box-shadow: none;
    transform: translate(0, 5px);
    :after {
      height: 1px;
      bottom: -1px;
    }
  }
`

const VideoInner = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
`
const Video = styled.div`
  background-size: cover;
  background-position: center center;
  width: 100%;

  @media screen and (min-width: ${theme.m}) {
    height: auto;
    order: -1;
  }
  @media screen and (min-width: ${theme.l}) {
    margin-right: 0px;
    margin-left: 0px;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

const CaptionCreditIconWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: none;

  @media screen and (min-width: ${theme.m}) {
    bottom: 15px;
    max-width: 100%;
    right: 15px;
    display: block;
  }

  @media screen and (min-width: ${theme.s}) and (max-width: ${theme.l}) {
    right: 20px;
    bottom: 20px;
    display: block;
  }

  @media screen and (max-width: ${theme.s}) {
    right: 20px;
    bottom: 20px;
    display: block;
    max-width: calc(100% - 55px);
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
  
    &:focus {
        border: solid 3px ${theme.focus};
        outline: none; 
    }

    &.add_caption {
        &:focus {
            opacity: 1;
            color: transparent;
            text-shadow: 0 0 0 #000;
        
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
    }

    &.remove_caption{
        outline: none;
        color: transparent;
        text-shadow: 0 0 0 #000;
   }
`

export const HeroShow = ({
    image1920x1080,
    imageAltText,
    title,
    standfirst,
    dateTimeStart,
    oembedObject,
    showType,
    imageCopyRight,
    imageCaption,
    children,
    totalPerformances,
}) => {
    const [textDisplay, setTextDisplay] = useState(false)
    useEffect(() => {
        document.addEventListener("click", event => {
            if (event.target.matches("button")) {
                event.target.focus()
            }
        })
    }, [])

    if(oembedObject){
        if (oembedObject.html.includes("youtube") && !oembedObject.html.includes("cc_load_policy=1")) {
            oembedObject.html = oembedObject.html.replace(
                "?feature=oembed",
                "?feature=oembed&cc_load_policy=1"
            )
        }
        if (oembedObject.html.includes("vimeo") && !oembedObject.html.includes("texttrack")) {
            const parts = oembedObject.html.split(" ")
            parts[1] = parts[1].replace(/"/g, "") + "?texttrack=en"
            parts[1] = "src="+ "\""+parts[1].slice(4)+"\""
            oembedObject.html = parts.join(" ")
        }
    }
    return (
        <StyledWrapper>
            <Outer className={image1920x1080 ? "with_image" : "without_image"}>
                <Meta className="page_meta" titleLength={title.length}>
                    {title && <Headline level={1} text={title} />}
                    {standfirst &&
                      <StandFirst className="lead_paragraph">{parse(standfirst)}</StandFirst>
                    }
                    {dateTimeStart ? (
                        children && <ButtonContainer>{children}</ButtonContainer>
                    ) : totalPerformances > 0 ? (
                        <StyledAnchorLink offset="175" href="#performance-list">
              View all {showType === "event" ? "dates and times" : "screenings"}
                        </StyledAnchorLink>
                    ) : (
                        ""
                    )}
                </Meta>
                {oembedObject ? (
                    <Video>
                        <VideoInner>
                            {parse(
                                oembedObject.html.replace(
                                    "></iframe>",
                                    " title=\"" +
                    (oembedObject.title
                        ? oembedObject.title + " video"
                        : "Video player") +
                    "\"></iframe>"
                                )
                            )}
                        </VideoInner>
                    </Video>
                ) : (
                    image1920x1080 && (
                        <ImageContainer>
                            <>
                                <StyledImage
                                    itemprop="image"
                                    src={image1920x1080}
                                    alt={imageAltText ? imageAltText : ""}
                                    loading="lazy"
                                />
                                {imageCaption && (
                                    <CaptionCreditIconWrapper>
                                        <CaptionCreditIcon className={textDisplay? "add_caption": "remove_caption"}
                                            onClick={()=>setTextDisplay(!textDisplay)}
                                            src={cameraIcon}
                                            data-toggle={
                                                imageCopyRight
                                                    ? imageCaption + " " + "\u00A9 " + imageCopyRight
                                                    : imageCaption
                                            }
                                            alt="Image caption and credit"
                                            aria-label="Image caption and credit"
                                            itemprop="copyrightHolder"
                                        />
                                    </CaptionCreditIconWrapper>
                                )}
                            </>
                        </ImageContainer>
                    )
                )}
            </Outer>
        </StyledWrapper>
    )
}

HeroShow.propTypes = {
    /**
   * Urls to the image for the article hero.
   **/
    image1920x1080: PropTypes.string,
    /**
   * Alt text for hero image.
   **/
    imageAltText: PropTypes.string,
    /**
   * Optional copyright text for the hero image.
   **/
    imageCopyright: PropTypes.string,
    /**
   * The text for the title which will be used as the H1 for this page/post
   **/
    title: PropTypes.string,
    /**
   * A summary of the article.
   **/
    standfirst: PropTypes.string,
    /**
   * The breadcrumb array
   **/
    crumbs: PropTypes.array,
    /**
   * An optional definition to define if this is a service list page or a regular page
   **/
    isServiceListPage: PropTypes.bool,
}
