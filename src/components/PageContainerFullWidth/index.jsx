import styled from "styled-components"
import theme from "../_theme"

export const Wrapper = styled.div`
    max-width: ${theme.l};
    margin: 0 auto;
    padding: 40px ${theme.horizontalPadding};

    article {
        & h2:first-child {
            margin-block-start: 0.5em;
        }
    }
    
    @media screen and (min-width: ${theme.xl}){
        max-width: calc(${theme.xl} - 100px);
        padding: 70px ${theme.horizontalPadding};
    }
`

export const MainContent = styled.article`
    flex: 1;
    iframe {
        border: none;
    }
    .map_embed {
        margin-bottom: ${theme.standardSpace};
    }

    & h2:first-child {
        margin-block-start: 0.5em;
    }
`