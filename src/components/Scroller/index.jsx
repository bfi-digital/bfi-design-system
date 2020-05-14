import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import theme from "../_theme"
import arrow from "./arrow.svg"
import ScrollContainer from 'react-indiana-drag-scroll'

const Outer = styled.div`
    position: relative;

    .scroll-container {
        display: flex;
        padding: 10px;
    }
    .scroll-container::-webkit-scrollbar {
        height: 10px;
        width: 10px;
        border: 1px solid ${theme.grey};
        background:     ${theme.grey};
    }
    .scroll-container::-webkit-scrollbar-thumb:horizontal{
        background: ${theme.primary};
        border-radius: 1px;
    }
`
const RightScrollerFade = styled.div`
    width: 80px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.3) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.3) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 ); /* IE6-9 */

    @media screen and (min-width: ${theme.m}){
        width: 45px;
    }

    &.revealed {
        opacity: 1;
    }
`
const LeftScrollerFade = styled(RightScrollerFade)`
    right: auto;
    left: 0;
    background: -moz-linear-gradient(right,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.3) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.3) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
    transition: opacity 0.25s;
`

export const Scroller = ({
    children
}) => {

    return(
        <Outer>
            {/* <LeftScrollerFade className={children && "revealed"} /> */}
            <ScrollContainer hideScrollbars={false} vertical={false} className="scroll-container">
                {children}
            </ScrollContainer>
            <RightScrollerFade className={children && "revealed"} />
        </Outer>
        
    )
}