import React, { useEffect } from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Headline } from "../Headline"
import parse from "html-react-parser"
import { Wrapper } from "../PageContainer"
import { CaptionedImage, CaptionToggle } from "../CaptionedImage"

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

  @media screen and (max-width: ${theme.m}) {
    background: ${theme.black};
    position: relative;
  }

  @media screen and (min-width: ${theme.m}) {
    order: -1;
    height: fit-content;
    align-self: center;
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
  align-self: center;

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
                            <CaptionedImage src={image1920x1080} alt={imageAltText}>
                                {(imageCaption || imageCopyRight) && (
                                    <CaptionToggle>
                                        { imageCaption }
                                        { (imageCaption && imageCopyRight) && <br /> }
                                        { imageCopyRight && <cite>{`\u00A9 ${imageCopyRight}`}</cite> }
                                    </CaptionToggle>
                                )}
                            </CaptionedImage>
                        </ImageContainer>
                    )
                )}
            </Outer>
        </StyledWrapper>
    )
}

HeroShow.propTypes = {
    /**
    * URL to the image for the article hero
    **/
    image1920x1080: PropTypes.string,
    /**
    * Alt text for hero image
    **/
    imageAltText: PropTypes.string,
    /**
    * The text for the title which will be used as the H1 for this page/post
    **/
    title: PropTypes.string,
    /**
    * A summary of the article
    **/
    standfirst: PropTypes.string,
    /**
    * An optional date/time string used to specify that there is only 1 performance
    **/
    dateTimeStart: PropTypes.string,
    /**
    * An optional config object containing embed details for players such as YouTube, Vimeo, etc
    **/
    oembedObject: PropTypes.object,
    /**
    * Optional. Possible values are "event" or undefined (default, represents a screening)
    **/
    showType: PropTypes.string,
    /**
    * Optional copyright text for the hero image
    **/
    imageCopyRight: PropTypes.string,
    /**
    * A brief description of what can be seen in the image
    **/
    imageCaption: PropTypes.string,
    /**
    * The total number of performances for the show
    **/
    totalPerformances: PropTypes.number
}
