import React from "react"
import styled from "styled-components"
import theme from "../../_theme"

const Outer = styled.li`
    position: relative;
    background: ${props => props.noBackground ? theme.lightGrey : theme.white};
    margin-bottom: 35px;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    min-height: 130px;
    width: 100%;
    border-bottom: 5px solid ${theme.grey};
    animation: pulse 1s infinite;
    animation-fill-mode: forwards;
    margin-top: ${props => props.loadMoreLoading ? "-60px" : "0"};
    &:nth-of-type(even){
        animation-delay: 0.5s
    }
    @keyframes pulse {
        0%{
            opacity: 1;
        }
        50%{
            opacity: 0.5
        }
        0%{
            opacity: 1;
        }
    }
`

const Inner = styled.div`
    padding: 15px;
`

const Meta = styled.div`
    border-radius: 100px;
    background: ${theme.grey};
    height: 18px;
    width: 30%;
    margin-top: 15px;
`

const Image = styled.div`
    background: ${props => props.noBackground ? theme.grey : theme.lightGrey};
    height: 188px;

    @media screen and (min-width: ${theme.m}){
        height: 160px;
    }
    @media screen and (min-width: ${theme.l}){
        height: 175px;
    }
    @media screen and (min-width: ${theme.xl}){
        height: 235px;
    }
`

const Headline = styled.div`
    border-radius: 100px;
    background: ${theme.grey};
    height: 21px;
    width: 80%;
`

export const Skeleton = ({noBackground, loadMoreLoading}) =>
    <Outer className="loadingArticleCard" noBackground={noBackground} loadMoreLoading={loadMoreLoading}>
        <Image noBackground={noBackground} />
        <Inner>
            <Headline/>
            <Meta/>
            <Meta/>
        </Inner>
    </Outer>

