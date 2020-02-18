import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import logo from "./logo.svg"

const Outer = styled.footer`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 50px 0px;
    background: ${theme.charcoal};
`

const LogoImage = styled.img`
    height: 80px;
`

export const Footer = () => 
    <Outer>
        <LogoImage src={logo} alt="British Film Institute"/>
    </Outer>