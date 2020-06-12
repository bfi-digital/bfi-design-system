import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"
import { Button } from "../Button"
import { LinkSwitch as Link } from "../LinkSwitch"
import LazyImage from "react-lazy-progressive-image"

const Outer = styled.div`
    background: ${theme.lightest};
    margin: 0 auto;
    margin-bottom: ${theme.standardSpace}px;
    padding: 15px;
    display: block;
    @media screen and (min-width: ${theme.s}){
        display: flex;
        padding: 20px;
    }
`
const Content = styled.div`
    padding-right: 20px;
    display: inline-block; 
    width: calc(100% - 47px);

    h3 {
        margin-top: 2px;
        margin-bottom: 5px;
    }

    @media screen and (min-width: ${theme.s}){
        width: auto;
    }
`
const Number = styled.div`
    font-size: 3rem;
    color: ${theme.primary};
    font-weight: 700;
    display: inline-block; 
    width: 27px;
    vertical-align: top;
    margin-top: -10px;
    margin-right: 15px;

    @media screen and (min-width: ${theme.s}){
        margin-top: 15px;
        margin-right: 20px;
        width: auto;
    }
`
const Image = styled.div`
    width: 100%;  
    margin-top: 15px;
    background: url("${props => props.imageSrc}");
    height: 220px;
    background-position: center center;
    background-size: cover;
    display: block;
    margin-left: auto;
    
    @media screen and (min-width: ${theme.s}){
        margin-top: 0;
        width: 220px;
    }
`
const Meta = styled.div`
    margin-bottom: 10px;
`

const ContentLinks = styled.div`
    margin-top: ${theme.standardSpace*2}px;
    p {
        maring-top: 0;
        margin-bottom: 5px;
    }
`

const StyledLink = styled(Link)`
    margin-right: 10px;
    color: ${theme.black};
    text-decoration: none;
    font-weight: 600;
    position: relative;
    background-image: linear-gradient(120deg, ${theme.primary} 0%, ${theme.primary} 100%);
    background-repeat: no-repeat;
    background-size: 100% 2px;
    background-position: 0 100%;
    transition: all 0.15s ease-in-out;

    &:hover{
        color: ${theme.white};
        background-size: 100% 100%;
    }
    &:focus{
        background-size: 100% 100%;
        color: ${theme.white};
        outline: none;
        background-image: linear-gradient(120deg, ${theme.focus} 0%, ${theme.focus} 100%);
    }
    &:active{
        outline: none;
        text-decoration: underline;
    }
`

export const FilmCardSingle = ({
    image225x225,
    image22x22,
    title,
    type,
    director,
    year,
    listNumber,
    playerUrl,
    southbankUrl,
    filmLink
}) =>
    <Outer>
        {listNumber && <Number>{listNumber}</Number>}
        <Content>
            {type && <span>{type}</span>}
            {title && <Headline level={6} text={title}/>}
            <Meta>
                {director && <span>{director}</span>}
                {director && year && <span> / </span>}
                {year && <span>{year}</span>}
            </Meta>
            {filmLink && <StyledLink to={filmLink}>Find out more</StyledLink>}

            <ContentLinks>
                {playerUrl || southbankUrl ?
                    <>
                        <p>Now showing</p>
                        {playerUrl && <Button to={playerUrl}>On BFI Player</Button>}
                        {southbankUrl && <Button to={southbankUrl}>At Southbank</Button>}
                    </>
                    :
                    null
                    // :
                    // <>{filmLink && <StyledLink to={filmLink}>Find out more</StyledLink>}</>
                }
            </ContentLinks>
        </Content>
        {image225x225 &&
            <LazyImage
                src={image225x225}
                placeholder={image22x22 ? image22x22 : image225x225}
            >
                {src => <Image imageSrc={src} />}
            </LazyImage>
        }
    </Outer>


FilmCardSingle.propTypes = {
    /** 
	 * Url to the image for the article hero
    **/
    image225x225: PropTypes.string,
    /** 
	 * Content title 
    **/
    title: PropTypes.string,
    /** 
	 * The type of content
    **/
    type: PropTypes.string,
    /** 
	 * Director of content
    **/
    director: PropTypes.string,
    /** 
	 * Content releae year
    **/
    year: PropTypes.string,
    /** 
	 * An optional number for use if this card is being used in a list
    **/
    listNumber: PropTypes.string,
    /** 
	 * URL to view the content on player
    **/
    playerUrl: PropTypes.string,
    /** 
	 * URL to buy ticket on southbank
    **/
    southbankUrl: PropTypes.string,
    /** 
	 * URL to link to the film page
    **/
    filmLink: PropTypes.string
}
