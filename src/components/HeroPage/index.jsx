import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import LazyImage from "react-lazy-progressive-image"
import { Headline } from "../Headline"
import { LeadParagraph } from "../LeadParagraph"
import { Breadcrumbs } from "../Breadcrumbs"

const Outer = styled.div`
    margin: 0 auto;
    text-align: left;
    width: 100%;
    flex: 0 0 100%;
    margin-bottom: 15px;

    max-width: calc(${theme.xl} + 125px);

    h1 {
        margin-block-start: 1em;
    }

    &.service_list_no_image {
        background: ${theme.lightest};
        padding-top: ${theme.standardSpace}px;
        padding-bottom: ${theme.standardSpace}px;
        margin-bottom: ${theme.standardSpace}px;
        position: relative; 
        margin-top: -${theme.standardSpace}px;

        @media screen and (min-width: ${theme.m}){
            margin-top: -${theme.standardSpace*2}px;
            padding-top: ${theme.standardSpace*1.5}px;
            padding-bottom: ${theme.standardSpace*1.5}px; 
        }
        @media screen and (min-width: ${theme.l}){
            margin-top: -${theme.standardSpace*2}px;
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
            left: -9999px;
            right: 0;
            box-shadow: 9999px 0 0 ${theme.lightest};
            border-left: 9999px solid ${theme.lightest};
            z-index: -1;
        }
    }

    p, ol {
        max-width: 775px;
        margin-bottom: ${theme.standardSpace}px;
    }

    &.with_image {
        @media screen and (max-width: ${theme.m}){
            h1, p, ol {
                text-align: center;
            }
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
                left: -9999px;
                right: 0;
                border-left: 9999px solid ${theme.lightest};
                z-index: -1;
                display: ${props => props.pageWithSideBar ? "none" : "default"}
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
            left: -9999px;
            right: 0;
            border-left: 9999px solid ${theme.lightest};
            z-index: -1;
            display: ${props => props.pageWithSideBar ? "none" : "default"}
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
const Small = styled.small`
    text-align: center;
    color: ${props => props.white ? theme.white : theme.darkGrey};
    margin: 0 auto;
    display: block;
    font-style: italic;
    font-size: ${theme.small_fontSize_m};
    margin-top: 5px;

    &:hover {
        cursor: default;
    }
    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.fontSize_s};
    }
`

export const HeroPage = ({
    image1920x1080,
    image192x108,
    imageAltText,
    imageCopyright,
    title,
    standfirst,
    breadcrumbs,
    isServiceListPage = false
}) =>
    <Outer className={image1920x1080 ? "with_image" : (isServiceListPage ? "service_list_no_image" : "without_image")}>
        <Meta className="page_meta">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            {title && <Headline level={1} text={title}/>}
            {standfirst && <LeadParagraph text={standfirst}/>}
        </Meta>
        {image1920x1080 &&
            <ImageContainer>
                <LazyImage
                    src={image1920x1080}
                    placeholder={image192x108}
                    visibilitySensorProps={{
                        partialVisibility: true
                    }}
                >
                    {src => 
                        <>
                            <StyledImage
                                itemprop="image"
                                src={src}
                                alt={imageAltText ? imageAltText : ""}
                            />
                            {imageCopyright && <Small itemprop="copyrightHolder">&copy; {imageCopyright}</Small>}
                        </>
                    }
                </LazyImage>
            </ImageContainer>
        }
    </Outer>


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
    isServiceListPage: PropTypes.bool
}
