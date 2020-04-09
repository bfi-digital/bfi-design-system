import * as React from "react"
import theme from "../../_theme"
import styled from "styled-components"
import { LinkSwitch as Link } from "../../LinkSwitch"

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
`
const QuickLink = styled(Link)`
    background: ${props => props.isTransparent ? (props.isSticky ? theme.white : "transparent") : theme.white};
    color: ${props => props.isTransparent ? (!props.isSticky ? theme.white : theme.primary) : theme.primary};
    font-weight: 700;
    text-decoration: none;
    padding: 19px 15px;

    &:hover {
        color: ${props => props.isTransparent ? (!props.isSticky ? theme.grey : theme.dark) : theme.dark};
    }
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
                {/* todo: need to convert these to be dynamically pulled data from CMS */}
                <QuickLink to="/" isTransparent={isOverlaid} isSticky={isSticky}>BFI Southbank</QuickLink>
                <QuickLink to="/" isTransparent={isOverlaid} isSticky={isSticky}>Become a Member</QuickLink>
            </Positioner>
        </Inner>
    </Wrapper>

export default QuickLinks