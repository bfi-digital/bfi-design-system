import styled from "styled-components"
import theme from "../_theme"

export const Wrapper = styled.div`
    max-width: ${theme.l};
    margin: 0 auto;
    padding: 40px ${theme.horizontalPadding};
    @media screen and (min-width: ${theme.m}){
        display: flex;
        flex-direction: row;
    }
    @media screen and (min-width: ${theme.xl}){
        max-width: ${theme.xl};
        padding: 70px ${theme.horizontalPadding};
    }
`

export const MainContent = styled.article`
    flex: 1;
`

export const Sidebar = styled.aside`
    @media screen and (min-width: ${theme.m}){
        padding-top: 55px;
        width: 33%;
        margin-left: 70px;
    }
`