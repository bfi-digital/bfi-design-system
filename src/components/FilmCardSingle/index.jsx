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
        padding: 20px;
    }
`
const Content = styled.div`
    padding-right: 20px;
    display: inline-block; 
    width: calc(100% - 47px);

    .h3 {
        margin-top: 2px;
        margin-bottom: 10px;
        font-size: 1.4375rem;
        line-height: 1.3;

        @media screen and (min-width: ${theme.l}){
            font-size: 1.6875rem;
        }
        @media screen and (min-width: ${theme.xl}){
            font-size: 2rem;
        }
    }

    @media screen and (min-width: ${theme.s}){
        width: auto;
    }
`
const Number = styled.div`
    font-size: 3.5rem;
    color: ${theme.primary};
    font-weight: 700;
    display: inline-block; 
    width: 27px;
    vertical-align: top;
    margin-top: -10px;
    margin-right: 15px;

    @media screen and (min-width: ${theme.s}){
        margin-top: 10px;
        margin-right: 20px;
        width: auto;
    }
`
const Image = styled.div`
    width: 100%;  
    margin-top: 15px;
    background: url("${props => props.imageSrc}");
    background-position: center center;
    background-size: cover;
    display: block;
    margin-left: auto;
    overflow: hidden;
    height: 0;
    padding-top: 56.25%;
    
    @media screen and (min-width: ${theme.s}){
        width: 100%;
        margin-top: 35px;
    }
`
const Meta = styled.div`
    margin-bottom: 10px;
`

const ContentLinks = styled.div`
    margin-top: 35px;
    p {
        margin-top: 0;
        margin-bottom: 10px;
    }
    a {
        margin-right: 15px;
    }
`

const StyledLink = styled(Link)`
    margin-right: 10px;
    color: ${theme.black};
    text-decoration: underline;
    font-weight: ${theme.fontWeight_bold};
    position: relative;
    transition: all 0.15s ease-in-out;
    display: block;

    &:hover{
        text-decoration: none;
    }
    &:focus{
        outline: 2px solid ${theme.focus};
    }
    &:active{
        outline: none;
        color: ${theme.dark};
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
            {filmLink && title ? 
                <StyledLink to={filmLink}><Headline level={6} text={title}/></StyledLink>
                :
                <Headline level={6} text={title}/>
            }
            <Meta>
                {year && <strong>{year}</strong>}
                {director && year && <span> - </span>}
                {director && <span>{director}</span>}
            </Meta>

            {(playerUrl || southbankUrl) &&
                <ContentLinks>
                    <p>Now showing</p>
                    {playerUrl && <Button to={playerUrl}>On BFI Player</Button>}
                    {southbankUrl && <Button to={southbankUrl}>At Southbank</Button>}
                </ContentLinks>
            }
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
