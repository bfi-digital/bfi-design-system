import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.article`
    color: ${theme.charcoal};
    line-height: 1.5;
    font-size: 1.0625rem;
    @media screen and (min-width: ${theme.m}){
        font-size: 1.1875rem;
    }
    @media screen and (min-width: ${theme.l}){
        font-size: 1.3125rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.5625rem;
    }

    p{
        margin-bottom: 20px;
    }
`

export const LeadParagraph = ({
    text
}) =>
    <Outer>
        {text}
    </Outer>
