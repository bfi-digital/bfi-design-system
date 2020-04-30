import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { ArticleCard } from "./ArticleCard"
import { Button } from "../Button"
import { Headline } from "../Headline"

const Outer = styled.div`
    margin: 15px 0;
    padding: 15px 0;
    padding-top: 35px;
    margin-top: 35px;
    position: relative; 
    background: ${props => props.withSideBar ? "transparent" : theme.lightGrey};

    h2 {
        margin-top: 0;
        margin-bottom: 25px;
    }
    .articleCard {
        @media screen and (min-width: ${theme.s}){
            width: calc(50% - 12.5px);
            margin-right: 25px;
            &:nth-of-type(even) {
                margin-right: 0px;
            }
        }
        @media screen and (min-width: ${theme.m}){
            width: calc(33.333% - 16.666px);
            margin-right: 25px;
            &:nth-of-type(even) {
                margin-right: 25px;
            }
            &:nth-of-type(3n) {
                margin-right: 0px;
            }
            &:nth-of-type(4n) {
                margin-right: 25px;
            }
        }
        @media screen and (min-width: ${theme.l}){
            min-width: 275px;
        }
    }

    &:before {
        display: ${props => props.withSideBar ? "none" : "block"};
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
`
const CentredButton = styled(Button)`
    margin: 30px auto;
    max-width: 250px;
    display: block;
    text-align: center;
`

export const ArticleGrid = ({
    articles,
    optionalTitle,
    optionalCTALink,
    withSideBar
}) =>
    <Outer withSideBar={withSideBar}>
        {optionalTitle && 
            <Headline level={2} text={optionalTitle} />
        }
        <Articles>
            {articles.map(article =>
                <ArticleCard key={article.uuid} withSideBar={withSideBar} {...article}/>    
            )}
        </Articles>
        { optionalCTALink &&
            <CentredButton to={optionalCTALink}>See more articles</CentredButton>
        }
    </Outer>
