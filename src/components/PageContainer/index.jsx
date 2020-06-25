import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Play from "./Play"
import { Button } from "../Button"

export const Wrapper = styled.div`
    max-width: ${theme.l};
    margin: 0 auto;
    padding: ${theme.standardSpace}px ${theme.horizontalPadding};

    @media screen and (min-width: ${theme.m}){
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        padding: ${theme.standardSpace*2}px ${theme.horizontalPadding};
    }
    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
        padding: ${theme.standardSpace*2}px ${theme.horizontalPadding};
    }
    &:last-of-type{
        margin-bottom: 100px;
    }

    article {
        max-width: 100%;

        & h2:first-child {
            margin-block-start: 0;
        }
        & .promoBanner:first-child {
            margin-top: 0;
        }
    }

    aside {
        padding-top: ${theme.standardSpace}px;
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

const MainContentWrapper = styled.article`
    flex: 1;
    
    & h2:first-child {
        margin-block-start: 0;
    }
    iframe {
        border: none;
    }
    .map_embed {
        margin-bottom: ${theme.standardSpace}px;
    }
`
export const MainContent = ({children}) =>
    <MainContentWrapper role="main">{children}</MainContentWrapper>

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
    & section:first-child {
        margin-top: 0;
    }
    .advertising_container {
        max-width: 320px;
    }
`

export const Actions = styled.section`
    margin-bottom: 15px;
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

const Icon = styled.span`
    margin-left: 13px;
    svg {
        height: 14px;
    }
`

export const OriginalArticleDate = styled.p`
    margin-bottom: 0;
    margin-top: ${theme.standardSpace*2}px;
`

export const PlayButton = props =>
    <Button {...props}>
        {props.children}
        <Icon><Play /></Icon>
    </Button>