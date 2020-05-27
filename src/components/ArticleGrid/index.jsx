import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { ArticleCard } from "./ArticleCard"
import { ArticleCardHighlighted } from "./ArticleCardHighlighted"
import { Button } from "../Button"
import { Headline } from "../Headline"
import { Skeleton } from "./ArticleCard/Skeleton"

const Outer = styled.div`
    margin: 15px 0;
    padding: 15px 0;
    padding-top: 35px;
    margin-top: 25px;
    position: relative; 
    background: ${props => props.pageWithSideBar ? "transparent" : theme.lightGrey};

    h2 {
        margin-top: 0;
        margin-bottom: 25px;
        text-align: center;
    }

    &:before {
        display: ${props => props.pageWithSideBar ? "none" : "block"};
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -9999px;
        right: 0;
        box-shadow: 9999px 0 0 ${theme.lightGrey};
        border-left: 9999px solid ${theme.lightGrey};
        z-index: -1;
    }
`
const Articles = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .articleCard {
        @media screen and (min-width: ${theme.s}){
            width: calc(50% - 7px);
            margin-right: 14px;
            margin-bottom: 20px;

            &:nth-of-type(3n) {
                margin-right: 0px;
            }
        }

        @media screen and (min-width: ${theme.m}){
            width: ${props => props.lessColumns ? "calc(50% - 12.5px)" : "calc(33.333% - 16.666px)"};
            margin-bottom: 35px;
            margin-right: 25px;

            &:nth-of-type(2n) {
                margin-right: ${props => props.lessColumns ? "0px" : "25px"};
            }
            &:nth-of-type(3n) {
                margin-right: ${props => props.lessColumns ? "25px" : "0px"};
            }
            // &:nth-of-type(4n) {
            //     margin-right: ${props => props.lessColumns ? "0px" : "25px"};
            // }            
        }
        @media screen and (min-width: ${theme.l}){
            min-width: 275px;
        }
    }

    &.withHighlight {
        .articleCard {
            @media screen and (min-width: ${theme.s}){
                margin-right: 14px;
                &:nth-of-type(2n+1) {
                    margin-right: 0px;
                }
            }
            @media screen and (min-width: ${theme.m}){
                margin-right: 25px;
                margin-bottom: 35px;

                &:nth-of-type(2n+1) {
                    margin-right: 25px;
                }
                &:nth-of-type(3n+1) {
                    margin-right: 0px;
                }
            }
            @media screen and (min-width: ${theme.l}){
                &:nth-of-type(3n) {
                    margin-right: 25px;
                }
                &:nth-of-type(3n+1) {
                    margin-right: 25px;
                }
                &:nth-of-type(3n+2) {
                    margin-right: 0px;
                } 
            }
        }
        .articleCardHighlighted {
            @media screen and (min-width: ${theme.s}){
                width: 100%;
                margin-bottom: 20px;
                margin-right: 0px;
            }
            @media screen and (min-width: ${theme.m}){
                margin-bottom: 35px;
            }
            @media screen and (min-width: ${theme.l}){
                width: calc(66.666% - 8.332px);
                margin-right: 25px;
            }
        }   
    }
`
const CentredButton = styled(Button)`
    margin: 30px auto;
    max-width: 250px;
    display: block;
    text-align: center;
`
const StyledHeadline = styled(Headline)`
    text-align: center;
`   

export const ArticleGrid = ({
    articles,
    optionalTitle,
    optionalCTALink,
    optionalCTATitle,
    pageWithSideBar,
    firstHighlighted,
    children
}) =>
    <Outer pageWithSideBar={pageWithSideBar} className={firstHighlighted ? "withHighlight" : ""}>
        {optionalTitle && 
            <StyledHeadline level={2} text={optionalTitle} />
        }
        {articles ?
            <Articles lessColumns={articles.length === 2 || articles.length === 4}>
                {firstHighlighted  === true || articles.length === 1 ?
                    <>
                        <ArticleCardHighlighted key={articles[0].uuid} pageWithSideBar={pageWithSideBar} {...articles[0]}/>
                        {articles.length > 1 &&
                            articles.slice(1).map(article =>
                                <ArticleCard key={article.uuid} pageWithSideBar={pageWithSideBar} {...article}/>    
                            )
                        }
                    </>
                    :
                    articles.map(article =>
                        <ArticleCard key={article.uuid} pageWithSideBar={pageWithSideBar} {...article}/>    
                    )
                }
            </Articles>
            :
            <Articles>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
            </Articles>
        }
        { optionalCTALink &&
            <CentredButton to={optionalCTALink}>{optionalCTATitle ? optionalCTATitle : "See more articles"}</CentredButton>
        }
        {children}
    </Outer>
