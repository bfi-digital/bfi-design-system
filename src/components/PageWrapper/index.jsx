import styled from "styled-components"
import theme from "../_theme"

const padding = width => `${theme.standardSpace}px calc(50vw - ${width} / 2 + ${theme.horizontalPadding});`

// This is a copy of the Wrapper element that uses padding and calc
// instead of max-with to set the content width. This means a background
// colour can be set on the box to cover the full page width.
// Apart from that, it should render the same as the other Wrapper element
// @todo Test that the behaviour is correct and then replace Wrapper with this code
export const PageWrapper = styled.div`
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

    @media screen and (min-width: ${theme.l}){
        padding: ${padding(theme.l)};
    }

    @media screen and (min-width: ${theme.xl}){
        padding: ${padding(`(${theme.xl} - 100px)`)};
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