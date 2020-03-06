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
        flex-direction: row;
    }
    @media screen and (min-width: ${theme.xl + 200}){
        max-width: ${theme.xl};
        padding: 70px ${theme.horizontalPadding};
    }
`

export const MainContent = styled.article`
    flex: 1;
`

export const Sidebar = styled.aside`
    padding-top: 25px;
    @media screen and (min-width: ${theme.m}){
        padding-top: ${props => props.leftSide ? "0" : "55px"};
        width: ${props => props.leftSide ? "25%" : "33%"};
        margin-left: ${props => props.leftSide ? "0px" : "70px"};
        margin-right: ${props => props.leftSide ? "70px" : "0px"};
    }
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

export const ShowingsGrid = styled.section`
    @media screen and (min-width: ${theme.m}){
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
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

export const AllShowingsButton = styled(Button)`
    padding: 15px;
`