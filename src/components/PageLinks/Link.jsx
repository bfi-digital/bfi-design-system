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
    }
    p {
        margin-top: 0;
        margin-bottom: 20px;
    }
    &:hover, &:focus-within {
        box-shadow: 0px 5px 0px ${theme.dark};
        background: ${theme.lightest};

        a svg{
            transform: translateX(4px);
        }
        .image {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
    }
    &:focus-within{
        box-shadow: 0px 0px 0px 5px ${theme.focus};
        transition: box-shadow .3s;
        a {
            outline: none;
        }
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
    color: ${theme.dark};
    text-decoration: none;
    font-weight: 600;
    transition: box-shadow .3s; 
    width: 100%;
    
    &:hover{
        color: ${theme.black};
    }

    &:active{
        outline: none;
        text-decoration: underline;
    }
    &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`
const CTAText = styled.span`
    max-width: 80%;
    vertical-align: middle;
    display: inline-block;
`

const Icon = styled.div`
    display: inline-block;
    vertical-align: middle;   
    margin-top: 4px; 
    svg {
        margin-left: 10px;
        transition: transform 0.2s ease-out;
    }
`

const PageImageContainer = styled.div`
    background: ${theme.light};
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
    background: url("${props => props.imageSrc}");
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
        <Description>{description}</Description>
        <CallToAction external={external} to={url}>
            <CTAText>{callToAction !== "" ? callToAction : "Read this page"}</CTAText>
            <Icon><Arrow colourFill={theme.dark} /></Icon>
        </CallToAction>
    </Outer>

