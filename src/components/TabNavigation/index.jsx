import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"

const Outer = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    margin: ${theme.standardSpace*2}px 0;
    width: 100%;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;

    @media screen and (max-width: ${theme.s}){
        width: calc(100% + 20px);
        padding: 5px;
        background: ${theme.lightGrey}
        li {
            margin-bottom: 0;
        }
    }

    @media screen and (max-width: ${theme.m}){
        overflow-x: scroll;
        overflow-y: hidden;
        li {
            scroll-snap-align: start;
            scroll-snap-stop: always;
        }
        &::-webkit-scrollbar {
            height: 10px;
            width: 10px;
            border: 1px solid ${theme.grey};
            background: ${theme.grey};
            cursor: move;
            cursor: grab;
            cursor: -moz-grab;
            cursor: -webkit-grab;
            -webkit-appearance: none;
            -webkit-overflow-scrolling: auto;
            -webkit-overflow-scrolling: touch;

            &:active {
                cursor: grabbing;
                cursor: -moz-grabbing;
                cursor: -webkit-grabbing;
            }
        }
        &::-webkit-scrollbar-thumb:horizontal{
            background: ${theme.primary};
            border-radius: 2px;
        }
        &::-webkit-scrollbar-track {
            background-color: ${theme.grey};
        }
    }
`
const Tab = styled.li`
    margin-right: ${theme.standardSpace*0.5}px;
    font-size: ${theme.fontSize_xl};
    text-align: center;
    @media screen and (max-width: ${theme.m}){
        text-align: left;
        min-width: fit-content;
        margin-bottom: 15px;
    }
`
const StyledLink = styled(Link)`
    color: ${theme.black};
    font-weight: ${theme.fontWeight_bold};
    text-decoration: none;
    position: relative;
    transition: opacity 0.3s ease-in-out;
    padding: 21px 15px;
    @media screen and (max-width: ${theme.m}){
        padding: 3px;
        margin-right: 15px;

        &:last-of-type {
            margin-right: 0;
        }
    }
    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 3px;
        background-color: ${theme.primary};
        opacity: 0.8;
        visibility: hidden;
        transition: all 0.3s ease-in-out;

        left: 15px;
        right: 15px;
        bottom: 15px;
        @media screen and (max-width: ${theme.m}){
            display: none;
        }
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

    &:hover, &.active, &:focus {
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

    &:first-of-type {
        margin-left: -15px;
        @media screen and (max-width: ${theme.m}){
            margin-left: 0px;
        }
    }

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        box-shadow: inset ${theme.focus} 0px 0px 0px 4px;
        outline: none !important;
    }

    &.active {
        font-weight: ${theme.fontWeight_semiBold};
        opacity: 1 !important;
        cursor: default;
        @media screen and (max-width: ${theme.m}){
            font-weight: ${theme.fontWeight_bold};
            color: ${theme.primary};
        }
    }
`

export const TabNavigation = ({
    tabs
}) => {
    return( 
        <Outer role="tablist" className="tab_navigation">
            {tabs.map((tab, index) =>
                <Tab key={index} role="presentation">
                    <StyledLink role="tab" to={tab.url} className={tab.isActive ? "active" : ""}>{tab.title}</StyledLink> 
                </Tab>
            )}
        </Outer>
    )
}