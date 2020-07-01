import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { PageLink } from "./Link"
import PropTypes from "prop-types"
import { Scroller } from "../Scroller"

const Outer = styled.ul`
    padding: 15px 0;
    padding-bottom: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
        width: 100%;

        @media screen and (min-width: ${theme.s}){
            width: calc(50% - 12.5px);
            margin-right: ${theme.standardSpace}px;
            &:nth-of-type(even) {
                margin-right: 0px;
            }
        }
        @media screen and (min-width: ${theme.m}){
            width: ${props => props.lessColumns ? "calc(50% - 12.5px)" : "calc(33.333% - 16.666px)"};
            margin-right: ${theme.standardSpace}px;
            &:nth-of-type(even) {
                margin-right: ${props => props.lessColumns ? "0px" : (theme.standardSpace + "px")};
            }
            &:nth-of-type(3n) {
                margin-right: ${props => props.lessColumns ? (theme.standardSpace + "px") : "0px"};
            }
            &:nth-of-type(4n) {
                margin-right: ${props => props.lessColumns ? "0px" : (theme.standardSpace + "px")};
            }
        }
        @media screen and (min-width: ${theme.l}){
            min-width: 275px;
        }
    }


    & + .page_links_block {
        margin-top: -15px;
        padding-top: 0px;
    }
`
const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
    condition ? wrapper(children) : wrapper2(children)

export const PageLinks = ({
    links,
    colorScheme,
    withImages = false
}) =>
    links && 
        <ConditionalWrapper
            condition={links.length > 9}
            wrapper={children => <Scroller classes="page_links_block">{children}</Scroller>}
            wrapper2={children => <Outer lessColumns={links.length === 2 || links.length === 4} className="page_links_block">{children}</Outer>}
        >
            {links.map((link) =>
                <PageLink key={link.url} {...link} colorScheme={colorScheme} withImages={withImages} inScroller={links.length > 9} lessColumns={links.length === 2 || links.length === 4} />    
            )}
        </ConditionalWrapper>


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