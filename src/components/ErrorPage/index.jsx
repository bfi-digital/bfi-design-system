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

    @media screen and (min-width: ${theme.m}){
        display: flex;
    }
`
const Heading = styled.h1`
    font-family: ${theme.headingFont}; 
    position: relative;
    padding-bottom: 30px;
    margin-bottom: 30px;
    font-weight: bold;

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
    margin-right: 30px;
`
const Image = styled.div`
    img {
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: ${theme.m}){
        padding: 15px;

        img {
            margin-top: 15%;
        }
    }
`
const CTAContainer = styled.div`
    margin-top: ${theme.standardSpace}px;
    width: 100%;
`

const errorPageData = [
    {
        title: "Error",
        summary: "<p>Sorry, something seems to have gone wrong.</p><p>You can try going back or find what you are looking for on another page.</p>"
    },
    {
        title: "Page not found",
        summary: "<p>Sorry, something went wrong and we cannot find the page you are looking for.</p><p>You can try going back or find what you are looking for on another page.</p>"
    },
    {
        title: "Internal Server Error",
        summary: "<p>Sorry, this page doesn't seem to be working.</p><p>Try to refresh the page, or go back to home.</p>"
    },
    {
        title: "Page is forbidden",
        summary: "<p>Sorry, the page you are trying to access is restricted.</p><p>You can try going back or find what you are looking for on another page.</p>"
    },
    {
        title: "Temporarily unavailable",
        summary: "<p>Sorry, the page you are trying to access is currently having issues.</p><p>Try again later, or You can try going back or find what you are looking for on another page.</p>"
    }
]

export const ErrorPage = ({
    error,
    errorString,
    gifs
}) => {
    const random = Math.floor(Math.random() * Math.floor(gifs ? gifs.length : 2))

    return(
        <>
            <PageBackground></PageBackground>
            <ErrorContainer>
                <Content>
                    <Heading>
                        {error &&
                            <ErrorNumber>{error}</ErrorNumber>
                        }
                        <ErrorTitle>{error === 404 ? errorPageData[1].title : error === 500 ? errorPageData[2].title : error === 403 || error === 401 ? errorPageData[3].title : error === 503 ? errorPageData[4].title : errorPageData[0].title}</ErrorTitle>
                    </Heading>
                    {errorString ? 
                        <ErrorSummary>{errorString}</ErrorSummary>
                        :
                        <ErrorSummary>{error === 404 ? parse(errorPageData[1].summary) : error === 500 ? parse(errorPageData[2].summary) : error === 403 || error === 401 ? errorPageData[3].title : error === 503 ? parse(errorPageData[4].summary) : parse(errorPageData[0].summary)}</ErrorSummary>
                    }
                    <CTAContainer>
                        <Button level={1} url="/">Return to home</Button>
                    </CTAContainer>
                </Content>
                {gifs && gifs.length > random &&
                    <Image>
                        <img src={gifs[random].url} alt={gifs[random].alt} />
                    </Image>
                }
            </ErrorContainer>
            
        </>
    )
}

ErrorPage.propTypes = {
    /** 
	 * The type of error
	 **/
    error: PropTypes.number,
    /** 
	 * An optional string to support the error message
	 **/
    errorString: PropTypes.string,
    /** 
	 * An optional array of gifs that will be randomly placed on the page
	 **/
    gifs: PropTypes.array
}
