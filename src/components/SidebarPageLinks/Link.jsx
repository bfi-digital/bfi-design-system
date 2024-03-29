import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"

const Outer = styled.li`
    margin-bottom: 20px;
    position: relative;
    transition: box-shadow .3s;
    // border-radius: 5px;
    
    &:last-child {
        margin-bottom: 0px;
    }
    .pagelink_title {
        margin: 0;
        display: inline-block;
        vertical-align: middle;
        width: 60%;
        padding-right: 10px;
        font-weight: ${theme.fontWeight_semiBold};
        text-decoration: underline;
    }
    &:hover, &:focus-within {
        .image {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
        .pagelink_title {
            color: ${theme.dark};
            text-decoration: none;
        }
        
    }
    &:focus-within{
        box-shadow: 0px 0px 0px 3px ${theme.focus};
        outline: none;
    }
    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        height: 1px;
        width: 100%;
        background: ${theme.grey};
    }
    &:last-of-type {
        margin-bottom: ${theme.standardSpace}px;
    }
    &:first-of-type {
        margin-top: 25px;
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: -10px;
            height: 1px;
            width: 100%;
            background: ${theme.grey};
        }
    }
`
const PageImageContainer = styled.div`
    background: ${props => props.withImage ? theme.light : "transparent"};
    display: inline-block;
    width: ${props => props.withImage ? "calc(40% - 10px)" : "calc(40% - 10px)"};
    height: 100px;
    // border-radius: 4px;
    margin-right: 10px;
    vertical-align: middle;

    @media screen and (min-width: ${theme.m}){
        height: 150px;
    }
    @media screen and (min-width: ${theme.l}){
        height: 100px;
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

const CallToAction = styled(Link)`
    text-decoration: none;
    color: ${theme.black};
    display: block;
    min-height: 100px;

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

    @media screen and (min-width: ${theme.m}){
        min-height: 150px;
    }
    @media screen and (min-width: ${theme.l}){
        min-height: 100px;
    }
`
const Heading = styled.p`
    font-family: ${theme.bodyFont};
    color: ${theme.black};
    font-weight: ${theme.fontWeight_semiBold};
    font-size: ${theme.small_fontSize_m};
    line-height: 1.3;
    vertical-align: middle;

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.fontSize_s};
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: ${theme.fontSize_m};
        line-height: ${theme.lineHeight_m};
    }
`
export const PageLink = ({
    title,
    image,
    url
}) =>
    <Outer>
        <CallToAction to={url}>
            <Heading className="pagelink_title">{title}</Heading>
            
            <PageImageContainer withImage={image}>
                { image && 
                            <PageImage className="image" imageSrc={image} />
                }
            </PageImageContainer>
        </CallToAction>
    </Outer>
