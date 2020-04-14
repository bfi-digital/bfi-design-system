import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import theme from "../_theme"
import PropTypes from "prop-types"
import { Button } from "../Button"
import travolta from "./travolta.gif"
import kansas from "./kansas.gif"

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
    margin-bottom: 10px;
    @media screen and (min-width: ${theme.m}){
        display: flex;
    }
`
const Heading = styled.h1`
    position: relative;
    padding-bottom: 30px;
    margin-bottom: 30px;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 5px;
        width: 75px;
        background: ${theme.primary};
    }
`
const ErrorNumber = styled.span`
    display: block;
    font-size: 2.7em;
`
const ErrorTitle = styled.span`

`
const ErrorSummary = styled.div`
`

const Content = styled.div`
`
const Image = styled.div`
    img {
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: ${theme.m}){
        padding: 15px;

        img {
            margin-top: calc(50% - 104px);
        }
    }
`
const CTAContainer = styled.div`
    margin-bottom: 80px; 
    margin-top: 15px;
`

const errorPageData = [
    {
        title: "Error",
        summary: "<p>Sorry, something seems to have gone wrong.</p><p>Try going back to home.</p>"
    },
    {
        title: "Page not found",
        summary: "<p>Sorry, we can't find the page you are looking for or something has gone wrong...</p><p>Try going back to home and starting again.</p>"
    },
    {
        title: "Internal Server Error",
        summary: "<p>Sorry, this page doesn't seem to be working.</p><p>Try to refresh the page, or go back to home.</p>"
    },
    {
        title: "Page is forbidden",
        summary: "<p>Sorry, the page you are trying to access is restricted.</p><p>Try going back to home.</p>"
    }
]

export const ErrorPage = ({
    error
}) => {
    const random = Math.floor(Math.random() * Math.floor(2))

    return(
        <>
            <PageBackground></PageBackground>
            <ErrorContainer>
                <Content>
                    <Heading>
                        {error &&
                            <ErrorNumber>{error}</ErrorNumber>
                        }
                        <ErrorTitle>{error === 404 ? errorPageData[1].title : error === 500 ? errorPageData[2].title : error === 403 || error === 401 ? errorPageData[3].title : errorPageData[0].title}</ErrorTitle>
                    </Heading>
                    <ErrorSummary>{error === 404 ? parse(errorPageData[1].summary) : error === 500 ? parse(errorPageData[2].summary) : parse(errorPageData[0].summary)}</ErrorSummary>
                </Content>
                <Image>
                    <img src={random === 0 ? travolta : kansas} alt="" />
                </Image>
            </ErrorContainer>
            <CTAContainer>
                <Button level={1} url="/">Return to home</Button>
            </CTAContainer>
        </>
    )
}

ErrorPage.propTypes = {
    /** 
	 * The type of error
	 **/
    error: PropTypes.number
}
