import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"
import { LeadParagraph } from "../LeadParagraph"
import { Breadcrumbs } from "../Breadcrumbs"
import { Image } from "../Image"

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
        background: ${theme.primary};
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
        }
        h1 {
            margin-block-start: ${theme.standardSpace}px;
        }
        h1, p, ul, li, a {
            color: ${theme.white};
        }
        a {
            background-image: linear-gradient(120deg, ${theme.darkPink} 0%, ${theme.darkPink} 100%);
            &:hover, &:focus {
                color: ${theme.black};
            }
        }

        &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: -9999px;
            right: 0;
            box-shadow: 9999px 0 0 ${theme.primary};
            border-left: 9999px solid ${theme.primary};
            z-index: -1;
        }
    }

    &.with_image {
        // p, ol {
        //     margin: 0 auto;
        // }
        p {
            margin-bottom: 30px;
        }
    }
    p, ol {
        max-width: 775px;
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
        <Meta>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {title && <Headline level={1} text={title}/>}
            {standfirst && <LeadParagraph text={standfirst}/>}
        </Meta>
        {image1920x1080 &&
            <ImageContainer>
            
                <Image
                    alt={imageAltText ? imageAltText : ""}
                    src={image1920x1080}
                    placeholder={image192x108}
                    copyright={imageCopyright}
                />
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
