import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import play from "./play.svg"
import { Button } from "../Button"

export const Wrapper = styled.div`
    max-width: ${theme.l};
    padding: 0px ${theme.horizontalPadding};
    margin: 30px auto;

    @media screen and (min-width: ${theme.m}){
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin: 60px auto;
    }
    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
    }
    &:last-of-type{
        margin-bottom: 100px;
    }

    article {
        max-width: none;

        & h2:first-child {
            margin-block-start: 0.5em;
        }
    }

    aside {
        padding-top: ${theme.standardSpace};
        padding-bottom: 0px;
        @media screen and (min-width: ${theme.m}){
            padding-top: 0px;
            padding-bottom: 0px;
            width: 33%;
            margin-left: 50px;
            margin-right: 0px;
        }
    }
`

export const MainContent = styled.article`
    flex: 1;
    
    & h2:first-child {
        margin-block-start: 0.5em;
    }
    iframe {
        border: none;
    }
    .map_embed {
        margin-bottom: ${theme.standardSpace};
    }
`
export const WrapperFullWidth = styled.article`
    margin: 35px auto;
`
export const MaxWidth = styled.article`
    max-width: ${theme.l};
    margin: 0 auto;
    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
    }
`

export const Sidebar = styled.aside`
`

export const Actions = styled.section`
    a{
        display: block;
        text-align: center;
        margin-bottom: 20px;
        &:last-of-type{
            margin-bottom: 0px;
        }
        @media screen and (min-width: ${theme.m}){
            display: inline-block;
            margin-bottom: 0px;
            margin-right: 20px;
        }
    }

`

const Icon = styled.img`
    margin-left: 13px;
    height: 14px;
`

export const PlayButton = props =>
    <Button {...props}>
        {props.children}
        <Icon src={play} alt=""/>
    </Button>