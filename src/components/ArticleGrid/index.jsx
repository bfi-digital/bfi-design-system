import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { ArticleCard } from "./ArticleCard"
import { Button } from "../Button"
import { Headline } from "../Headline"

const Container = styled.div`
    background: ${theme.lightGrey};
    padding: 20px 0;
`

const MaxWidth = styled.article`
    max-width: ${theme.l};
    margin: 0 auto;
    @media screen and (min-width: ${theme.xl + 200}){
        max-width: ${theme.xl};
    }
`

const GridOuter = styled.section`
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
`
const Articles = styled.div`
    margin: 0;
    padding: 0;
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
    optionalCTALink
}) =>
    <Container>
        <MaxWidth>
            <GridOuter>
                {optionalTitle && 
                    <Headline level={2} text={optionalTitle} />
                }
                <Articles>
                    {articles.map(article =>
                        <ArticleCard key={article.uuid} {...article}/>    
                    )}
                </Articles>
                { optionalCTALink &&
                    <CentredButton to={optionalCTALink}>See more articles</CentredButton>
                }
            </GridOuter>
        </MaxWidth>
    </Container>