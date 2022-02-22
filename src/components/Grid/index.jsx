import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Button } from "../Button"
import { Scroller } from "../Scroller"

const Outer = styled.section`
    margin-bottom: ${theme.standardSpace*2}px;
    
    @media screen and (min-width: ${theme.s}){
        display: flex;
        -webkit-flex-direction: row;
        -moz-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        flex-wrap: wrap;
    }
`
const CentredButton = styled(Button)`
    margin: 30px auto;
    max-width: 250px;
    display: block;
    text-align: center;
`

const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
    condition ? wrapper(children) : wrapper2(children)


export const Grid = ({
    link,
    children,
    scroll
}) => {
    return <>
        <ConditionalWrapper
            condition={scroll}
            wrapper={children => <Scroller withoutBreak={link} noOfChildren={children.length}>{children}</Scroller>}
            wrapper2={children => <Outer>{children}</Outer>}
        >
            {children}
        </ConditionalWrapper>
        { link &&
            <CentredButton to={link.url}>{link.title}</CentredButton>
        }
    </>
}


import { LinkSwitch } from "../LinkSwitch"

const CardOuter = styled(LinkSwitch)`
    display: block;
    // border-radius: 5px;
    text-decoration: none;
    color: ${theme.black};
    margin-bottom: ${theme.standardSpace}px;
    transition: box-shadow .3s;
    width: 100%;
    position: relative;

    @media screen and (min-width: ${theme.s}){
        margin-right: 15px;
        margin-bottom: 15px;

        width: calc(50% - 10px);
        &:nth-of-type(even){
            margin-right: 0px;
        }
    }
    @media screen and (min-width: ${theme.m}){
        width: calc(33% - 8px);
        margin-bottom: 15px;

        &:nth-of-type(even){
            margin-right: 15px;
        }
        &:nth-of-type(3n){
            margin-right: 0px;
        }
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 5px white, 0px 0px 0px 9px ${theme.focus};
    }
    &::-moz-focus-inner {
        border: 0;
    }
    
`
const RestyledOuter = styled(CardOuter)`
    margin-right: 15px !important;
    flex: 0 0 80%;

    &:last-of-type {
        margin-right: 25px !important;
    }
    @media screen and (min-width: ${theme.m}){
        flex: 0 0 45%;
        &:nth-of-type(even){
            margin-right: 15px !important;
        }
        &:last-of-type {
            margin-right: 30px !important;
        }
    }
    @media screen and (min-width: ${theme.l}){
        flex: 0 0 37%;
        &:nth-of-type(3n){
            margin-right: 15px !important;
        }
    }
    @media screen and (min-width: ${theme.xl}){
        flex: 0 0 31%;
    }
`

export const GridCard = ({
    url,
    children,
    inScroller
}) =>
    <ConditionalWrapper
        condition={inScroller}
        wrapper={children => <RestyledOuter to={url}>{children}</RestyledOuter>}
        wrapper2={children => <CardOuter to={url}>{children}</CardOuter>}
    >
        {children}
    </ConditionalWrapper>
