import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import theme from "../_theme"
import arrow from "./arrow.svg"

const Outer = styled.div`
    position: relative;
`

const ScrollerTrack = styled.div`
    overflow: hidden;
    padding-top: 9px;
`

const ScrollerInner = styled.div`
    display: flex;
    transform: translate3d(${props => props.distance}px, 0, 0);
    transition: transform 300ms ease 100ms;
`

const ArrowRight = styled.img`
    position: absolute;
    top: calc(50% - 28px);
    cursor: pointer;
    opacity: 0.8;
    right: 10px;
    z-index: 1;

    &:hover {
        opacity: 1;
    }

    @media screen and (min-width: ${theme.m}){
        right: -50px;
    }
`
const ArrowLeft = styled(ArrowRight)`
    transform: rotate(180deg);
    top: calc(50% - 28px);
    left: 10px;

    @media screen and (min-width: ${theme.m}){
        left: -50px;
    }
`

const RightScrollerFade = styled.div`
    width: 80px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 ); /* IE6-9 */

    @media screen and (min-width: ${theme.m}){
        width: 45px;
    }
`

const LeftScrollerFade = styled(RightScrollerFade)`
    right: auto;
    left: 0;
    opacity: 0;
    background: -moz-linear-gradient(right,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
    transition: opacity 0.25s;

    &.revealed {
        opacity: 1;
    }
`

export const Scroller = ({
    arrayLength,
    children
}) => {
    const containerRef = useRef(null)
    const [distance, setDistance] = useState(0)
    const [containerWidth, setContainerWidth] = useState(0)
    const [totalInViewport, setTotalInViewport] = useState(0)
    const [viewed, setViewed] = useState(0)

    useEffect(() => {
        var containerWidthTemp = 0
        if (containerRef.current) {
            containerWidthTemp = containerRef.current.clientWidth
        } else {
            containerWidthTemp = 0
        }

        setContainerWidth(containerWidthTemp)
        setTotalInViewport(Math.floor(containerWidthTemp / 315))
    }, [containerRef.current])

    const handlePrev = () => {
        setViewed(viewed - totalInViewport)
        setDistance(distance + (containerWidth-90))
    }
    
    const handleNext = () => {
        setViewed(viewed + totalInViewport)
        setDistance(distance - (containerWidth-90))
    }

    const hasPrev = distance < 0
    const hasNext = (viewed + totalInViewport) < arrayLength


    return(
        <Outer>
            {hasPrev && <ArrowLeft src={arrow} alt="Move left" onClick={handlePrev} /> }
            <ScrollerTrack>
                <ScrollerInner ref={containerRef} distance={distance}>
                    {children}
                </ScrollerInner>
            </ScrollerTrack>
            <LeftScrollerFade className={hasPrev && "revealed"} />
            <RightScrollerFade />
            {hasNext && <ArrowRight src={arrow} alt="Move right" onClick={handleNext} /> }
        </Outer>
    )
}