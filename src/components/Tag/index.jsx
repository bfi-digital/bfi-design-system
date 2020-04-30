import styled from "styled-components"
import theme from "../_theme"

export const Tag = styled.div`
    display: inline-block;
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.7rem;
    background: ${theme.lightest};
    color: ${theme.dark};
`