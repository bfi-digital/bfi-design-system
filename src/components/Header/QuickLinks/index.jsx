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
    background: ${theme.white};
    color: ${theme.darkPink};
    font-weight: 700;
    text-decoration: none;
    padding: 21px 15px;
`

const Positioner = styled.div`
    position: absolute;
    right: 10px;
    top: 20px;
`

const QuickLinks = ({Inner}) =>
    <Wrapper>
        <Inner>
            <Positioner>
                <QuickLink to="/">BFI Southbank</QuickLink>
                <QuickLink to="/">Become a Member</QuickLink>
            </Positioner>
        </Inner>
    </Wrapper>

export default QuickLinks