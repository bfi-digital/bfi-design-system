import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Link } from "@reach/router"
import { Headline } from "../Headline"
import arrow from "./arrow-right.svg"

const Outer = styled.li`
    position: relative;
    background: ${theme.lightGreen};
    box-shadow: -5px 5px 0px ${theme.racerGreen};
    padding: 25px;
    margin-bottom: 35px;
    border-radius: 10px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    position: relative;
    h4{
        margin-top: 0px;
        color: ${theme.racerGreen};
        margin-bottom: 20px;
    }
    &:hover, &:focus-within {
        a img{
            transform: translateX(5px)
        }
    }
    &:focus-within{
        box-shadow: 0px 0px 0px 5px ${theme.dustyPink};
    }
    &:active{
        box-shadow: -2px 2px 0px ${theme.racerGreen};
        transform: translate(-3px, 3px);
    }
`

const Description = styled.p`
    color: ${theme.racerGreen};
    margin-bottom: 35px;
    line-height: 1.5;
`

const CallToAction = styled(Link)`
    margin-top: auto;
    text-decoration: none;
    color: ${theme.racerGreen};
    font-weight: bold;
    &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    &:focus{
        outline: none;
    }
`

const Icon = styled.img`
    margin-left: 10px;
    transition: transform 0.2s ease-out;
`

export const PageLink = ({
    title,
    description,
    callToAction,
    url
}) =>
    <Outer>
        <Headline level={4} text={title} />
        <Description>{description}</Description>
        <CallToAction to={url}>
            {callToAction}
            <Icon src={arrow} alt=""/>
        </CallToAction>
    </Outer>

