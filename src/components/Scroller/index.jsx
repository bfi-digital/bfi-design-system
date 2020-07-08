/**
 * @jest-environment jsdom
 */
import React, { useRef, useState } from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    position: relative;
    margin-bottom: ${props => props.withoutBreak? "0" : (theme.standardSpace*2) + "px"};
    margin-left: -20px;
    width: calc(100% + 40px);
    @media screen and (min-width: ${theme.l}){
        margin-left: 0;
        width: 100%;
    }


    &:hover {
        .right_scroll, .left_scroll {
            opacity: 1;
        }
    }
`
const ScrollerTrack = styled.div`
    padding: 10px;
    display: flex;
    padding-left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x proximity;
    &::-webkit-scrollbar {
        height: 20px;
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

    @media screen and (min-width: ${theme.m}){
        &::-webkit-scrollbar {
            height: 13px;
        }
    }
`

const RightScrollerFade = styled.div`
    z-index: 2;
    cursor: pointer;
    position: absolute;
    top: 10px;
    color: white;
    right: 0px;
    user-select: none;
    transition: opacity 0.2s ease 0s, padding-left 0.2s ease 0s;
    margin: 0px;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.55) 0%, transparent 100%);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;

    svg {
        width: 18px; 
        height: auto; 
        fill: rgb(255, 255, 255); 
        display: block; 
        transform: rotate(180deg);
    }

    opacity: 1;
    width: 35px;
    height: calc(100% - 30px);
    @media screen and (min-width: ${theme.m}){
        opacity: 0;
        width: 45px;
        height: calc(100% - 23px);
    }
    @media screen and (min-width: ${theme.xl}){
        width: 55px;
    }
`
const LeftScrollerFade = styled(RightScrollerFade)`
    left: 0px;
    right: auto;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.55) 0%, transparent 100%);
    svg {
        transform: rotate(0deg);
    }
`
const LastItem = styled.div`
    height: 1px;
    flex: 0 0 1px;
`

export const Scroller = ({
    withoutBreak,
    classes,
    noOfChildren = 10,
    children
}) => {
    const scrollRef = useRef(null)
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(true)

    const scrollRightClick = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset
    }
    const scrollLeftClick = (scrollOffset) => {
        scrollRef.current.scrollLeft -= scrollOffset
    }

    const handleScroll = () => {
        const currentScroll = scrollRef.current
        let offset = currentScroll.scrollWidth - 600
        if(window.innerWidth > 768 && window.innerWidth < 1440) {
            offset = currentScroll.scrollWidth - 1100
        } else if (window.innerWidth > 1440) {
            offset = currentScroll.scrollWidth - 1400
        }

        if (currentScroll.scrollLeft > 100) {
            setShowLeft(true)
        } else {
            setShowLeft(false)
        }
        if (currentScroll.scrollLeft < offset) {
            setShowRight(true)
        } else {
            setShowRight(false)
        }
    }
      
    return(
        <Outer withoutBreak={withoutBreak} className={classes}>
            {showLeft && 
                <LeftScrollerFade 
                    onClick={() => scrollLeftClick(window.innerWidth < 550 ? 405 : (window.innerWidth > 768 && window.innerWidth < 1040 ? 750 : 1175))} 
                    className="left_scroll"
                >
                    <svg viewBox="0 0 10 25"><path d="M.22 13c-.3-.45-.29-1.04.01-1.5L7.7.27a.6.6 0 0 1 .86-.16l1.18.82c.28.2.36.58.17.86L2.93 12.28 9.9 23.21c.18.29.1.67-.18.86l-1.2.8a.6.6 0 0 1-.85-.18L.22 13z"></path></svg>
                </LeftScrollerFade>
            }
            <ScrollerTrack noOfChildren={noOfChildren} ref={scrollRef} onScroll={handleScroll}>
                {children}
                <LastItem />
            </ScrollerTrack>
            {showRight && 
                <RightScrollerFade 
                    onClick={() => scrollRightClick(window.innerWidth < 550 ? 405 : (window.innerWidth > 768 && window.innerWidth < 1040 ? 750 : 1175))} 
                    className="right_scroll"
                >
                    <svg viewBox="0 0 10 25"><path d="M.22 13c-.3-.45-.29-1.04.01-1.5L7.7.27a.6.6 0 0 1 .86-.16l1.18.82c.28.2.36.58.17.86L2.93 12.28 9.9 23.21c.18.29.1.67-.18.86l-1.2.8a.6.6 0 0 1-.85-.18L.22 13z"></path></svg>
                </RightScrollerFade>
            }
        </Outer>
    )
}