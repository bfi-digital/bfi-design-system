import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
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
        .type_tag {
            background: ${theme.lightest};
            color: ${theme.black};
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
        margin-bottom: ${theme.standardSpace}px;
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
    font-family: ${theme.bodyFont};
    color: ${theme.black};
    font-weight: ${theme.fontWeight_semiBold};
    font-size: ${theme.small_fontSize_m};
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 5px;

    @media screen and (min-width: ${theme.m}){
        font-size: ${theme.fontSize_s};
    }
    @media screen and (min-width: ${theme.xl}){
        font-size: ${theme.fontSize_m};
        line-height: ${theme.lineHeight_m};
    }
`
const Author = styled.p`
    margin-bottom: 5px;
    font-size: ${theme.small_fontSize_m};
    color: ${theme.darkGrey};
    margin-top: 5px;
`

const StyledTag = styled.div`
    margin-right: 5px;
    font-size: ${theme.small_fontSize_m};
    display: inline-block;
    margin-bottom: 7px;
    background: ${theme.primary};
    color: ${theme.white};
    padding: 3px 5px;
`
export const SidebarArticleCard = ({
    image480x270,
    title,
    type,
    url,
    imageAltText,
    author,
}) =>
    <Outer>
        <CallToAction to={url}>
            <PageImageContainer>
                <PageImage className="image" imageSrc={image480x270 ? image480x270 : placeholderImage} alt={imageAltText ? imageAltText : ""} />
            </PageImageContainer>
            <Content>
                {type && <StyledTag className="type_tag">{type}</StyledTag> }
                {title && <Heading className="articlecard_title">{title}</Heading>}
                {author && <Author>By {author}</Author>}
            </Content>
        </CallToAction>
    </Outer>
