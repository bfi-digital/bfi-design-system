import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
import { Headline } from "../Headline"
import Arrow from "./arrow-right"

const Outer = styled.li`
    position: relative;
    background: ${theme.lightGrey};
    box-shadow: 0px 5px 0px ${theme.primary};
    margin-bottom: 35px;
    // border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    min-height: 130px;

    width: 100%;
    padding: 15px;
    padding-top: ${props => props.withImages ? "135px" : "15px"};

    @media screen and (min-width: ${theme.m}){
        width: 190px;
        padding: 25px;
        padding-top: ${props => props.withImages ? "155px" : "25px"};
    }
    @media screen and (min-width: ${theme.l}){
        width: 220px;
        padding-top: ${props => props.withImages ? "225px" : "25px"};
    }


    h4{
        margin-top: 0;
        color: ${theme.black};
        margin-bottom: 15px;
        line-height: 1;
    }
    p {
        margin-top: 0;
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
        box-shadow: 0px 0px 0px 5px ${theme.highlight};
        transition: box-shadow .3s;
    }
    &:active{
        box-shadow: 0px 1px 0px ${theme.primary};
        transform: translate(0px, 3px);
    }
`

const Description = styled.p`
    color: ${theme.black};
    margin-bottom: 15px;
    line-height: 1.5;
`

const CallToAction = styled(Link)`
    margin-top: auto;
    text-decoration: none;
    color: ${theme.primary};
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
    background: ${theme.highlight};
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 120px;

    @media screen and (min-width: ${theme.m}){
        height: 130px;
    }
    @media screen and (min-width: ${theme.l}){
        height: 200px;
    }
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
            <Icon><Arrow colourFill={theme.primary} /></Icon>
        </CallToAction>
    </Outer>

