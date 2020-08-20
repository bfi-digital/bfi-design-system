import React, { useState } from "react"
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
    padding-top: ${props => props.pageWithSideBar ? "15px" : "35px"};
    margin-top: ${theme.standardSpace}px;
    position: relative; 
    background: ${props => props.pageWithSideBar ? "transparent" : theme.grey};

    h2 {
        margin-top: 0;
        margin-bottom: ${theme.standardSpace}px;
    }

    &:before {
        display: ${props => props.pageWithSideBar ? "none" : "block"};
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -9998px;
        right: 0;
        box-shadow: 9999px 0 0 ${theme.grey};
        border-left: 9999px solid ${theme.grey};
        z-index: -1;
    }
`
const Articles = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    flex-wrap: wrap;


    .articleCard, .loadingArticleCard {
        width: 100%;

        @media screen and (min-width: ${theme.s}){
            width: calc(50% - 7px);
            margin-right: 14px;
            margin-bottom: 20px;
        }

        @media screen and (min-width: ${theme.m}){
            width: ${props => props.lessColumns ? "calc(50% - 12.5px)" : "calc(33.333% - 16.666px)"};
            margin-bottom: 35px;
            margin-right: ${theme.standardSpace}px;
        }
        @media screen and (min-width: ${theme.l}){
            min-width: 275px;
        }
    }

    &.noHighlight {
        .articleCard, .loadingArticleCard {
            @media screen and (min-width: ${theme.s}){
                &:nth-of-type(2n) {
                    margin-right: 0px;
                }
            }
            @media screen and (min-width: ${theme.m}){
                &:nth-of-type(2n) {
                    margin-right: ${props => props.lessColumns ? "0px" : (theme.standardSpace + "px")};
                }
                &:nth-of-type(3n) {
                    margin-right: ${props => props.lessColumns ? (theme.standardSpace + "px") : "0px"};
                }
                // &:nth-of-type(4n) {
                //     margin-right: ${props => props.lessColumns ? "0px" : (theme.standardSpace + "px")};
                // }  
            }
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
                margin-right: ${theme.standardSpace}px;
                margin-bottom: 35px;

                &:nth-of-type(2n+1) {
                    margin-right: ${theme.standardSpace}px;
                }
                &:nth-of-type(3n+1) {
                    margin-right: 0px;
                }
            }
            @media screen and (min-width: ${theme.m}){
                &:nth-of-type(3n) {
                    margin-right: ${theme.standardSpace}px;
                }
                &:nth-of-type(3n+1) {
                    margin-right: ${theme.standardSpace}px;
                }
                &:nth-of-type(3n+1) {
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
        }   
    }
    &.noBackground {
        .articleCard, .articleCardHighlighted {
            background: ${theme.lightGrey};

            &:hover, &:focus-within {
                background: ${theme.lightest};
            }
        }
    }
    .loadingArticleCard {
        &:nth-of-type(3n) {
            margin-right: 0px;
        }
    }
`
const CentredButton = styled(Button)`
    margin: ${theme.standardSpace}px auto;
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
    children,
    skeletons = 6,
    loadMoreLoading,
    limitArticles
}) => {
    const [currentNumber, setCurrentNumber] = useState(3)

    return(
        <Outer pageWithSideBar={pageWithSideBar} className="article_grid_block">
            {optionalTitle && 
                <StyledHeadline level={2} text={optionalTitle} />
            }
            {limitArticles ? 
                <>
                    <Articles 
                        lessColumns={(articles.length === 2)} 
                        className={(firstHighlighted ? "withHighlight" : "noHighlight") + (pageWithSideBar ? " noBackground" : " withBackground")}
                    >
                        {articles.slice(0, currentNumber).map(article =>
                            <ArticleCard key={article.uuid} pageWithSideBar={pageWithSideBar} lessColumns={articles.length === 2 || articles.length === 4} {...article}/>    
                        )
                        }
                    </Articles>
                    {currentNumber < articles.length &&
                        <CentredButton href="#4" onClick={() => setCurrentNumber(currentNumber+3)}>Load more</CentredButton>
                    }
                </>
                :
                <>
                    {articles ?
                        <Articles 
                            lessColumns={(articles.length === 2 || articles.length === 4) && !firstHighlighted} 
                            className={(firstHighlighted ? "withHighlight" : "noHighlight") + (pageWithSideBar ? " noBackground" : " withBackground")}
                        >
                            {firstHighlighted  === true || articles.length === 1 ?
                                <>
                                    <ArticleCardHighlighted key={articles[0].uuid} pageWithSideBar={pageWithSideBar} {...articles[0]}/>
                                    {articles.length > 1 &&
                                        articles.slice(1).map(article =>
                                            <ArticleCard key={article.uuid} pageWithSideBar={pageWithSideBar} lessColumns={articles.length === 2 || articles.length === 4} {...article}/>    
                                        )
                                    }
                                </>
                                :
                                articles.map(article =>
                                    <ArticleCard key={article.uuid} pageWithSideBar={pageWithSideBar} lessColumns={articles.length === 2 || articles.length === 4} {...article}/>    
                                )
                            }
                        </Articles>
                        :
                        <Articles lessColumns={articles.length === 2 || articles.length === 4} className="noHighlight skeletons">
                            {[...Array(skeletons)].map((i) => <Skeleton key={i} noBackground={pageWithSideBar} loadMoreLoading={loadMoreLoading} /> )}
                        </Articles>
                    }
                    { optionalCTALink &&
                        <CentredButton to={optionalCTALink}>{optionalCTATitle ? optionalCTATitle : "See more articles"}</CentredButton>
                    }
                    {children}
                </>
            }
        </Outer>
    )
}
