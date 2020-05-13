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
    margin-top: 50px;
    max-width: ${theme.xl};
    max-width: calc(${theme.xl} + 125px);
`
const Meta = styled.div`
    max-width: 800px;
    padding: 0 25px;
    margin: 0 auto; 
    @media screen and (min-width: ${theme.m}){
        padding: 0 50px;
    }
`
const LowerContent = styled.div`
    margin: 30px auto;
    max-width: 425px;
    p {
        margin-top: 0;
    }
`
export const HeroArticle = ({
    image1920x1080,
    imageAltText,
    imageCopyright,
    title,
    standfirst,
    category,
    categoryLink,
    date,
    authors
}) =>
    <Outer>
        <Meta>
            {category && <Tag link={categoryLink}>{category}</Tag>}
            {title && <Headline level={1} text={title}/>}
            {standfirst && <LeadParagraph text={standfirst}/>}
            <LowerContent>
                <Text>
                    {date && <span>{date}</span>}
                    {authors &&
                        <>
                            {authors.length === 1 ?
                                <span> by: <a href={authors[0].url}>{authors[0].name}</a></span>
                                :
                                <p>
                                    By:&nbsp;
                                    {authors.map((author, index) =>
                                        <><Link key={`author_${index}`} to={author.url}>{author.name}</Link>{(index < (authors.length-1) ? ", " : "")}</>
                                    )}
                                </p>
                            }
                        </>
                    }
                </Text>
            </LowerContent>
        </Meta>
        {image1920x1080 &&
            <Image
                alt={imageAltText}
                src={image1920x1080}
                copyright={imageCopyright}
            />
        }
    </Outer>


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
}
