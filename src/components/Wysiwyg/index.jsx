import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import parse from "html-react-parser"

const Outer = styled.article`
    color: ${theme.charcoal};
    line-height: 1.5;
    font-size: 1rem;
    @media screen and (min-width: ${theme.l}){
        font-size: 1.125rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.25rem;
    }

    p, ol, ul{
        margin-bottom: 20px;
    }

    a{
        color: ${theme.darkPink};
        text-decoration: none;
        transition: box-shadow 0.1s ease-out;
        box-shadow:
            inset 0 -0em white,
            inset 0 -0.15em ${theme.lightPink};
        &:hover, &:focus{
            box-shadow:
                inset 0 -0em white,
                inset 0 -0.15em ${theme.dustyPink};
        }
        &:focus{
            background: ${theme.dustyPink};
            color: ${theme.charcoal};
            outline: none;
        }
    }

    ul{
        list-style: none;
        li{
            margin-left: -15px;
            margin-bottom: 5px;
            &:before{
                content: "•";
                color: ${theme.darkPink};
                margin-right: 20px;
            }
        }
    }

    ol{
        li{
            padding-left: 10px;
            margin-bottom: 5px;
        }
    }

`

export const Wysiwyg = ({
    html
}) =>
    <Outer>
        {parse(html)}
    </Outer>
