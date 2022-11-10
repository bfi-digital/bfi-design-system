import React, { useEffect } from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"
import { Breadcrumbs } from "../Breadcrumbs"
import parse from "html-react-parser"
import { CaptionedImage, CaptionToggle } from "../CaptionedImage"

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
                {image1920x1080 && (
                    <ImageContainer>
                        <CaptionedImage src={image1920x1080} alt={imageAltText}>
                            {(imageCaption || copyright) && (
                                <CaptionToggle>
                                    { imageCaption }
                                    { (imageCaption && copyright) && <br /> }
                                    { copyright && <cite>{`\u00A9 ${copyright}`}</cite> }
                                </CaptionToggle>
                            )}
                        </CaptionedImage>
                    </ImageContainer>
                )}
            </Outer>
        
        </>
    )
}


HeroPage.propTypes = {
    /** 
    * URL to the image for the article hero
    **/
    image1920x1080: PropTypes.string,
    /** 
    * Alt text for hero image
    **/
    imageAltText: PropTypes.string,
    /**
     * A brief description of what can be seen in the image
    **/
    imageCaption: PropTypes.string,
    /** 
    * Optional copyright text for the hero image
    **/
    copyright: PropTypes.string,
    /** 
    * The text for the title which will be used as the H1 for this page/post
    **/
    title: PropTypes.string,
    /** 
    * A summary of the article
    **/
    standfirst: PropTypes.string,
    /** 
    * The breadcrumb array
    **/
    breadcrumbs: PropTypes.array,
    /** 
    * An optional definition to define if this is a service list page or a regular page
    **/
    isServiceListPage: PropTypes.bool
}
