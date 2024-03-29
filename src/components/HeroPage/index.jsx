import React, { useState, useEffect } from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"
import { Breadcrumbs } from "../Breadcrumbs"
import cameraIcon from "./camera_icon.svg"
import parse from "html-react-parser"

const Outer = styled.div`
    margin: 0 auto;
    text-align: left;
    width: 100%;
    flex: 0 0 100%;
    margin-bottom: 15px;

    max-width: calc(${theme.xl} + 125px);

    h1 {
        margin-left: 0;
        margin-block-start: 1em;
    }

    &.service_list_no_image {
        background: ${theme.lightest};
        padding-top: ${theme.standardSpace}px;
        padding-bottom: ${theme.standardSpace}px;
        margin-bottom: ${theme.standardSpace}px;
        position: relative; 

        @media screen and (min-width: ${theme.m}){
            padding-top: ${theme.standardSpace*1.5}px;
            padding-bottom: ${theme.standardSpace*1.5}px; 
        }
        @media screen and (min-width: ${theme.l}){
            padding-top: ${theme.standardSpace*2}px;
            padding-bottom: ${theme.standardSpace*2}px;        
            margin-bottom: ${theme.standardSpace*1.5}px;
        }
        ol {
            margin-bottom: ${theme.standardSpace}px;
            @media screen and (min-width: ${theme.l}){
                margin-bottom: ${theme.standardSpace*1.5}px;
            }
        }
        p {
            margin-bottom: 0;
            margin-top: 1em;
        }
        h1 {
            margin-block-start: 0;
            margin-block-end: 0;
        }

        &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: -9998px;
            right: 0;
            box-shadow: 9999px 0 0 ${theme.lightest};
            border-left: 9999px solid ${theme.lightest};
            z-index: -1;
        }
    }

    p {
        max-width: 775px;
        margin-bottom: ${theme.standardSpace}px;
    }
    ol {
        max-width: 775px;
        margin-bottom: ${theme.standardSpace*1.5}px;
        margin-top: ${theme.standardSpace*0.75}px;
    }

    &.with_image {
        @media screen and (max-width: ${theme.m}){
            h1 {
                margin-block-start: 0;
            }
        }
        @media screen and (min-width: ${theme.m}){
            display: flex;
            margin-bottom: ${theme.standardSpace*1.5}px;
            background: linear-gradient(90deg,${theme.lightest}, ${theme.lightest} 42%,#fff 0);
            position: relative;
            &:before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: -9998px;
                right: 0;
                border-left: 9999px solid ${theme.lightest};
                z-index: -1;
                display: ${props => props.pageWithSidebar ? "none" : "default"}
            }

            .page_meta {
                flex: 0 0 50%;
                align-self: center;
                height: fit-content;
                padding-left: ${theme.standardSpace*0.75}px;

                h1 {
                    margin-block-start: 0.5em;
                }
                p {
                    margin-bottom: 0.5em;
                    font-size: 1.2rem;
                }
                ol {
                    max-width: 80%;
                }
            }
        }
        @media screen and (min-width: ${theme.l}){
            .page_meta {
                padding-left: ${theme.standardSpace}px;

                p {
                    font-size: 1.4rem;
                }
            }
        }
        @media screen and (min-width: ${theme.xl}){
            background: linear-gradient(90deg,${theme.lightest}, ${theme.lightest} 44%,#fff 0);
            .page_meta {
                p {
                    font-size: 1.6rem;
                }
            }
        }
    }
    
    @media screen and (min-width: ${theme.m}){
        p, ol {
            max-width: 1000px;
        }
    }

`
const Meta = styled.div`
    h1 {
        @media screen and (max-width: ${theme.m}){
            font-size: ${props => props.titleLength > 35 ? "1.8rem" : (props.titleLength > 25 ? "2.1rem" : "2.3rem")};
            max-width: 90%;
            margin-block-end: 0.5em;
        }

        @media screen and (min-width: ${theme.m}){
            font-size: ${props => props.titleLength > 35 ? "2rem" : (props.titleLength > 25 ? "2.3rem" : "2.5rem")};
        }  
        @media screen and (min-width: ${theme.l}){
            font-size: ${props => props.titleLength > 35 ? "2.2rem" : (props.titleLength > 25 ? "2.5rem" : "2.7rem")};
        }       
        @media screen and (min-width: ${theme.xl}){
            font-size: ${props => props.titleLength > 35 ? "2.3rem" : (props.titleLength > 25 ? "2.6rem" : "3rem")};
        }
    }
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    
    @media screen and (max-width: ${theme.m}){
        padding: ${theme.standardSpace}px ${theme.standardSpace/2}px;
        background: linear-gradient(90deg,${theme.lightest}, ${theme.lightest} 80%,#fff 0);
        position: relative;

        &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: -9998px;
            right: 0;
            border-left: 9999px solid ${theme.lightest};
            z-index: -1;
            display: ${props => props.pageWithSidebar ? "none" : "default"}
        }
    }

    @media screen and (min-width: ${theme.m}){
        padding-right: ${theme.standardSpace*0.75}px;
        order: -1;
        height: fit-content;
        align-self: center;
        padding-top: ${theme.standardSpace*2}px;
        padding-bottom: ${theme.standardSpace*2}px;
    }
    @media screen and (min-width: ${theme.l}){
        padding-right: ${theme.standardSpace}px;
    }
`

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    flex: 0 0 50%;
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

const BreadcrumbContainer = styled.div`
    margin-bottom: 15px;
`

const CaptionCreditIconWrapper = styled.div`
    position: absolute;
    width: 100%;
    display: none;

    @media screen and (min-width: ${theme.m}){
        bottom: 70px;
        max-width: calc(100% - 55px);
        right: 40px;
        display: block;
    }

    @media screen and (min-width: ${theme.s}) and (max-width: ${theme.l}){
        right: 40px;
        bottom: 70px;
        display: block;
    }

    @media screen and (max-width: ${theme.s}){
        right: 30px;
        bottom: 40px;
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
    filter: drop-shadow( 0px 1px 0px rgba(0, 0, 0, .5));
    -webkit-filter: drop-shadow( 0px 1px 0px rgba(0, 0, 0, .5));

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
export const HeroPage = ({
    image1920x1080,
    imageAltText,
    copyright,
    imageCaption,
    title,
    standfirst,
    breadcrumbs,
    isServiceListPage = false
}) => {
    const [textDisplay, setTextDisplay] = useState(false)
    useEffect(() => {
        document.addEventListener("click", event => {
            if (event.target.matches("button")) {
                event.target.focus()
            }
        })
    }, [])
    return (
        <>
            {breadcrumbs &&
            <BreadcrumbContainer><Breadcrumbs breadcrumbs={breadcrumbs} /></BreadcrumbContainer>
            }

            <Outer className={image1920x1080 ? "with_image" : (isServiceListPage ? "service_list_no_image" : "without_image")}>
                <Meta className="page_meta" titleLength={title.length}>
                    {title && <Headline level={1} text={title}/>}
                    {standfirst &&
                      <StandFirst className="lead_paragraph">{parse(standfirst)}</StandFirst>
                    }

                </Meta>
                {image1920x1080 &&
                <ImageContainer>
                    <>
                        <StyledImage
                            itemprop="image"
                            src={image1920x1080}
                            alt={imageAltText ? imageAltText : ""}
                            loading="lazy"
                        />
                        {imageCaption &&
                                    <CaptionCreditIconWrapper>
                                        <CaptionCreditIcon className={textDisplay? "add_caption": "remove_caption"}
                                            onClick={()=>setTextDisplay(!textDisplay)}
                                            src={cameraIcon}
                                            data-toggle={(copyright ? (imageCaption +" " + "\u00A9 " + copyright): imageCaption)}
                                            alt="Image caption and credit"
                                            aria-label="Image caption and credit"
                                            itemprop="copyrightHolder" />
                                    </CaptionCreditIconWrapper>
                        }
                    </>
                </ImageContainer>
                }
            </Outer>
        
        </>
    )
}


HeroPage.propTypes = {
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
    copyright: PropTypes.string,
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
    isServiceListPage: PropTypes.bool
}
