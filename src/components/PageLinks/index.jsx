import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { PageLink } from "./Link"
import PropTypes from "prop-types"

const Outer = styled.ul`
    padding: 15px;
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
            width: calc(33.333% - 16.666px);
            margin-right: 25px;
            &:nth-of-type(even) {
                margin-right: 25px;
            }
            &:nth-of-type(3n) {
                margin-right: 0px;
            }
        }
        @media screen and (min-width: ${theme.l}){
            width: calc(25% - 18.75px);
            margin-right: 25px;
            &:nth-of-type(even) {
                margin-right: 25px;
            }
            &:nth-of-type(3n) {
                margin-right: 25px;
            }
            &:nth-of-type(4n) {
                margin-right: 0px;
            }
        }
    }
`

export const PageLinks = ({
    links,
    colorScheme
}) =>
    <Outer lessColumns={links.length === 3 || links.length === 6}>
        {links.map((link, i) =>
            <PageLink key={i} {...link} colorScheme={colorScheme}/>    
        )}
    </Outer>


PageLinks.propTypes = {
    /** 
	 * An array of manually selected pages for this group of page links. Each element of the array contains a `title`, `url`, `description` and `callToAction` text which are generated from the meta data of the page that is being linked to.
	 **/
    links: PropTypes.array,
    /** 
	 * A number which selects the colour scheme of the page links slice, dependant on the pillar the page/post is within.
	 **/
    colorScheme: PropTypes.number
};

PageLinks.defaultProps = {
    colorScheme: 0
};