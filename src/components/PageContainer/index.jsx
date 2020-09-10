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
        -webkit-flex-direction: row;
        -moz-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }
    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
    }

    article.child_page {
        max-width: 100%;

        & h2:first-child {
            margin-block-start: ${theme.standardSpace}px;
        }
        & .promoBanner:first-child {
            margin-top: 0; 
        }
    }
    article {
        max-width: 100%;
        &.landing_page {
            .text_block, .lead_paragraph {

                @media screen and (min-width: ${theme.m}){
                    max-width: calc(${theme.l} - 400px);
                }
                @media screen and (min-width: ${theme.xl}){
                    max-width: calc(${theme.xl} - 600px);
                }
            }
        }
    }

    aside {
        padding-top: ${theme.standardSpace}px;
        padding-bottom: 0px;
        & h2:first-child {
            margin-block-start: 0;
        }
        @media screen and (max-width: ${theme.m}){
            width: 100%;
            section {
                width: 100%;
            }
        }
        @media screen and (min-width: ${theme.m}){
            width: 100%;
            section {
                width: 75%;
            }
        }
        @media screen and (min-width: ${theme.l}){
            padding-top: 0px;
            padding-bottom: 0px;
            width: calc(34% - 50px);
            margin-left: 50px;
            margin-right: 0px;
            section {
                width: 100%;
            }
        }
    }

    .page_links_block + .call_to_action_block, .article_grid_block + .call_to_action_block, .show_film_block + .call_to_action_block, .show_event_block + .call_to_action_block {
        text-align: center;
        display: block;
    }
`

export const MainContentWrapper = styled.article`
    /* flex: 1; */
    /* flex: 0 1 100%; */
    flex: 1 1 0;
    width: 100%;
    
    &.child_page h2:first-child {
        margin-block-start: 0;
    }
    &.landing_page h2:first-child {
        margin-block-start: 1em;
    }
    iframe {
        border: none;
    }
    .map_embed {
        margin-bottom: ${theme.standardSpace}px;
    }
    &.landing_page {
        // h2, .filter_links {
        //     text-align: center;
        // }
        & .promoBanner:first-child {
            margin-top: ${theme.standardSpace}px;
        }
        .promoBanner h2 {
            margin-top: 0px;
        }
    }
    h2:first-child {
        margin-block-start: 0;
        margin-block-end: ${theme.standardSpace}px;
    }

    @media screen and (min-width: ${theme.m}){
        &.page_with_sidebar {
            width: 66%;

            .article_grid_block, .page_links_block {
                .pageCard, .articleCard {
                    margin-right: ${theme.standardSpace}px !important;
                    width: calc(50% - 12.5px);

                    &:nth-of-type(2n) {
                        margin-right: 0 !important;
                    }
                }
            }

            .scroller__filmcard {
                @media screen and (min-width: ${theme.l}){
                    flex: 0 0 54%;
                }
            }
        }
    }
`
export const MainContent = ({classes, children}) =>
    <MainContentWrapper role="main" className={classes}>{children}</MainContentWrapper>

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