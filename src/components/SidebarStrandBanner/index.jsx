import React from "react"
import theme from "../_theme"
import styled from "styled-components"
import LazyImage from "react-lazy-progressive-image"
import { LinkSwitch as Link } from "../LinkSwitch"

const strandColors = [
    theme.primary,
    theme.strandLove,
    theme.strandDebate,
    theme.strandCult,
    theme.strandLaugh,
    theme.strandDare,
    theme.strandJourney,
    theme.strandCreate,
    theme.strandFamily,
    theme.strandExperimenta,
    theme.strandTreasures,
    theme.strandExpanded,
    theme.strandEpisodic,
    theme.strandEvents,
]

const Outer = styled(Link)`
    background: ${props => strandColors[props.color]};
    color: ${theme.white};
    padding: 15px;
    padding-bottom: 0;
    display: block;
    text-decoration: none;
    transition: box-shadow .3s; 
    margin-bottom: ${theme.standardSpace*2}px;
    
    &:hover {
        text-decoration: underline;
        background: ${props => strandColors[props.color]}E8;
    }
    &:focus {
        box-shadow: 0px 0px 0px 5px ${theme.focus};
        outline: none;
        background: ${props => strandColors[props.color]}E8;
    }
`
const StyledImage = styled.img`
    width: calc(100% + 30px);
    margin-left: -15px;
    height: auto;
    margin-bottom: -5px;
`
const Title = styled.p`
    font-weight: bold;
    margin: 0;
`
const Sponsor = styled(Title)`
    font-weight: normal;
    margin-bottom: 15px;
`
export const SidebarStrandBanner = ({
    strand
}) =>
    <Outer color={strand.colorScheme} to={strand.url} title={`View the ${strand.title} Strand`}>
        <Title>Part of {strand.title} Strand</Title>
        <Sponsor>{strand.sponsors && `Sponsored by ${strand.sponsors[0].title}` }</Sponsor>
        <LazyImage
            src={strand.image}
            placeholder={strand.placeholder}
        >
            {(src) => 
                <StyledImage
                    itemprop="image"
                    src={src}
                    alt=""
                    loading="lazy"
                />
            }
        </LazyImage>
    </Outer>
