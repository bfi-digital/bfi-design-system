import React from "react"
import styled from "styled-components"
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
`
const Heading = styled.h1`

`
const ErrorNumber = styled.span`
    display: block;
    font-size: 3em;
`
const ErrorTitle = styled.span`

`
const ErrorSummary = styled.p`
    display: block;
`

const errorPageData = [
    {
        title: "Error",
        summary: "Test"
    },
    {
        title: "Page not found",
        summary: "Test"
    },
    {
        title: "Internal Server Error",
        summary: "Test"
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
            <ErrorSummary>{error === 404 ? errorPageData[1].summary : error === 500 ? errorPageData[2].summary : errorPageData[0].summary}</ErrorSummary>
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