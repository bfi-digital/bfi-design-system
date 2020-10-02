import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import LazyImage from "react-lazy-progressive-image"
import { Headline } from "../Headline"
import { LeadParagraph } from "../LeadParagraph"
import { Tag } from "../Tag"
import { Text } from "../Text"
import { LinkSwitch as Link } from "../LinkSwitch"

const Outer = styled.div`
    margin: 0 auto;
    text-align: center;
    max-width: calc(${theme.xl} + 125px);
`
const Meta = styled.div`
    max-width: 800px;
    padding: 0 ${theme.standardSpace}px;
    margin: 0 auto; 
    margin-top: ${theme.standardSpace*2}px;
    @media screen and (min-width: ${theme.m}){
        padding: 0 50px;
    }

    h1 {
        font-size: ${props => props.titleLength > 35 ? "1.8rem" : (props.titleLength > 25 ? "2.1rem" : "2.3rem")};
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
const LowerContent = styled.div`
    margin: 30px auto;
    max-width: 4${theme.standardSpace}px;
    p {
        margin-top: 0;
    }
`
const ImageContainer = styled.div`
    position: relative;
`
const BrandLogo = styled.div`

    &.with_image {
        display: none;
        @media screen and (min-width: ${theme.m}){
            display: block;
            position: absolute;
            top: ${theme.standardSpace}px;
            right: ${theme.standardSpace}px;
        }
    }
    &.without_image {
        text-align: center;
    }
    &.mobile_logo {
        display: block;
        margin-top: -15px;
        @media screen and (min-width: ${theme.m}){
            display: none;
        }
    }
    
    img {
        width: 300px;
        height: auto;
        
        @media screen and (min-width: ${theme.m}){
            width: 350px;
        }
        @media screen and (min-width: ${theme.l}){
            width: 400px;
        }
        @media screen and (min-width: ${theme.xl}){
            width: 450px;
        }
    }
`
const StyledImage = styled.img`
    width: 100%;
    height: auto;
`
const Small = styled.small`
    text-align: center;
    color: ${props => props.white ? theme.white : theme.darkGrey};
    font-size: ${theme.small_fontSize_m};
    margin: 0 auto;
    display: block;
    &:hover {
        cursor: default;
    }
`

export const HeroArticle = ({
    image1920x1080,
    image192x108,    
    imageAltText,
    imageCopyright,
    imageCaption,
    title,
    standfirst,
    category,
    categoryLink,
    date,
    updatedDate,
    authors,
    brand,
    brandLogos
}) => {
    const brandLogoInfo = brandLogos ? brandLogos.filter(function(logo) { return logo.logoBrand == brand }) : null
    
    return(
        <Outer>
            <Meta titleLength={title.length}>
                {category && <Tag link={categoryLink}>{category}</Tag>}
                {title && <Headline level={1} text={title}/>}
                {standfirst && <LeadParagraph text={standfirst}/>}
                <LowerContent>
                    <Text>
                        {authors && authors.length > 0 ?
                            <>
                                <p>
                                    {updatedDate && (updatedDate !== date) ? 
                                        <><strong>Updated: </strong> {updatedDate}</>
                                        : 
                                        date
                                    }
                                </p>
                                <p>
                                    By&nbsp;
                                    {authors.map((author, index) =>
                                        <span key={author.name}><Link to={author.url}>{author.name}</Link>{(index < (authors.length-1) ? ", " : "")}</span>
                                    )}
                                </p>
                            </>
                            :
                            <p>
                                {updatedDate && (updatedDate !== date) ? 
                                    <><strong>Updated: </strong> {updatedDate}</>
                                    : 
                                    date
                                }
                            </p>
                        }
                    </Text>
                </LowerContent>
            </Meta>
            {brandLogoInfo &&
                <BrandLogo className={image1920x1080 ? "without_image mobile_logo" : "without_image"}>
                    <img src={brandLogoInfo[0].backgroundURL} alt={brandLogoInfo[0].alt} />
                </BrandLogo>
            } 
            {(image1920x1080) && 
                <ImageContainer>
                    {image1920x1080 &&
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
                                    {imageCaption &&
                                      imageCopyright? <Small itemprop="copyrightHolder">{imageCaption + ". "} &copy; {imageCopyright+ "."}</Small>
                                        :<Small itemprop="copyrightHolder">{imageCaption+ "."}</Small>}
                                </>
                            }
                        </LazyImage>
                    }
                    {brandLogoInfo && 
                        <BrandLogo className="with_image">
                            <img src={brandLogoInfo[0].overlayURL} alt={brandLogoInfo[0].alt} />
                        </BrandLogo>
                    }
                </ImageContainer>
            }
        </Outer>
    )
}

HeroArticle.propTypes = {
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
    * The category of the article.
    **/
    category: PropTypes.string,
    /** 
    * The link to the filtered list of this category.
    **/
    categoryLink: PropTypes.string,
    /** 
    * The date the article was posted.
    **/
    date: PropTypes.string,
    /** 
    * An array of the authors of this article, each author contains their name and url
    **/
    authors: PropTypes.array,
    /** 
    * The brand assigned to this article
    **/
    brand: PropTypes.string
}
