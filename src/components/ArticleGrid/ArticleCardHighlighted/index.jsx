import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
// import parse from "html-react-parser"
import { LinkSwitch as Link } from "../../LinkSwitch"
import { Headline } from "../../Headline"

const Outer = styled.li`
    position: relative;
    background: ${props => props.withSideBar ? theme.lightGrey : theme.white};
    box-shadow: 0px 5px 0px ${theme.primary};
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    min-height: 130px;
    width: 100%;
    padding: 15px;

    @media screen and (min-width: ${theme.m}){
        padding: 25px;
    }

    h4{
        margin-top: 0;
        color: ${theme.black};
        margin-bottom: 10px;
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

const Meta = styled.div`
    color: ${theme.darkGrey};
    margin-top: auto;
`
const Date = styled.p`
    margin-bottom: 10px;
`
const Author = styled.p`
    margin-bottom: 0;
`

const CallToAction = styled(Link)`
    width: 100%;
    
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

const Content = styled.div`
    padding-right: 25px;
    position: relative;
    padding-top: 180px;
    width: 100%;
    
    @media screen and (min-width: ${theme.m}){
        padding-top: ${props => props.withCategory ? "40px" : "0"};
        width: 55%;
        height: 100%;
    }
`
const PageImageContainer = styled.div`
    background: ${theme.light};
    display: block;
    top: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 175px;

    @media screen and (min-width: ${theme.m}){
        width: 45%;
        height: 100%;
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

const Standfirst = styled.p`
    color: ${theme.black};
    margin-bottom: 15px;
    line-height: 1.5;
`
const CategoryTag = styled.div`
    background: ${theme.primary};
    color: ${theme.white};
    padding: 5px;
    padding-left: 15px;
    padding-right: 10px;
    position: absolute;
    font-weight: 600;
    top: 15px;
    left: 0;
    z-index: 5;

    @media screen and (min-width: ${theme.m}){
        padding-left: 25px;
    }
`


export const ArticleCardHighlighted = ({
    withSideBar,
    title,
    url,
    image480x270,
    imageAltText,
    standfirst,
    category,
    date,
    author,
    external
}) =>
    <Outer className="articleCardHighlighted" withSideBar={withSideBar} withCategory={category ? true : false}>
        {category && <CategoryTag>{category}</CategoryTag> }
        <Content>
            <Headline level={4} text={title} />
            {standfirst && 
                <Standfirst>{standfirst}</Standfirst>
            }

            <Meta>
                <Date>{date}</Date>
                <Author>By {author}</Author>
            </Meta>
        </Content>

        <PageImageContainer>
            <PageImage className="image" imageSrc={image480x270} alt={imageAltText} />
        </PageImageContainer>

        <CallToAction to={url} external={external}/>
    </Outer>

