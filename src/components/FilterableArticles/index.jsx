import React from "react"
import styled from "styled-components"
import { ArticleGrid } from "../ArticleGrid"
import { Filters } from "./Filters"
import { Button } from "../Button"
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

export const FilterableArticles = ({
    filters,
    parameter,
    articles,
    allAction,
    limit,
    includeHighlight,
    internalTitle,
    internalLink,
    loadMore,
}) => {

    return(
        <Outer>
            {!limit ?
                <>
                    <Filters 
                        filters={filters} 
                        parameter={parameter}
                        allAction={allAction}
                    />
                    {articles && articles.length > 0 ?
                        <ArticleGrid articles={articles} firstHighlighted={includeHighlight} optionalTitle={internalTitle} optionalCTALink={internalLink}>
                            {loadMore && <CentredButton href="#" onClick={loadMore}>Load more</CentredButton>}
                        </ArticleGrid>
                        :
                        <ArticleGrid articles={false} />
                    }
                </>
                :
                <>
                    {articles && articles.length > 0 ? 
                        <ArticleGrid articles={articles.slice(0,limit)} firstHighlighted={includeHighlight} optionalTitle={internalTitle} optionalCTALink={internalLink} />
                        :
                        <ArticleGrid articles={false} />
                    }
                </>
            }
        </Outer>
    )
}

FilterableArticles.propTypes = {
    /** 
    * The taxonomy of what will be filtered, for example 'type' or 'author'
    **/
    parameter: PropTypes.string,
    /** 
    * Array of the filters - for a single filter taxonomy, this can just be a single option
    **/
    filters: PropTypes.array,
    /** 
    * Array of 'articles'. Should have all the props needed for the 'articles' prop of an ArticleGrid
    **/
    articles: PropTypes.array,
    /** 
    * An optional number that can be used to disable the filters/pagination and just show a specific number og posts - this should only be used on specific pages such as landing page.
    **/
    limit: PropTypes.number,
    /** 
    * An optional boolean to set if the first card is highlighted in the list. This defaults to true.
    **/
    includeHighlight: PropTypes.bool,
    /** 
    * An optional title that will be included within the grey background
    **/
    internalTitle: PropTypes.string,
    /** 
    * An optional link that will be used to add a link within the grey background - this should be used to send the user to all articles page
    **/
    internalLink: PropTypes.string,
    /**
     * An optional function that is to be called when the 'load more' button is pressed. If omitted, the load more button is not shown.
     */
    loadMore: PropTypes.func
}

FilterableArticles.defaultProps = {
    parameter: "type",
    includeHighlight: true
}