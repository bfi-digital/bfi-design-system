import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
// import parse from "html-react-parser"
import { LinkSwitch as Link } from "../../LinkSwitch"
import { Headline } from "../../Headline"
import { Tag } from "../../Tag"

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
        box-shadow: 0px 0px 0px 5px ${theme.highlight};
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
    width: 55%;
    padding-right: 25px;
    height: 100%;
    position: relative;
`
const PageImageContainer = styled.div`
    background: ${theme.highlight};
    display: block;
    width: 45%;
    top: 0;
    right: 0;
    position: absolute;
    height: 100%;
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
const Categories = styled.div`
    margin-bottom: 10px;
`

const Standfirst = styled.p`
    color: ${theme.black};
    margin-bottom: 15px;
    line-height: 1.5;
`


export const ArticleCardHighlighted = ({
    withSideBar,
    title,
    url,
    image480x270,
    imageAltText,
    standfirst,
    categories,
    date,
    author,
    external
}) =>
    <Outer className="articleCardHighlighted" withSideBar={withSideBar}>
        <PageImageContainer>
            <PageImage className="image" imageSrc={image480x270} alt={imageAltText} />
        </PageImageContainer>
        <Content>
            {categories && 
                <Categories>
                    {categories.map(cat =>
                        <Tag key={cat}>{cat}</Tag>
                    )}
                </Categories>
            }
            <Headline level={4} text={title} />
            {standfirst && 
                <Standfirst>{standfirst}</Standfirst>
            }

            <Meta>
                <Date>{date}</Date>
                <Author>By {author}</Author>
            </Meta>
        </Content>
        <CallToAction to={url} external={external}/>
    </Outer>

