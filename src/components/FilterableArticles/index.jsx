import React from "react"
import styled from "styled-components"
import { ArticleGrid } from "../ArticleGrid"
import { FilterLinks } from "../FilterLinks"
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
    articles,
    limit,
    includeHighlight,
    optionalTitle,
    optionalCTATitle,
    optionalCTALink,
    loadMore,
}) => {

    return(
        <Outer>
            {filters && <FilterLinks links={filters} /> }
            {articles && articles.length > 0 ? 
                <>
                    {!limit ?
                        <ArticleGrid articles={articles} firstHighlighted={includeHighlight}>
                            {loadMore && <CentredButton href="#" onClick={loadMore}>Load more</CentredButton>}
                        </ArticleGrid>
                        :
                        <ArticleGrid articles={articles.slice(0,limit)} optionalTitle={filters ? false : optionalTitle} firstHighlighted={includeHighlight} optionalCTATitle={optionalCTATitle} optionalCTALink={optionalCTALink} />
                    }
                </>
                :
                <ArticleGrid articles={false} />
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
    optionalTitle: PropTypes.string,
    /** 
    * An optional link that will be used to add a link within the grey background - this should be used to send the user to all articles page
    **/
    optionalCTALink: PropTypes.string,
    /** 
    * An optional title for the link that will be used to add a link within the grey background - this should be used to send the user to all articles page
    **/
    optionalCTATitle: PropTypes.string,
    /**
     * An optional function that is to be called when the 'load more' button is pressed. If omitted, the load more button is not shown.
     */
    loadMore: PropTypes.func
}

FilterableArticles.defaultProps = {
    parameter: "type",
    includeHighlight: true
}