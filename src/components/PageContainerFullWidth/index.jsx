import styled from "styled-components"
import theme from "../_theme"

export const Wrapper = styled.div`
    max-width: ${theme.l};
    margin: 0 auto;
    padding: ${theme.standardSpace}px ${theme.horizontalPadding};

    article {
        & h2:first-child {
            margin-block-start: 0;
        }
    }

    div:last-of-type {
        margin-bottom: 0;
    }
    @media screen and (min-width: ${theme.m}){
        padding: ${theme.standardSpace*2}px ${theme.horizontalPadding};
    }
    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
        padding: ${theme.standardSpace*2}px ${theme.horizontalPadding};
    }
`

export const MainContent = styled.article`
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
`