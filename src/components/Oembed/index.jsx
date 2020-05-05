import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import theme from "../_theme"

const Outer = styled.div`
    width: 100%;
    text-align: center;
    margin: 25px 0;

    iframe {
        max-width: 620px;
        width: 100%;
        height: 190px;
        
        @media screen and (min-width: ${theme.s}){
            height: 270px;
        }
        @media screen and (min-width: ${theme.m}){
            height: 348px;
        }
    }
`

export const Oembed = ({
    oembedObject
}) =>
    <Outer>
        {parse(oembedObject.html)}
    </Outer>