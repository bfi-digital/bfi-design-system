import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { PageLink } from "./Link"
import PropTypes from "prop-types"

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
`
const ScrollerContainer = styled.div`
    width: 100%;
    overflow: scroll;
    padding: 15px ${theme.horizontalPadding};
`
const ScrollerTrack = styled.ul`
    width: ${props => props.num*285}px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (min-width: ${theme.m}){
        width: ${props => props.num*385}px;
    }
    @media screen and (min-width: ${theme.l}){
        width: ${props => props.num*435}px;
    }

    li {
        display: inline-block;
        margin-right: 25px;
        width: 250px;

        &:last-of-type {
            margin-right: 0px;
        }

        @media screen and (min-width: ${theme.m}){
            width: 350px;
        }
        @media screen and (min-width: ${theme.l}){
            width: 400px;
        }

    }
`

export const PageLinks = ({
    links,
    colorScheme,
    withImages = false
}) =>
    <>
        {links.length > 9 ?
            <ScrollerContainer>
                <ScrollerTrack num={links.length}>
                    {links.map((link, i) =>
                        <PageLink key={i} {...link} colorScheme={colorScheme} withImages={withImages} />    
                    )}
                </ScrollerTrack>
            </ScrollerContainer>
            :
            <Outer lessColumns={links.length === 2 || links.length === 4}>
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