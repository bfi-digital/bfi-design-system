/**
 * @jest-environment jsdom
 */
import React from "react"
import styled from "styled-components"
import theme from "../_theme"
// import ScrollContainer from "react-indiana-drag-scroll"

const Outer = styled.div`
    position: relative;
    margin-bottom: ${props => props.withoutBreak? "0" : (theme.standardSpace*2) + "px"};
`
const ScrollerTrack = styled.div`
    overflow: scroll;
    overflow-y: hidden;
    padding: 10px;
    display: flex;

    &::-webkit-scrollbar {
        height: 10px;
        width: 10px;
        border: 1px solid ${theme.grey};
        background:     ${theme.grey};
    }
    &::-webkit-scrollbar-thumb:horizontal{
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
// const LeftScrollerFade = styled(RightScrollerFade)`
//     right: auto;
//     left: 0;
//     background: -moz-linear-gradient(right,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%); /* FF3.6-15 */
//     background: -webkit-linear-gradient(right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.3) 100%); /* Chrome10-25,Safari5.1-6 */
//     background: linear-gradient(to left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.3) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
//     filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
//     transition: opacity 0.25s;
// `

export const Scroller = ({
    withoutBreak,
    children
}) => {

    return(
        <Outer withoutBreak={withoutBreak}>
            {/* <LeftScrollerFade className={children && "revealed"} /> */}
            <ScrollerTrack>
                {children}
            </ScrollerTrack>
            <RightScrollerFade className={children && "revealed"} />
        </Outer>
        
    )
}