import * as React from "react"
import theme from "../../_theme"
import styled from "styled-components"
import { Link } from "@reach/router"

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
`
const QuickLink = styled(Link)`
    background: ${props => props.isTransparent ? (props.isSticky ? theme.white : "transparent") : theme.white};
    color: ${props => props.isTransparent ? (!props.isSticky ? theme.white : theme.darkPink) : theme.darkPink};
    font-weight: 700;
    text-decoration: none;
    padding: 21px 15px;
    transition: background 0.1s ease-out;
    transition-delay: ${props => props.isSticky ? "0s" : "0.1s"};
`

const Positioner = styled.div`
    position: absolute;
    right: 10px;
    top: 20px;
`

const QuickLinks = ({Inner, isOverlaid, isSticky}) =>
    <Wrapper>
        <Inner>
            <Positioner>
                <QuickLink to="/" isTransparent={isOverlaid} isSticky={isSticky}>BFI Southbank</QuickLink>
                <QuickLink to="/" isTransparent={isOverlaid} isSticky={isSticky}>Become a Member</QuickLink>
            </Positioner>
        </Inner>
    </Wrapper>

export default QuickLinks