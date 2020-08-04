import React from "react"
import styled from "styled-components"
import theme from "../../_theme"

const Outer = styled.li`
    position: relative;
    background: ${props => props.noBackground ? theme.lightGrey : theme.white};
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Meta = styled.div`
    border-radius: 100px;
    background: ${theme.grey};
    height: 18px;
    width: 30%;
    margin: 20px 0px;
`

const Headline = styled.div`
    border-radius: 100px;
    background: ${theme.grey};
    height: 21px;
    width: 80%;
    margin: 10px 0px;
`

export const Skeleton = ({noBackground, loadMoreLoading}) =>
    <Outer className="loadingEventCard" noBackground={noBackground} loadMoreLoading={loadMoreLoading}>
        <Inner>
            <Meta/>
            <Headline/>
            <Headline/>
            <Headline/>
            <Meta/>
        </Inner>
    </Outer>

