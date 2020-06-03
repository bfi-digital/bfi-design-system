import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { PageLink } from "./Link"
import PropTypes from "prop-types"
import { Scroller } from "../Scroller"

const Outer = styled.ul`
    padding: 15px 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
        @media screen and (min-width: ${theme.s}){
            width: calc(50% - 12.5px);
            margin-right: 25px;
            &:nth-of-type(even) {
                margin-right: 0px;
            }
        }
        @media screen and (min-width: ${theme.m}){
            width: ${props => props.lessColumns ? "calc(50% - 12.5px)" : "calc(33.333% - 16.666px)"};
            margin-right: 25px;
            &:nth-of-type(even) {
                margin-right: ${props => props.lessColumns ? "0px" : "25px"};
            }
            &:nth-of-type(3n) {
                margin-right: ${props => props.lessColumns ? "25px" : "0px"};
            }
            &:nth-of-type(4n) {
                margin-right: ${props => props.lessColumns ? "0px" : "25px"};
            }
        }
        @media screen and (min-width: ${theme.l}){
            min-width: 275px;
        }
    }


    & + .pageLinks {
        margin-top: -15px;
        padding-top: 0px;
    }
    &:last-of-type {
        margin-bottom: 25px;
    }
`

export const PageLinks = ({
    links,
    colorScheme,
    withImages = false
}) =>
    links && 
        <>
            {links.length > 9 ?
                <Scroller>
                    {links.map((link, i) =>
                        <PageLink key={i} {...link} colorScheme={colorScheme} withImages={withImages} inScroller={true} />    
                    )}
                </Scroller>
                :
                <Outer lessColumns={links.length === 2 || links.length === 4} className="pageLinks">
                    {links.map((link, i) =>
                        <PageLink key={i} {...link} colorScheme={colorScheme} withImages={withImages} />    
                    )}
                </Outer>
            }
        </>


PageLinks.propTypes = {
    /** 
	 * An array of manually selected pages for this group of page links. Each element of the array contains a `title`, `url`, `description` and `callToAction` text which are generated from the meta data of the page that is being linked to.
	 **/
    links: PropTypes.array,
    /** 
	 * A number which selects the colour scheme of the page links slice, dependant on the pillar the page/post is within.
	 **/
    colorScheme: PropTypes.number,
    /** 
	 * Option to show pagelinks with images - if shown, there will not be a description.
	 **/
    withImages: PropTypes.bool
}

PageLinks.defaultProps = {
    colorScheme: 0,
    withImages: false
}