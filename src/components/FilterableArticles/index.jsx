import React, { useState, useEffect } from "react"
import styled from "styled-components"
import fetch from "isomorphic-unfetch"
import moment from "moment"
import { ArticleGrid } from "../ArticleGrid"
import { Filters } from "./Filters"
import { Button } from "../Button"
import queryString from "query-string"

const Outer = styled.div`
    margin-bottom: 50px;
`

const CentredButton = styled(Button)`
    margin: 30px auto;
    max-width: 250px;
    display: block;
    text-align: center;
`

export const FilterableArticles = ({
    categories
}) => {

    const query = queryString.parse(window.location.search)

    const [articles, setArticles] = useState([])
    const [maxPages, setMaxPages] = useState(1)

    const fetchAndTransformArticles = async query => {
        let newQuery = queryString.stringify({
            category: query.category,
            author: query.author,
            page: query.page
        })
        let res = await fetch(`https://news-index.explore.bfi.digital/api/articles?${newQuery}`)
        let data = await res.json()
        let transformedArticles = data.data.map(article => {
            return {
                key: article.uuid,
                title: article.title,
                url: article.url,
                categories: article.category ? [article.category.name] : false,
                image480x270: article.primary_image[2].url,
                date: moment(article.created).format("dddd Do MMMM YYYY")
            }
        })
        setArticles(articles.concat(transformedArticles))
        setMaxPages(data.meta.total)
    }
    
    useEffect(() => {
        fetchAndTransformArticles(query)
    }, [window.location.search])
    
    return(
        <Outer>
            <Filters categories={categories} query={query}/>
            {articles.length > 0 && 
                <ArticleGrid articles={articles} firstHighlighted>
                    {(query.page <= maxPages) && <CentredButton>Load more</CentredButton>}
                </ArticleGrid>
            }
        </Outer>
    )
}