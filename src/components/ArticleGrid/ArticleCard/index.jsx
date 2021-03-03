import React from "react"
import styled from "styled-components"
import theme from "../../_theme"
import { LinkSwitch as Link } from "../../LinkSwitch"
import { Headline } from "../../Headline"
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
    padding-top: ${props => props.lessColumns ? "243px" : "243px"};;

    @media screen and (min-width: ${theme.m}){
        width: 190px;
        padding: ${theme.standardSpace}px;
        padding-top: ${props => props.lessColumns ? "225px" : "185px"};;
    }
    @media screen and (min-width: ${theme.l}){
        padding-top: ${props => props.lessColumns ? "240px" : "200px"};;
    }
    @media screen and (min-width: ${theme.xl}){
        padding-top: ${props => props.lessColumns ? "300px" : "260px"};;
    }


    .h3 {
        margin-top: 0;
        color: ${theme.black};
        margin-bottom: 0px;
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

    p {
        margin-top: 15px;
    }
`
// const Date = styled.p`
//     margin-bottom: 10px;
// `
const Author = styled.p`
    margin-bottom: 0;
    margin-top: 15px;
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

const PageImageContainer = styled.div`
    background: ${theme.light};
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 228px;

    @media screen and (min-width: ${theme.m}){
        height: ${props => props.lessColumns ? "205px" : "160px"};;
    }
    @media screen and (min-width: ${theme.l}){
        height: ${props => props.lessColumns ? "220px" : "175px"};;
    }
    @media screen and (min-width: ${theme.xl}){
        height: ${props => props.lessColumns ? "270px" : "235px"};;
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

    &::first-letter {
        text-transform: uppercase;
    }

    @media screen and (min-width: ${theme.m}){
        padding-left: ${theme.standardSpace}px;
        padding-right: 15px;
    }
`

export const ArticleCard = ({
    pageWithSidebar,
    title,
    url,
    image480x270,
    image48x27,
    category,
    author,
    type,
    lessColumns,
    external
}) =>
    <Outer className="articleCard" pageWithSidebar={pageWithSidebar} withCategory={category ? true : false} lessColumns={lessColumns}>
        {category ? 
            <CategoryTag>{category}</CategoryTag> 
            :
            type && <CategoryTag>{type}</CategoryTag>
        }
        <PageImageContainer lessColumns={lessColumns}>
            <LazyImage
                src={image480x270}
                placeholder={image48x27 ? image48x27 : image480x270}
            >
                {src => <PageImage className="image" imageSrc={src} alt="" />}
            </LazyImage>
        </PageImageContainer>
        <Headline level={6} text={title} />
        <Meta>
            {author && <Author>By {author}</Author>}
        </Meta>

        <CallToAction 
            to={url}
            external={external} 
            className={external ? "external_link" : ""}
            title={"Read " + title}
        >
            <span>{title}</span>
        </CallToAction>
    </Outer>

