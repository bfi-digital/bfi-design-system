import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { PageLink } from "./Link"

const Outer = styled.ul`
    padding: 15px;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
        @media screen and (min-width: ${theme.s}){
            width: calc(50% - 12.5px);
            margin-right: 25px;
            &:nth-of-type(even) {
                margin-right: 0px;
            }
        }
        @media screen and (min-width: ${theme.m}){
            width: calc(33.333% - 16.666px);
            margin-right: 25px;
            &:nth-of-type(even) {
                margin-right: 25px;
            }
            &:nth-of-type(3n) {
                margin-right: 0px;
            }
        }
        @media screen and (min-width: ${theme.l}){
            width: calc(25% - 18.75px);
            margin-right: 25px;
            &:nth-of-type(even) {
                margin-right: 25px;
            }
            &:nth-of-type(3n) {
                margin-right: 25px;
            }
            &:nth-of-type(4n) {
                margin-right: 0px;
            }
        }
    }
`

export const PageLinks = ({
    links
}) =>
    <Outer lessColumns={links.length === 3 || links.length === 6}>
        {links.map((link, i) =>
            <PageLink key={i} {...link}/>    
        )}
    </Outer>


