/**
 * @jest-environment jsdom
 */
import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    position: relative;
    margin-bottom: ${props => props.withoutBreak? "0" : (theme.standardSpace*2) + "px"};
    
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: x proximity;
    &::-webkit-scrollbar {
        height: 12px;
        width: 12px;
        border: 1px solid ${theme.grey};
        background: ${theme.grey};
        cursor: move;
        cursor: grab;
        cursor: -moz-grab;
        cursor: -webkit-grab;
        &:active {
            cursor: grabbing;
            cursor: -moz-grabbing;
            cursor: -webkit-grabbing;
        }
    }
    &::-webkit-scrollbar-thumb:horizontal{
        background: ${theme.primary};
        border-radius: 1px;
    }

    margin-left: -20px;
    width: calc(100% + 40px);
    @media screen and (min-width: ${theme.l}){
        margin-left: 0;
        width: 100%;
    }
`
const ScrollerTrack = styled.div`
    display: grid;
    grid-gap: calc(${theme.standardSpace}px / 2);
    grid-template-rows: minmax(150px, 1fr);
    padding-top: 15px;
    padding-bottom: calc(.75 * ${theme.standardSpace}px);
    margin-bottom: calc(-.25 * ${theme.standardSpace}px);
    
    & > .filmcard_scroller:last-child {
        margin-right: ${theme.standardSpace}px;
    }
    &::before {
        content: "";
    }
    &::after {
      content: "";
    }

    grid-template-columns: 20px repeat(${props => props.noOfChildren}, 85%) 20px;

    @media screen and (min-width: ${theme.m}){
        grid-template-columns: 20px repeat(${props => props.noOfChildren}, 45%) 20px;
    }
    @media screen and (min-width: ${theme.l}){
        grid-template-columns: 10px repeat(${props => props.noOfChildren}, 40%) 15px;
    }
`

export const Scroller = ({
    withoutBreak,
    classes,
    noOfChildren = 10,
    children
}) => {

    return(
        <Outer withoutBreak={withoutBreak} className={classes}>
            <ScrollerTrack noOfChildren={noOfChildren}>
                {children}
            </ScrollerTrack>
        </Outer>
        
    )
}