import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { ArticleGrid } from "../ArticleGrid"
import { FilterLinks } from "../FilterLinks"
import { Button } from "../Button"
import PropTypes from "prop-types"

const Outer = styled.div`
    margin-bottom: 50px;

    h2 {
        margin-bottom: ${theme.standardSpace}px;
    }
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
    loadMoreLoading,
    loading,
    greyBackground = false
}) => {

    return(
        <Outer>
            {filters && <FilterLinks links={filters} /> }
            {!loading ? 
                articles && articles.length > 0 ? 
                    <>
                        {!limit ?
                            <ArticleGrid articles={articles.length > 29 ? articles.slice(0, -1) : articles} firstHighlighted={includeHighlight} pageWithSideBar={greyBackground ? false : true}>
                                {loadMoreLoading && <ArticleGrid articles={false} skeletons={3} pageWithSideBar={greyBackground ? false : true} loadMoreLoading={loadMoreLoading} />}
                                {loadMore && <CentredButton href="#4" onClick={loadMore}>Load more</CentredButton>}
                            </ArticleGrid>
                            :
                            <ArticleGrid articles={articles.slice(0,limit)} optionalTitle={filters.length > 0 ? false : optionalTitle} firstHighlighted={includeHighlight} optionalCTATitle={optionalCTATitle} optionalCTALink={optionalCTALink} pageWithSideBar={greyBackground ? false : true} />
                        }
                    </>
                    :
                    <p>No articles found.</p>
                :
                <ArticleGrid articles={false} skeletons={limit} pageWithSideBar={greyBackground ? false : true} />
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
    loadMore: PropTypes.func,
    /**
     * A boolean to determine if the articles are currently loading
     */
    loading: PropTypes.bool
}

FilterableArticles.defaultProps = {
    parameter: "type",
    includeHighlight: true,
    loading: false
}