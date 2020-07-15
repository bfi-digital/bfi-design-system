import * as React from "react"
import theme from "../../_theme"
import styled from "styled-components"
import { LinkSwitch as Link } from "../../LinkSwitch"

const Wrapper = styled.div`
    display: none;
    @media screen and (min-width: ${theme.m}){
        display: block;
    }
`
const QuickLink = styled(Link)`
    color: ${props => props.isTransparent ? (!props.isSticky ? theme.white : theme.primary) : theme.primary};
    font-weight: ${theme.fontWeight_bold};
    text-decoration: none;
    padding: 21px 15px;
    text-shadow: ${props => props.isTransparent ?(!props.isSticky ? "0px 0px 10px rgba(0,0,0,0.3)" : "none") : "none"};
    position: relative;
    transition: all 0.3s ease-in-out;

    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background-color: ${props => props.isTransparent ? (!props.isSticky ? theme.white : theme.dark) : theme.dark};
        opacity: 0.8;
        visibility: hidden;
        transition: all 0.3s ease-in-out;

        left: 15px;
        right: 15px;
        bottom: 15px;
        @media screen and (max-width: ${theme.m_sub}) and (min-width: ${theme.m}){
            left: 8px;
            right: 8px;
            bottom: 8px;
        }
        @media screen and (min-width: ${theme.m_sub}){
            left: 13px;
            right: 13px;
            bottom: 11px;
        }
        @media screen and (min-width: ${theme.l}){
            bottom: 17px;
            left: 15px;
            right: 15px;
        }
    }

    &:hover {
        color: ${props => props.isTransparent ? (!props.isSticky ? theme.white : theme.dark) : theme.dark};
        opacity: 0.8;
        &:before {
            visibility: visible;
            width: calc(100% - 30px);
            @media screen and (max-width: ${theme.m_sub}) and (min-width: ${theme.m}){
                width: calc(100% - 16px);
            }
            @media screen and (min-width: ${theme.m_sub}){
                width: calc(100% - 26px);
            }
            @media screen and (min-width: ${theme.l}){
                width: calc(100% - 30px);
            }
        }
    }
`

const QuickLinks = ({links, isOverlaid, isSticky}) => {
    return(
        links ?
            <Wrapper>
                {links[0] &&
                    <QuickLink to={links[0].url} isTransparent={isOverlaid} isSticky={isSticky}>{links[0].title}</QuickLink>
                }
                {links[1] &&
                    <QuickLink to={links[1].url} isTransparent={isOverlaid} isSticky={isSticky}>{links[1].title}</QuickLink>
                }
                {links[2] &&
                    <QuickLink to={links[2].url} isTransparent={isOverlaid} isSticky={isSticky}>{links[2].title}</QuickLink>
                }
            </Wrapper>
            :
            null
    )
}

export default QuickLinks