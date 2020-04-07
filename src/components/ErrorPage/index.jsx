import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Button } from "../Button"

const PageBackground = styled.div`
    background: ${theme.lightGrey};
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
`
const ErrorContainer = styled.div`
    margin-bottom: 80px;
`
const Heading = styled.h1`

`
const ErrorNumber = styled.span`
    display: block;
    font-size: 2.7em;
`
const ErrorTitle = styled.span`

`
const ErrorSummary = styled.div`
`

const errorPageData = [
    {
        title: "Error",
        summary: "<p>Sorry, something seems to have gone wrong.</p><p>Try going back to home:</p>"
    },
    {
        title: "Page not found",
        summary: "<p>Sorry, we can't find the page you are looking for or something has gone wrong...</p><p>Try going back to home and starting again:</p>"
    },
    {
        title: "Internal Server Error",
        summary: "<p>Sorry, this page doesn't seem to be working.</p><p>Try to refresh the page, or go back to home:</p>"
    }
]

export const ErrorPage = ({
    error
}) =>
    <>
        <PageBackground></PageBackground>
        <ErrorContainer>
            <Heading>
                <ErrorNumber>{error}</ErrorNumber>
                <ErrorTitle>{error === 404 ? errorPageData[1].title : error === 500 ? errorPageData[2].title : errorPageData[0].title}</ErrorTitle>
            </Heading>
            <ErrorSummary>{error === 404 ? parse(errorPageData[1].summary) : error === 500 ? parse(errorPageData[2].summary) : parse(errorPageData[0].summary)}</ErrorSummary>
            <br/>
            <Button level={1} url="/">Return to home</Button>
        </ErrorContainer>
    </>

ErrorPage.propTypes = {
    /** 
	 * The type of error
	 **/
    error: PropTypes.number
}

ErrorPage.defaultProps = {
    error: 404
}