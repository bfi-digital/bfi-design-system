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


    &:hover {
        .right_scroll {
            opacity: 1;
        }
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

    grid-template-columns: 10px repeat(${props => props.noOfChildren}, 85%) 20px;

    @media screen and (min-width: ${theme.m}){
        grid-template-columns: 5px repeat(${props => props.noOfChildren}, 45%) 20px;
    }
    @media screen and (min-width: ${theme.l}){
        grid-template-columns: 0px repeat(${props => props.noOfChildren}, 40%) 15px;
    }
`

const RightScrollerFade = styled.div`
    z-index: 2;
    cursor: pointer;
    position: absolute;
    top: 10px;
    width: 64px;
    height: calc(100% - 15px);
    color: white;
    right: 0px;
    user-select: none;
    transition: opacity 0.2s ease 0s, padding-left 0.2s ease 0s;
    margin: 5px 0px;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.55) 0%, transparent 100%);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    // opacity: 0;

    svg {
        width: 18px; height: auto; fill: rgb(255, 255, 255); display: block; transform: rotate(180deg);
    }

    &.revealed {
        opacity: 1;
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
            <RightScrollerFade className="right_scroll">
                <svg viewBox="0 0 10 25"><path d="M.22 13c-.3-.45-.29-1.04.01-1.5L7.7.27a.6.6 0 0 1 .86-.16l1.18.82c.28.2.36.58.17.86L2.93 12.28 9.9 23.21c.18.29.1.67-.18.86l-1.2.8a.6.6 0 0 1-.85-.18L.22 13z"></path></svg>
            </RightScrollerFade>
        </Outer>
    )
}