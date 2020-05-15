import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
import { Tag } from "../Tag"
import placeholderImage from "./placeholder.png"
   
const Outer = styled.li`
    margin-bottom: 20px;
    position: relative;
    transition: box-shadow .3s;
    // border-radius: 5px;
    background: ${theme.lightGrey};
    box-shadow: 0px 3px 0px ${theme.primary};
    padding: 10px;

    &:last-child {
        border: none;
        margin-bottom: 0px;
    }
    
    &:hover, &:focus-within {
        .image {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
        p.articlecard_title {
            color: ${theme.dark};
        }
    }
    &:hover, &:focus-within {
        box-shadow: 0px 3px 0px ${theme.dark};

        a svg{
            transform: translateX(4px);
        }
        .image {
            filter: grayscale(100%) contrast(1) blur(0px);
            mix-blend-mode: multiply;
        }
    }
    &:focus-within{
        box-shadow: 0px 0px 0px 3px ${theme.focus};
        transition: box-shadow .3s;
        a {
            outline: none;
        }
    }
    &:active{
        box-shadow: 0px 1px 0px ${theme.primary};
        transform: translate(0px, 3px);
    }
    &:last-of-type {
        margin-bottom: 25px;
        &:after {
            display: none;
        }
    }
`
const PageImageContainer = styled.div`
    background: ${theme.light};
    display: inline-block;
    width: calc(40% - 15px);
    height: 100px;
    // border-radius: 4px;
    margin-right: 15px;
    vertical-align: middle;
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

const Content = styled.div`
    margin: 0;
    display: inline-block;
    vertical-align: top;
    width: 60%;
`

const Heading = styled.p`
    font-family: "Open Sans";
    color: ${theme.black};
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 5px;

    @media screen and (min-width: ${theme.m}){
        font-size: 1rem;
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: 1.125rem;
    }
`
const Date = styled.p`
    margin-bottom: 5px;
    font-size: 0.8rem;
    color: ${theme.darkGrey};
    margin-top: 5px;
`
const Channels = styled.div`
    margin: 0;
    padding: 0;
    div {
        margin-right: 5px;
        font-size: 0.8rem;
    }
`
const StyledTag = styled(Tag)`
    div {
        background: ${theme.purple};
        color: ${theme.white};
    }
`
export const SidebarArticleCard = ({
    image480x270,
    title,
    category,
    url,
    imageAltText,
    date,
    external
}) =>
    <Outer>
        <CallToAction external={external} to={url}>
            <PageImageContainer>
                <PageImage className="image" imageSrc={image480x270 ? image480x270 : placeholderImage} alt={imageAltText} />
            </PageImageContainer>
            <Content>
                <Channels>
                    <StyledTag>{category}</StyledTag>
                </Channels>
                <Heading className="articlecard_title">{title}</Heading>
                <Date>{date}</Date>
            </Content>
        </CallToAction>
    </Outer>