import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Headline } from "../Headline"
import { Text } from "../Text"
import { LinkSwitch as Link } from "../LinkSwitch"

const Outer = styled.div`
    background: ${theme.lightest};
    margin: 0 auto;
    margin-top: 50px;
    padding: 20px;
    display: flex;
`
const Content = styled.div`
    h3 {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`
const Number = styled.div`
    font-size: 3rem;
    color: ${theme.primary};
    font-weight: 700;
    margin-right: 10px;
    padding-top: 10px;
`
const Image = styled.div`
    width: 220px;
`
const Meta = styled.div`
    
`

const StyledLink = styled(Link)`

`

export const FilmCardSingle = ({
    image225x225,
    title,
    type,
    director,
    year,
    listNumber,
    playerUrl,
    southbankUrl
}) =>
    <Outer>
        {listNumber && <Number>{listNumber}</Number>}
        <Content>
            {type && <span>{type}</span>}
            {title && <Headline level={3} text={title}/>}
            <Meta>
                {director && <span>{director}</span>}
                {director && year && <span> / </span>}
                {year && <span>{year}</span>}
            </Meta>
            
            {playerUrl && <StyledLink to={playerUrl}>On BFI Player</StyledLink>}
            {southbankUrl && <StyledLink to={southbankUrl}>At Southbank</StyledLink>}
       </Content>
        {image225x225 &&
            <Image><img src={image225x225} /></Image>
        }
    </Outer>


FilmCardSingle.propTypes = {
    // Url to the image for the article hero
    image225x225: PropTypes.string,
    // Content title 
    title: PropTypes.string,
    // The type of content
    type: PropTypes.string,
    // Director of content
    director: PropTypes.string,
    // Content releae year
    year: PropTypes.string,
    // An optional number for use if this card is being used in a list
    listNumber: PropTypes.string,
    // URL to view the content on player
    playerUrl: PropTypes.string,
    // URL to buy ticket on southbank
    southbankUrl: PropTypes.string
}
