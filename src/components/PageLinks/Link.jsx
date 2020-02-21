import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
import { Headline } from "../Headline"
import arrow from "./arrow-right.svg"

const colorSchemes = [
    {
        background: theme.lightGreen,
        shadow: theme.darkGreen,
        text: theme.racerGreen,
        focus: theme.dustyPink
    }
]

const Outer = styled.li`
    position: relative;
    background: ${props => colorSchemes[props.colorScheme].background};
    box-shadow: -5px 5px 0px ${props => colorSchemes[props.colorScheme].shadow};
    padding: 25px;
    margin-bottom: 35px;
    border-radius: 10px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    position: relative;
    h4{
        margin-top: 0px;
        color: ${props => colorSchemes[props.colorScheme].text};
        margin-bottom: 20px;
    }
    &:hover, &:focus-within {
        a img{
            transform: translateX(5px)
        }
    }
    &:focus-within{
        box-shadow: 0px 0px 0px 5px ${props => colorSchemes[props.colorScheme].focus};
    }
    &:active{
        box-shadow: -2px 2px 0px ${props => colorSchemes[props.colorScheme].text};
        transform: translate(-3px, 3px);
    }
`

const Description = styled.p`
    color: ${props => colorSchemes[props.colorScheme].text};
    margin-bottom: 35px;
    line-height: 1.5;
`

const CallToAction = styled(Link)`
    margin-top: auto;
    text-decoration: none;
    color: ${props => colorSchemes[props.colorScheme].text};
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
    url,
    colorScheme,
    external
}) =>
    <Outer colorScheme={colorScheme}>
        <Headline level={4} text={title} />
        <Description colorScheme={colorScheme}>{description}</Description>
        <CallToAction external={external} to={url} colorScheme={colorScheme}>
            {callToAction}
            <Icon src={arrow} alt=""/>
        </CallToAction>
    </Outer>

