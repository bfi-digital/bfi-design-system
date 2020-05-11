import React, { useState, useEffect } from "react"
import styled from "styled-components"
import fetch from "isomorphic-unfetch"
import moment from "moment"
import { ArticleGrid } from "../ArticleGrid"
import { Filters } from "./Filters"
import { Button } from "../Button"
import queryString from "query-string"
import PropTypes from "prop-types"

const Outer = styled.div`
    margin-bottom: 50px;
`

const CentredButton = styled(Button)`
    margin: 30px auto;
    max-width: 250px;
    display: block;
    text-align: center;
`

const transformAuthors = authors => {
    let names = authors.map(author => author.name)
    if(names.length > 2){
        return names[0] + ", " + names[1] + " and others"
    } else if(names.length === 2){
        return names.join(" and ")
    } else {
        return names[0]
    }
}

const transformArticles = articles => articles.map(article => {
    return {
        key: article.id,
        title: article.title,
        url: article.url,
        author: article.authors ? transformAuthors(article.authors) : false,
        category: article.category ? article.category.name : "Uncategorised",
        image480x270: article.primary_image[2].url,
        date: moment(article.created).format("dddd Do MMMM YYYY")
    }
})


export const FilterableArticles = ({
    filters,
    parameter,
    limit
}) => {
    const query = queryString.parse(window.location.search)

    const [articles, setArticles] = useState([])

    const [page, setPage] = useState(1)
    const [maxPages, setMaxPages] = useState(1)

    const fetchArticles = async (query, newPage) => {
        let newQuery = queryString.stringify({
            [parameter]: query[parameter],
            author: query.author,
            page: newPage
        })
        let res = await fetch(`https://content-store.explore.bfi.digital/api/articles?${newQuery}`)
        let data = await res.json()
        let transformedArticles = transformArticles(data.data)
        setArticles(articles.concat(transformedArticles))
        setMaxPages(data.meta.total)
    }

    const loadMore = () => {
        fetchArticles(query, page + 1)
        setPage(page + 1)
    }
    
    useEffect(() => {
        fetchArticles(query)
    }, [window.location.search])

    return(
        <Outer>
            {!limit ?
                <>
                    <Filters 
                        filters={filters} 
                        query={query} 
                        parameter={parameter}
                    />
                    {articles.length > 0 ?
                        <ArticleGrid articles={articles} firstHighlighted>
                            {(page < maxPages) && !limit && <CentredButton href="#" onClick={loadMore}>Load more</CentredButton>}
                        </ArticleGrid>
                        :
                        <ArticleGrid articles={false} />
                    }
                </>
                :
                <>
                    {articles.length > 0 ? 
                        <ArticleGrid articles={articles.slice(0,8)} firstHighlighted>
                            {(page < maxPages) && !limit && <CentredButton href="#" onClick={loadMore}>Load more</CentredButton>}
                        </ArticleGrid>
                        :
                        <ArticleGrid articles={false} />
                    }
                </>
            }
        </Outer>
    )
}

FilterableArticles.propTypes = {
    // The taxonomy of what will be filtered, for example 'category' or 'author'
    parameter: PropTypes.string,
    // Array of the filters - for a single filter taxonomy, this can just be a single option
    filters: PropTypes.array,
    // An optional boolean that can be used to disable the filters and just show the first set of posts - this should only be used on the landing page.
    limit: PropTypes.bool
}