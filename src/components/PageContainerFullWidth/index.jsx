import styled from "styled-components"
import theme from "../_theme"
import React from "react"

export const Wrapper = styled.div`
    max-width: ${theme.l};
    margin: 0 auto;
    padding: ${theme.standardSpace}px ${theme.horizontalPadding};

    article {
        & h2:first-child {
            margin-block-start: 0;
        }
        & .promoBanner:first-child {
            margin-top: ${theme.standardSpace}px;
        }
    }

    .page_links_block + .call_to_action_block {
        text-align: center;
    }

    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
    }
`

const MainContentWrappper = styled.article`
    flex: 1;
    iframe {
        border: none;
    }
    .map_embed {
        margin-bottom: ${theme.standardSpace}px;
    }

    & h2:first-child {
        margin-block-start: 0;
    }
    &.landing_page {
        h2, .filter_links {
            text-align: center;
        }
    }
`
export const MainContent = ({landingPage, children}) =>
    <MainContentWrappper role="main" className={landingPage ? "landing_page" : ""}>{children}</MainContentWrappper>