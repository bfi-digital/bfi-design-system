import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import play from "./play.svg"
import { Button } from "../Button"

export const Wrapper = styled.div`
    max-width: ${theme.l};
    margin: 70px auto;
    padding: 0px ${theme.horizontalPadding};
    @media screen and (min-width: ${theme.m}){
        display: flex;
        flex-direction: ${props => props.sidebarLeft ? "row-reverse" : "row"};
    }
    @media screen and (min-width: ${theme.xl + 200}){
        max-width: ${theme.xl};
    }
    &:last-of-type{
        margin-bottom: 100px;
    }

    aside {
        padding-top: ${props => props.sidebarLeft ? "0" : "25px"};
        padding-bottom: ${props => props.sidebarLeft ? "25px" : "0px"};
        @media screen and (min-width: ${theme.m}){
            padding-top: 0px;
            padding-bottom: 0px;
            width: 33%;
            margin-left: ${props => props.sidebarLeft ? "0px" : "70px"};
            margin-right: ${props => props.sidebarLeft ? "50px" : "0px"};
        }
    }
`

export const MainContent = styled.article`
    flex: 1;
`

export const Sidebar = styled.aside`
`

export const Actions = styled.section`
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

const Icon = styled.img`
    margin-left: 13px;
    height: 14px;
`

export const PlayButton = props =>
    <Button {...props}>
        {props.children}
        <Icon src={play} alt=""/>
    </Button>