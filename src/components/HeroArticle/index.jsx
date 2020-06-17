import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"
import { LeadParagraph } from "../LeadParagraph"
import { Tag } from "../Tag"
import { Image } from "../Image"
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
        position: absolute;
        top: 0px;
        right: 0px;
    }
    &.without_image {
        text-align: center;
    }
    
    img {
        width: 400px;
        height: auto;
    }
`

export const HeroArticle = ({
    image1920x1080,
    image192x108,    
    imageAltText,
    imageCopyright,
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
            <Meta>
                {category && <Tag link={categoryLink}>{category}</Tag>}
                {title && <Headline level={1} text={title}/>}
                {standfirst && <LeadParagraph text={standfirst}/>}
                <LowerContent>
                    <Text>
                        {authors && authors.length > 0 ?
                            authors.length > 1 ?
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
                                authors && authors.length === 1 &&
                                    <p>   
                                        {updatedDate && (updatedDate !== date) ? 
                                            <><strong>Updated: </strong> {updatedDate}</>
                                            : 
                                            date
                                        }
                                        &nbsp;by <a href={authors[0].url}>{authors[0].name}</a>
                                    </p>
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
            <ImageContainer>
                {image1920x1080 &&
                    <Image
                        alt={imageAltText ? imageAltText : ""}
                        src={image1920x1080}
                        placeholder={image192x108 ? image192x108 : image1920x1080}
                        copyright={imageCopyright}
                    />
                }
                {brandLogoInfo &&
                    <BrandLogo className={image1920x1080 ? "with_image" : "without_image"}>
                        <img src={
                            image1920x1080 ? 
                                brandLogoInfo[0].overlayURL  
                                : 
                                brandLogoInfo[0].backgroundURL
                        } 
                        alt={brandLogoInfo[0].alt} />
                    </BrandLogo>
                } 
            </ImageContainer>
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
