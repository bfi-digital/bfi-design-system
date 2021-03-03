import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
// import parse from "html-react-parser"
import { LinkSwitch as Link } from "../../LinkSwitch"
import { Headline } from "../../Headline"
import parse from "html-react-parser"
import LazyImage from "react-lazy-progressive-image"

const Outer = styled.div`
    position: relative;
    background: ${props => props.pageWithSidebar ? theme.lightGrey : theme.white};
    box-shadow: 0px 5px 0px ${theme.primary};
    margin-bottom: 35px;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    min-height: 130px;
    width: 100%;
    padding: 15px;

    @media screen and (min-width: ${theme.m}){
        padding: ${theme.standardSpace}px;
    }

    .h3{
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 1.6875rem;
        @media screen and (min-width: ${theme.l}){
            font-size: 1.6875rem;
        }
        @media screen and (min-width: ${theme.xl}){
            font-size: 2rem;
        }
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
    @media screen and (min-width: ${theme.m}){
        min-height: 375px;
    }
    @media screen and (min-width: ${theme.l}){
        min-height: 450px;
    }
`

const Meta = styled.div`
    color: ${theme.darkGrey};
    margin-top: auto;
`
// const Date = styled.p`
//     margin-bottom: 10px;
// `
const Author = styled.p`
    margin-bottom: 0;
    margin-top: ${theme.standardSpace}px;
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
        z-index: 2;
    }
    span {
        display: none;
    }
`

const Content = styled.div`
    padding-right: ${theme.standardSpace}px;
    position: relative;
    padding-top: 225px;
    width: 100%;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    
    @media screen and (min-width: ${theme.m}){
        padding-top: ${props => props.withCategory ? "40px" : "0px"};
        width: 33%;
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
    height: 228px;

    @media screen and (min-width: ${theme.m}){
        width: 66%;
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
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s;
`

const Standfirst = styled.p`
    color: ${theme.black};
    margin-bottom: 15px;
    line-height: ${theme.lineHeight_s};
`
const CategoryTag = styled.div`
    background: ${theme.primary};
    color: ${theme.white};
    padding: 5px;
    padding-left: 15px;
    padding-right: 10px;
    position: absolute;
    font-weight: ${theme.fontWeight_semiBold};
    top: 15px;
    left: 0;
    z-index: 1;
    font-size: ${theme.small_fontSize_m};

    &::first-letter {
        text-transform: uppercase;
    }
    
    @media screen and (min-width: ${theme.m}){
        padding-left: ${theme.standardSpace}px;
        font-size: ${theme.fontSize_s};
    }
`


export const ArticleCardHighlighted = ({
    pageWithSidebar,
    title,
    url,
    image480x270,
    image48x27,
    standfirst,
    category,
    author,
    external,
    type
}) =>
    <Outer className="articleCardHighlighted" pageWithSidebar={pageWithSidebar}>
        {category ? 
            <CategoryTag>{category}</CategoryTag> 
            :
            type && <CategoryTag>{type}</CategoryTag>
        }
        <Content withCategory={category ? true : type ? true : false}>
            <Headline level={6} text={title} />
            {standfirst && 
                <Standfirst>{parse(standfirst)}</Standfirst>
            }

            <Meta>
                {author && <Author>By {author}</Author>}
            </Meta>
        </Content>

        <PageImageContainer>
            <LazyImage
                src={image480x270}
                placeholder={image48x27 ? image48x27 : image480x270}
                visibilitySensorProps={{
                    partialVisibility: true
                }}
            >
                {src => <PageImage className="image" imageSrc={src} alt="" />}
            </LazyImage>
        </PageImageContainer>

        <CallToAction 
            to={url}
            external={external} 
            className={external ? "external_link" : ""}
            title={"Read " + title}
        >
            <span>{title}</span>
        </CallToAction>    
    </Outer>

