import styled from "styled-components"
import theme from "../_theme"

export const Divider = styled.hr`
    border: 1px solid ${theme.darkGrey};
    margin: 30px auto;
    width: 100%;
    opacity: 0.5;

    @media screen and (min-width: ${theme.m}){
        margin: 50px auto;
    }
`