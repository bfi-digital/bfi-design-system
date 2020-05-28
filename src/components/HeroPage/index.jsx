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
    text-align: center;
    width: 100%;
    flex: 0 0 100%;
    margin-bottom: 15px;
    margin-top: 35px;
    

    max-width: ${theme.xl};
    max-width: calc(${theme.xl} + 125px);

    p, ol {
        max-width: 620px;
    }

    &.without_image {
        text-align: left;
    }

    &.with_image {
        p, ol {
            margin: 0 auto;
        }
        p {
            margin-bottom: 30px;
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
    imageAltText,
    imageCopyright,
    title,
    standfirst,
    breadcrumbs
}) =>
    <Outer className={image1920x1080 ? "with_image" : "without_image"}>
        <Meta>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {title && <Headline level={1} text={title}/>}
            {standfirst && <LeadParagraph text={standfirst}/>}
        </Meta>
        <ImageContainer>
            {image1920x1080 &&
                <Image
                    alt={imageAltText}
                    src={image1920x1080}
                    copyright={imageCopyright}
                />
            }
        </ImageContainer>
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
    crumbs: PropTypes.array
}
