import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
import { Headline } from "../Headline"
import Arrow from "./arrow-right.jsx"

const Outer = styled.li`
    position: relative;
    background: ${props => props.withImages ? theme.grey : theme.lightest};
    box-shadow: -5px 5px 0px ${theme.dark};
    padding: 25px;
    margin-bottom: 35px;
    // border-radius: 10px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    &:before {
        display: block;
        content: "";
        height: ${props => props.withImages ? "50%" : "0"};
    }
    h4{
        margin-top: 0;
        color: ${theme.dark};
        margin-bottom: 20px;
    }
    &:hover, &:focus-within {
        a svg{
            transform: translateX(5px);
        }
        .image {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
    }
    &:focus-within{
        box-shadow: 0px 0px 0px 5px ${theme.primary};
        transition: box-shadow .3s;
    }
    &:active{
        box-shadow: -2px 2px 0px ${theme.dark};
        transform: translate(-3px, 3px);
    }
`

const Description = styled.p`
    color: ${theme.dark};
    margin-bottom: 35px;
    line-height: 1.5;
`

const CallToAction = styled(Link)`
    margin-top: auto;
    text-decoration: none;
    color: ${theme.dark};
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

const Icon = styled.div`
    display: inline-block;
    vertical-align: middle;    
    svg {
        margin-left: 10px;
        transition: transform 0.2s ease-out;
    }
`

const PageImageContainer = styled.div`
    background: ${theme.light};
    display: inline-block;
    width: 100%;
    height: calc(50% - 25px);
    // border-radius: 4px;
    margin-right: 10px;
    position: absolute;
    top: 0;
    left: 0;
`
const PageImage = styled.div`
    width: 100%;
    background: url(${props => props.imageSrc});
    height: 100%;
    background-position: center center;
    background-size: cover;
    display: block;
    // border-radius: 4px;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s;
`

export const PageLink = ({
    title,
    description,
    callToAction,
    url,
    image480x320,
    external,
    withImages
}) =>
    <Outer withImages={withImages}>
        { withImages && 
            <PageImageContainer>
                <PageImage className="image" imageSrc={image480x320} />
            </PageImageContainer>
        }
        <Headline level={4} text={title} />
        { !withImages && 
            <Description>{description}</Description>
        }
        <CallToAction external={external} to={url}>
            {callToAction}
            <Icon><Arrow colourFill={theme.dark} /></Icon>
        </CallToAction>
    </Outer>

