import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
import { Headline } from "../Headline"
import Arrow from "./arrow-right"
import parse from "html-react-parser"
import ProgressiveImage from "react-progressive-graceful-image"

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
    padding-top: ${props => props.withImages ? "203px" : "15px"};

    @media screen and (min-width: ${theme.m}){
        width: 190px;
        padding: ${theme.standardSpace};
        padding-top: ${props => props.withImages ? (props.lessColumns ? "275px" : "185px") : "25px"};
    }
    @media screen and (min-width: ${theme.l}){
        width: 220px;
        padding-top: ${props => props.withImages ? (props.lessColumns ? "298px" : "200px") : "25px"};
    } 
    @media screen and (min-width: ${theme.xl}){
        width: 220px;
        padding-top: ${props => props.withImages ? (props.lessColumns ? "355px" : "260px") : "25px"};
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
const RestyledOuter = styled(Outer)`
    flex: 0 0 80%;
    margin-right: 25px !important;

    &:last-of-type {
        margin-right: 0px !important;
    }

    @media screen and (min-width: ${theme.m}){
        flex: 0 0 30%;
        &:nth-of-type(even){
            margin-right: 25px !important;
        }
    }
    @media screen and (min-width: ${theme.l}){
        &:nth-of-type(3n){
            margin-right: 25px !important;
        }
    }
`
const Description = styled.p`
    color: ${theme.black};
    margin-bottom: 15px;
    line-height: ${theme.lineHeight_s};
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
    height: 188px;

    @media screen and (min-width: ${theme.m}){
        height: ${props => props.lessColumns ? "250px" : "160px"};
    }
    @media screen and (min-width: ${theme.l}){
        height: ${props => props.lessColumns ? "273px" : "175px"};
    }
    @media screen and (min-width: ${theme.xl}){
        height: ${props => props.lessColumns ? "330px" : "235px"};
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
const ConditionalWrapper = ({ condition, wrapper, wrapper2, children }) => 
    condition ? wrapper(children) : wrapper2(children)

export const PageLink = ({
    title,
    description,
    callToAction,
    url,
    image480x270,
    image48x27,
    external,
    withImages,
    inScroller,
    lessColumns
}) =>
    <ConditionalWrapper
        condition={inScroller}
        wrapper={children => <RestyledOuter withImages={withImages} lessColumns={lessColumns}>{children}</RestyledOuter>}
        wrapper2={children => <Outer withImages={withImages} lessColumns={lessColumns}>{children}</Outer>}
    >
        { withImages && 
            <PageImageContainer lessColumns={lessColumns}>
                <ProgressiveImage
                    src={image480x270}
                    placeholder={image48x27}
                >
                    {src => <PageImage className="image" imageSrc={src} />}
                </ProgressiveImage>
            </PageImageContainer>
        }
        {title && <Headline level={7} text={title} />}
        {description && <Description>{parse(description)}</Description>}
        <CallToAction external={external} rel="noreferrer" to={url} target={external ? "_blank" : "_self"} title={"Open " + title + (external ? " in a new tab" : "")}>
            <CTAText>{callToAction !== "" ? callToAction : "Read this page"}</CTAText>
            <Icon><Arrow colourFill={theme.dark} /></Icon>
        </CallToAction>
    </ConditionalWrapper>

