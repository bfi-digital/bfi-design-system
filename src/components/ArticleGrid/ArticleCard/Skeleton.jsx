import React from "react"
import styled from "styled-components"
import theme from "../../_theme"

const Outer = styled.li`
    position: relative;
    background: ${theme.white};
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    min-height: 130px;
    width: 100%;
    border-bottom: 5px solid ${theme.grey};
    animation: pulse 1s infinite;
    animation-fill-mode: forwards;
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
    background: ${theme.grey};
    height: 140px;
`

const Headline = styled.div`
    border-radius: 100px;
    background: ${theme.grey};
    height: 21px;
    width: 80%;
`

export const Skeleton = () =>
    <Outer className="articleCard">
        <Image/>
        <Inner>
            <Headline/>
            <Meta/>
            <Meta/>
        </Inner>
    </Outer>

